import { useState } from "react";
import Divider from "./divider";
import LoadingButton from "./button";
import useStore from "@/hooks/useStore";

import { useMutation } from "@tanstack/react-query";
import { getRandomBigInt } from "@/utils/getRandom";
import { ensurePoseidon, poseidonHash } from "@/utils/poseidon";
import useLeafInfo from "@/hooks/useLeafInfo";
import useUsernameStore from "@/hooks/useUsernameStore";

interface SubmitResponse {
  txHash?: string;
  error?: string;
}

const Register = () => {
  const [inputValue, setInputValue] = useState("");
  const { userSecret, setUserSecret } = useStore();
  const { setUsername } = useUsernameStore();
  const { setLeafIndex } = useLeafInfo();

  const [error, setError] = useState<string>();

  const submitRegister = async (): Promise<SubmitResponse> => {
    const secret = getRandomBigInt(252);

    await ensurePoseidon();

    const response = await fetch("/api/submit-proof", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usersHashedSecret: poseidonHash([secret]),
        username: inputValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      setUserSecret(secret.toString());
      setLeafIndex(data.leafIndex);
      setUsername(inputValue);

      return data;
    }

    return {
      error:
        "This could be because of a few reasons, sorry brussy/brussette :(",
    };
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: submitRegister,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data: SubmitResponse) => {
      if (data.error) {
        setError(data.error);
      }
    },
  });

  const isSigValid = inputValue.length > 2 && inputValue.length < 20;

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="bg-[#D0D7E5] mb-[50px]">
      <div className="font-bold text-xl">Register Your zkLicense</div>
      <Divider />

      {error && (
        <>
          <h1 className="text-xl font-mono">Something went wrong!</h1>
          <p className="mt-4">{error}</p>

          <div>
            <LoadingButton onClick={() => setError(undefined)}>
              Try again?
            </LoadingButton>
          </div>
        </>
      )}

      {userSecret !== "" && (
        <>
          <h1 className="text-xl font-mono">Congratulations!</h1>
          <p className="mt-4">
            You now have a valid zkLicense. See below how it works, and what you
            can use it for.
          </p>
        </>
      )}

      {userSecret === "" && !error && (
        <>
          <div className="mb-4">
            <p>
              A zkLicense is a record that the zkOfficer can inspect and verify
              is real, without seeing anything about that record.
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block font-bold text-md mb-2"
            >
              <p>To create your zkLicense, enter a username:</p>
            </label>
            <input
              type="text"
              id="inputField"
              value={inputValue}
              onChange={handleChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <div className="w-[60%] mt-2">
              <p className="text-xs font-bold mb-1">Username rules:</p>
              <ul className=" list-none pl-5 text-xs">
                <li className="mb-1">1. Can be anything you want.</li>
                <li className="mb-1">
                  2. Has to be atleast 2 letters, and less than 30.
                </li>
                <li className="mb-1">
                  3. Try not to put anything too personal (this is the
                  internet).
                </li>
              </ul>
            </div>
          </div>

          <LoadingButton
            onClick={mutateAsync}
            isLoading={isPending}
            isDisabled={!isSigValid}
          >
            Get My zkLicense
          </LoadingButton>
        </>
      )}
    </div>
  );
};

export default Register;
