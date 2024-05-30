import { generateProof } from "@/utils/generateProof";
import Divider from "./divider";
import { useState } from "react";
import Tile from "./tile";
import Modal from "./Modal";
import LoadingButton from "./button";
import { useMutation } from "@tanstack/react-query";
import { getAddress } from "ethers";
import QRCode from "react-qr-code";
import useLeafInfo from "@/hooks/useLeafInfo";
import useMintInfo from "@/hooks/useMintInfo";
import useUsernameStore from "@/hooks/useUsernameStore";
import useStore from "@/hooks/useStore";

const UserRewards = () => {
  const [qrOpen, setQROpen] = useState(false);
  const [claimOpen, setClaimOpen] = useState(false);
  const [address, setAddress] = useState("");

  const [rewardStatus, setRewardStatus] = useState("");
  const { mintTx, setMintTx } = useMintInfo();
  const { username } = useUsernameStore();
  const { userSecret } = useStore();

  const { leafIndex } = useLeafInfo();

  const handleChange = (event: any) => {
    setAddress(event.target.value);
  };

  const submitRegister = async (): Promise<{
    txHash: string;
  }> => {
    // this will error if address is not valid
    getAddress(address);

    // we need to get the state of the tree (use back end endpoint)
    const response = await fetch("/api/get-history");

    if (!response.ok) {
      throw new Error("Error getting history :(");
    }
    const history = await response.json();

    console.log(history);

    setRewardStatus("Generating proof...");

    const proof = await generateProof(
      history,
      parseInt(leafIndex[0]),
      username,
      userSecret
    );

    setRewardStatus("Processing your transaction...");
    const submitRepose = await fetch("/api/submit-tx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proof: btoa(String.fromCharCode(...Array.from(proof.proof))),
        address: address,
        publicInputs: proof.publicInputs,
      }),
    });

    if (!submitRepose.ok) {
      throw new Error("Something went wrong :(");
    }

    const data = await submitRepose.json();

    setRewardStatus("");
    setMintTx(data.txHash);

    return history;
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: submitRegister,
    onError: (error) => {
      setRewardStatus("Error processing your transaction :( try again?");
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const [encodedProof, setEncodedProof] = useState("");

  const generateQRProof = async () => {
    setQROpen(true);

    // we need to get the state of the tree (use back end endpoint)
    const response = await fetch("/api/get-history");

    if (!response.ok) {
      throw new Error("Something went wrong :(");
    }
    const history = await response.json();

    console.log(history);

    setRewardStatus("Generating proof...");

    const proof = await generateProof(
      history,
      parseInt(leafIndex[0]),
      username,
      userSecret,
      true
    );
    const formatted = btoa(String.fromCharCode(...Array.from(proof.proof)));

    const domain = window.location.hostname.includes("vercel")
      ? window.location.hostname //
      : "http://localhost:3000";

    const encodedProof = `${domain}?p=${formatted}&z=${proof.publicInputs[0]}`;

    setEncodedProof(encodedProof);

    setRewardStatus("");
  };

  const [message, setMessage] = useState<string | null>(null);

  const showCopiedMessage = () => {
    setMessage("Copied!");

    // Clear the message after 2 seconds
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(encodedProof);
      showCopiedMessage();
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mb-[50px]">
      <div className="font-bold text-xl">zkOfficer Inspection Points</div>

      <Modal
        isOpen={qrOpen}
        onClose={() => setQROpen(false)}
        title="QR Proof of Credentials"
        isLarge
      >
        <div className="flex flex-col justify-center">
          {rewardStatus === "Generating proof..." && (
            <div className="text-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 inline-block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
          {rewardStatus && <p className="mt-4">{rewardStatus}</p>}
        </div>

        {encodedProof && (
          <div className="flex flex-col">
            <div>
              <p className="mb-4">
                Show this QR code to prove you have a valid credential (without
                revealing any of your details.)
              </p>
            </div>

            <QRCode
              value={encodedProof}
              size={300}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />

            <button
              onClick={copyToClipboard}
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Copy Link
            </button>

            {message && (
              <div className="flex text-center mt-2 justify-center text-size-xs">
                <p>{message}</p>
              </div>
            )}
          </div>
        )}
      </Modal>

      <Modal
        isOpen={claimOpen}
        onClose={() => setClaimOpen(false)}
        title="Anti Sybil Token Claim"
      >
        <div className="flex flex-col">
          <p className="mb-4"></p>
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block font-bold text-md mb-2"
            >
              Enter the address you&apos;d like to send the tokens to:
            </label>
            <input
              type="text"
              id="inputField"
              value={address}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {mintTx === "" && (
            <LoadingButton
              onClick={mutateAsync}
              isLoading={isPending}
              isDisabled={!address || address.length < 20}
            >
              Generate Proof and Claim
            </LoadingButton>
          )}

          {rewardStatus && <p className="mt-4">{rewardStatus}</p>}
          {mintTx && (
            <a
              href={`https://sepolia.etherscan.io/tx/${mintTx}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 mt-4"
            >
              Done! View your transaction on Etherscan
            </a>
          )}
        </div>
      </Modal>

      <Divider />

      <p className="mb-4">
        The zkOfficer is a public good that is hirable by any 3rd party (for
        free!), so that anyone can gate entry to their services based on whether
        or not they have a valid zkLicense.
      </p>
      <p className="mb-4">
        This allows the service owners to validate their users are authentic,
        and allows users to not surrender any details they don&apos;t want to
        (we&apos;ll elaborate on that a bit further down).
      </p>
      <p className="mb-4">
        If you&apos;ve got a zkLicense, you can currently use it in a few
        different places below:
      </p>

      <div className="flex">
        <Tile
          imageSrc="/human-proof.webp"
          title="Digital Proof of Your Credentials"
          description="Generate a QR code that proves that you have a valid zkLicense, without revealing anything about you (well, your username)."
          buttonText="Generate Proof"
          onButtonClick={generateQRProof}
        />

        <Tile
          imageSrc="/human.webp"
          title="Anti Sybil AirDrop Claim"
          description="Claim a one time token airdrop as a verified zkLicense holder, while keeping your username anonymous."
          buttonText={mintTx !== "" ? "View Claim Tx" : "Claim Now"}
          onButtonClick={
            mintTx !== ""
              ? () => openNewTab(`https://sepolia.etherscan.io/tx/${mintTx}`)
              : () => setClaimOpen(true)
          }
        />
      </div>
    </div>
  );
};

export default UserRewards;
