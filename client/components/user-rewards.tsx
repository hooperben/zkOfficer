import { generateProof } from "@/utils/generateProof";
import Divider from "./divider";
import { useState } from "react";
import Tile from "./tile";
import Modal from "./Modal";
import LoadingButton from "./button";
import useStore from "@/hooks/useStore";
import { useMutation } from "@tanstack/react-query";
import { getAddress } from "ethers";
import QRCode from "react-qr-code";

const UserRewards = () => {
  const [qrOpen, setQROpen] = useState(false);
  const [claimOpen, setClaimOpen] = useState(false);
  const [address, setAddress] = useState("");
  const { userSecret } = useStore();

  const [rewardStatus, setRewardStatus] = useState("");

  const [mintTx, setMintTx] = useState("");

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
    const history = await response.json();

    setRewardStatus("Generating proof...");
    const proof = await generateProof(history);

    console.log(proof);

    setRewardStatus("Processing your transaction...");
    const submitRepose = await fetch("/api/submit-tx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proof: btoa(String.fromCharCode(...Array.from(proof.proof))), // proof.proof,
        address: address,
        publicInputs: proof.publicInputs,
      }),
    });
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
    const history = await response.json();

    setRewardStatus("Generating proof...");
    const proof = await generateProof(history);

    const formatted = btoa(String.fromCharCode(...Array.from(proof.proof)));

    // TODO fix
    const encodedProof = `https://localhost:3000?p=${formatted}`; // &i=${proof.publicInputs.join(

    setEncodedProof(encodedProof);

    setRewardStatus("");
  };

  return (
    <div className="mb-[50px]">
      <div className="font-bold text-xl">Verified User Rewards</div>

      <Modal
        isOpen={qrOpen}
        onClose={() => setQROpen(false)}
        title="QR Proof of Credentials"
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
          <QRCode
            value={encodedProof}
            size={300}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          />
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

      <div className="flex">
        <Tile
          imageSrc="/human-proof.webp"
          title="Digital Proof of Your Credentials"
          description="Prove you have a valid credential registered, without revealing your personal information."
          buttonText="Generate Proof"
          onButtonClick={generateQRProof}
        />

        <Tile
          imageSrc="/human.webp"
          title="Anti Sybil AirDrop Claim"
          description="Claim an airdrop as a verified human, while keeping your human identity anonymous."
          buttonText="Claim Now"
          onButtonClick={() => setClaimOpen(true)}
        />
      </div>
    </div>
  );
};

export default UserRewards;
