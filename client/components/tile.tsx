import Image from "next/image";

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

export default Tile;
