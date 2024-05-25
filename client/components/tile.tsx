import Image from "next/image";
import LoadingButton from "./button";
import useStore from "@/hooks/useStore";

const Tile = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}: any) => {
  const { userSecret } = useStore();

  return (
    <div className="m-1 rounded overflow-hidden shadow-lg bg-grey w-[300px]">
      <Image src={imageSrc} alt={title} width={300} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-center">
        <LoadingButton
          onClick={() => console.log("hello")}
          isLoading={false}
          isDisabled={userSecret === ""}
        >
          {buttonText}
        </LoadingButton>
      </div>
    </div>
  );
};

export default Tile;
