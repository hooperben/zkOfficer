import useStore from "@/hooks/useStore";
import Image from "next/image";
import LoadingButton from "./button";
import { useState } from "react";
import Modal from "./Modal";
import useLeafInfo from "@/hooks/useLeafInfo";
import useMintInfo from "@/hooks/useMintInfo";
import useUsernameStore from "@/hooks/useUsernameStore";

const Header = () => {
  const { userSecret, setUserSecret } = useStore();
  const { username, setUsername } = useUsernameStore();
  const { leafIndex, setLeafIndex } = useLeafInfo();
  const { setMintTx } = useMintInfo();

  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="flex justify-between w-[100%]">
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Your Account Details"
      >
        <div className="flex flex-col max-w-[500px]">
          <p className="mb-4 text-center">
            These values are what allows you to utilise your zkLicense.
          </p>
          <div className="w-[100%]">
            <table className="w-full table-fixed border-collapse">
              <tbody>
                <tr className="border-b align-top">
                  <td className="break-words max-w-[200px] text-center font-bold p-2">
                    Your username:
                  </td>
                  <td className="break-words max-w-[600px] text-center p-2">
                    {username}
                  </td>
                </tr>
                <tr className="border-b align-top">
                  <td className="break-words max-w-[200px] text-center font-bold p-2">
                    Your Secret:
                  </td>
                  <td className="break-words max-w-[600px] text-center p-2">
                    {userSecret}
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="break-words max-w-[200px] text-center font-bold p-2">
                    Your Leaf Index:
                  </td>
                  <td className="break-words max-w-[600px] text-center p-2">
                    {leafIndex}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {userSecret !== "" && (
            <div className="mt-12 flex flex-col justify-center">
              {!confirmDelete && (
                <button
                  className="m-2 bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  onClick={() => setConfirmDelete(true)}
                >
                  Delete My zkLicense
                </button>
              )}

              {confirmDelete && (
                <>
                  <p className="text-center mb-2">
                    Most of the time when you delete things on the internet,
                    it&apos;s not actually deleted.
                  </p>
                  <p className="text-center font-bold mb-2">
                    This is not one of those times.
                  </p>
                  <p className="text-center mb-2">
                    If you delete your zkLicense, it is almost a mathematical
                    certainty you cannot get it back.
                  </p>

                  <button
                    className="m-2 bg-gray-400  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    onClick={() => setConfirmDelete(false)}
                  >
                    Cancel Deletion
                  </button>
                  <button
                    className="m-2 bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    onClick={() => {
                      setLeafIndex("");
                      setUserSecret("");
                      setModalOpen(false);
                      setMintTx("");
                      setUsername("");
                    }}
                  >
                    Really Delete my Account
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </Modal>

      <div className="flex flew-row align-center ml-[-40px]">
        <Image src="/zkOfficer.webp" alt="zkOfficer" width={150} height={150} />
        <h1 className=" ml-[-20px] mt-[60px] text-xl font-mono">zk0fficer</h1>
      </div>

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
