"use client";

import Divider from "@/components/divider";
import Header from "@/components/header";
import Register from "@/components/register";
import UserRewards from "@/components/user-rewards";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-between p-12`}>
      <Header />
      <Register />
      <UserRewards />
    </main>
  );
}
