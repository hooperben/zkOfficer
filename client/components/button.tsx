import React from "react";

const LoadingButton = ({ isLoading, isDisabled, onClick, children }: any) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={`${
        isLoading || isDisabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-700"
      } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out min-w-[200px]`}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-3 inline-block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
