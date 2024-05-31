"use client";

import Header from "@/components/header";
import HowItWorks from "@/components/how-it-works";
import Register from "@/components/register";
import UserRewards from "@/components/user-rewards";
import Head from "next/head";

export default function Home() {
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
      </main>
    </>
  );
}
