const Modal = ({ isOpen, onClose, children, title, isLarge }: any) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div
          className={`flex mt-4 justify-center items-center w-[${
            isLarge ? "500px" : "400px"
          }] break-words`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
