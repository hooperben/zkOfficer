import { useState } from "react";
import Divider from "./divider";
import LoadingButton from "./button";
import useStore from "@/hooks/useStore";

import { useMutation } from "@tanstack/react-query";
import { getRandomBigInt } from "@/utils/getRandom";
import { ensurePoseidon, poseidonHash } from "@/utils/poseidon";
import useLeafInfo from "@/hooks/useLeafInfo";

interface SubmitResponse {
  txHash?: string;
  error?: string;
}

const Register = () => {
  const [inputValue, setInputValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { userSecret, setUserSecret } = useStore();
  const { setLeafIndex } = useLeafInfo();

  const [error, setError] = useState<string>();

  const submitRegister = async (): Promise<SubmitResponse> => {
    const secret = getRandomBigInt(256);

    await ensurePoseidon();

    const response = await fetch("/api/submit-proof", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usersHashedSecret: poseidonHash([secret]),
        firstName,
        lastName,
        hash: inputValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      setUserSecret(secret.toString());
      setLeafIndex(data.leafIndex);

      return data;
    }

    return { error: "Your proof isn't valid, sorry brussy/brussette :(" };
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

  const isSigValid = inputValue.length > 32;
  const isNameValid = firstName.length > 2 && lastName.length > 2;

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleFNChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleLNChange = (event: any) => {
    setLastName(event.target.value);
  };

  return (
    <div className="bg-[#D0D7E5] mb-[50px]">
      <div className="font-bold text-xl">Register</div>
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
            You have a valid proof within the registry contract! You can now use
            the features below!
          </p>
        </>
      )}

      {userSecret === "" && !error && (
        <>
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block font-bold text-md mb-2"
            >
              Please enter your signed identity proof (this should be an NFC
              scan, but apple stinks).
            </label>
            <input
              type="text"
              id="inputField"
              value={inputValue}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {isSigValid && (
            <div>
              <div className="mb-4 w-[500px] flex flex-row">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="block font-bold text-md mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleFNChange}
                    className="w=[200px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="ml-2 flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="block font-bold text-md mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLNChange}
                    className="w=[200px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mt-[30px]">
                <LoadingButton
                  onClick={mutateAsync}
                  isLoading={isPending}
                  isDisabled={!isNameValid || !isSigValid}
                >
                  Register
                </LoadingButton>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Register;
