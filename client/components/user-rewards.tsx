import { generateProof } from "@/utils/generateProof";
import Divider from "./divider";
import ProofQRCode from "./proof-qr-code";
import { useState } from "react";
import Tile from "./tile";

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Proof</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="flex mt-4 justify-center items-center">
          <ProofQRCode />
        </div>
      </div>
    </div>
  );
};

const UserRewards = () => {
  const [qrOpen, setQROpen] = useState(false);

  return (
    <div className="mb-[50px]">
      <div className="font-bold text-xl">Verified User Rewards</div>

      <Modal isOpen={qrOpen} onClose={() => setQROpen(false)} />

      <Divider />

      <div className="flex">
        <Tile
          imageSrc="/human-proof.webp"
          title="Digital Proof of Your Credentials"
          description="Prove you have a valid registration, without revealing your personal information"
          buttonText="Generate Proof"
          onButtonClick={() => setQROpen(true)}
        />

        <Tile
          imageSrc="/human.webp"
          title="Anti Sybil AirDrop Claim"
          description="Claim your Sybil Drop rewards for being a (somewhat) verified human, while remaining anonymous."
          buttonText="Claim Now"
          onButtonClick={generateProof}
        />
      </div>
    </div>
  );
};

export default UserRewards;
