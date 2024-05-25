import { generateProof } from "@/utils/generateProof";
import Image from "next/image";
import Divider from "./divider";

const Tile = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}: any) => {
  return (
    <div className="m-1 rounded overflow-hidden shadow-lg bg-grey w-[300px]">
      <Image src={imageSrc} alt={title} width={300} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-center">
        <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const UserRewards = () => {
  const placeholder = true;

  return (
    <div>
      <div className="font-bold text-xl">Verified User Rewards</div>

      <Divider />

      <div className="flex">
        <Tile
          imageSrc="/human.webp"
          title="Human Based Coin"
          description="You can get human coin if you prove you're human"
          buttonText="Claim Now"
          onButtonClick={generateProof}
        />

        <Tile
          imageSrc="/human-proof.webp"
          title="Verifiable Humanity Token"
          description="Let other people know that you're verifiably human"
          buttonText="Claim Now"
          onButtonClick={generateProof}
        />
      </div>
    </div>
  );
};

export default UserRewards;
