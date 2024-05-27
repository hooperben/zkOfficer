"use client";

import Modal from "@/components/Modal";
import Header from "@/components/header";
import HowItWorks from "@/components/how-it-works";
import Register from "@/components/register";
import UserRewards from "@/components/user-rewards";
import { base64ToUint8Array } from "@/utils/base64ToUint8Array";
import { verifyIdProof } from "@/utils/generateProof";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [proofFromURL, setProofFromURL] = useState("");
  const [rootFromURL, setRootFromURL] = useState("");

  const router = useRouter();

  const [isValidProof, setIsValidProof] = useState(false);
  const [validating, setValidating] = useState(false);

  useEffect(() => {
    if (router.query.p && router.query.z) {
      setProofFromURL(router.query.p as string);
      setRootFromURL(router.query.z as string);

      setValidating(true);

      const formatted = base64ToUint8Array(router.query.p as string);

      const verifyProof = async () => {
        const validProof = await verifyIdProof(
          formatted,
          router.query.z as string
        );
        setIsValidProof(validProof);
      };

      verifyProof();

      setValidating(false);
    }
  }, [router.query.p, router.query.z]);

  return (
    <>
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
        <Register />
        <UserRewards />
        <HowItWorks />

        {proofFromURL && rootFromURL && (
          <Modal
            isOpen={proofFromURL && rootFromURL}
            onClose={() => {
              setProofFromURL("");
              setRootFromURL("");
            }}
            title="Proof Verification"
            isLarge
          >
            {!validating && isValidProof ? (
              <h3>Great Success!</h3>
            ) : (
              <h3>Proof is invalid 😢</h3>
            )}
          </Modal>
        )}
      </main>
    </>
  );
}
