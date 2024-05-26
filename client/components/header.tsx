import useStore from "@/hooks/useStore";
import Image from "next/image";
import LoadingButton from "./button";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const { userSecret, setUserSecret } = useStore();

  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex justify-between">
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Your Secret"
      >
        <div className="flex flex-col">
          <p className="mb-4">
            This value is what allows you to utilise your encrypted registered
            record:
          </p>
          <div className="w-[100%] flex justify-center">
            <p className="break-words max-w-[300px] text-center">
              {userSecret}
            </p>
          </div>
        </div>
      </Modal>

      <div className="flex flew-row align-center ml-[-40px]">
        <Image src="/zkOfficer.webp" alt="zkOfficer" width={150} height={150} />
        <h1 className=" ml-[-20px] mt-[60px] text-xl font-mono">zk0fficer</h1>
      </div>

      {/* {userSecret !== "" && (
        <div className="mt-12">
          <LoadingButton
            onClick={() => setUserSecret("")}
            isLoading={false}
            isDisabled={false}
          >
            Clear Secret
          </LoadingButton>
        </div>
      )} */}

      {userSecret !== "" && (
        <div className="mt-12">
          <LoadingButton
            onClick={handleClick}
            isLoading={false}
            isDisabled={false}
          >
            My Account
          </LoadingButton>
        </div>
      )}
    </div>
  );
};

export default Header;
