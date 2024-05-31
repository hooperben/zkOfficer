"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import Header from "@/components/header";
import { base64ToUint8Array } from "@/utils/base64ToUint8Array";
import { verifyIdProof } from "@/utils/generateProof";
import Modal from "@/components/Modal";

// Function to convert string back to Uint8Array
function stringToUint8Array(str: string): Uint8Array {
  const arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

const Prover = () => {
  const router = useRouter();

  const [proof, setProof] = useState<any>();
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(true);

  const [verifyingProof, setVerifyingProof] = useState(false);

  const [validProof, setValidProof] = useState<boolean>();

  useEffect(() => {
    if (router.query.path) {
      const getPathContents = async (path: string) => {
        try {
          const response = await fetch(`api/get-path-storage?path=${path}`);

          if (!response.ok) {
            setError("Invalid Proof :(");
            return;
          }

          const data = await response.json();

          setProof(data);
        } catch (err) {
          setError("Something went wrong :(");
        }

        setLoading(false);
      };

      getPathContents(router.query.path as string);
    }
  }, [router.query.path]);

  const verifyProof = async () => {
    setVerifyingProof(true);

    try {
      await verifyIdProof(stringToUint8Array(proof.proof), proof.publicInputs);
      setValidProof(true);
    } catch (err) {
      console.log(err);
      setValidProof(false);
    }

    setVerifyingProof(false);
  };

  return (
    <div>
      <Head>
        <title>zk0fficer</title>
        <meta
          name="description"
          content="digitally prove your physical documents"
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col justify-between p-12 w-[100%]`}
      >
        <Header />

        <Modal
          title="They're telling the truth!"
          isOpen={validProof}
          onClose={() => setValidProof(undefined)}
        >
          <div className="flex flex-col justify-center text-center align-center w-[100%]">
            <div className="flex justify-center w-[100%] mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1>This is proof of a valid zkLicense.</h1>
          </div>
        </Modal>

        <Modal
          title="They're a liar!"
          isOpen={validProof == false}
          onClose={() => setValidProof(undefined)}
        >
          <div className="flex flex-col justify-center text-center align-center w-[100%]">
            <div className="flex justify-center w-[100%] mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1>This is not proof of a valid zkLicense.</h1>
          </div>
        </Modal>

        {loading && (
          <div className="flex w-[100%] justify-center content-center ">
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
            <h1>Loading...</h1>
          </div>
        )}
        {proof && (
          <div className="flex flex-col justify-center w-[100%] content-center text-center align-center">
            <h1 className="mb-6">
              Someone wants to prove to you that they have a valid zkLicense.
            </h1>
            <div className="w-[100%]">
              <button
                onClick={verifyProof}
                disabled={verifyingProof}
                className="w-[100%] mb-6 max-w-[400px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out min-w-[200px]"
              >
                {verifyingProof ? (
                  <div className="flex w-[100%] justify-center content-center ">
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
                ) : (
                  <p>Verify their zkLicense</p>
                )}
              </button>
            </div>

            <h1 className="mb-4 font-bold">
              Their Proof of zkLicense Parameters:
            </h1>

            <div className="w-[100%]">
              <table className="w-full table-fixed border-collapse">
                <tbody>
                  <tr className="border-b align-top">
                    <td className="break-words text-center font-bold p-2">
                      The Proof:
                    </td>
                    <td className="break-words w-[80%] text-center p-2">
                      {base64ToUint8Array(proof.proof)}
                    </td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="break-words max-w-[200px] text-center font-bold p-2">
                      The Public Inputs of the Proof
                    </td>
                    <td className="break-words max-w-[1000px] text-center p-2">
                      {proof.publicInputs.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Prover;
