import { useState } from "react";
import Divider from "./divider";

const Button = ({
  text,
  onClick,
  variant,
}: {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
}) => {
  const baseStyles =
    "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
    </button>
  );
};

const Register = () => {
  const [inputValue, setInputValue] = useState(
    "0x51a1ec0d55aa607f8927cba091a66f4daf1f56caaee90dcdbad67b5cf4af8bd54ea4ba85b49bda9b8de08c9a0714611449bf8c74960f2307114942e26791ab991c"
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const isSigValid = inputValue.length > 32;
  const isNameValid = firstName.length > 0 && lastName.length > 0;

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleFNChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleLNChange = (event: any) => {
    setLastName(event.target.value);
  };

  return (
    <div className="bg-[#D0D7E5] mb-[50px]">
      <div className="font-bold text-xl">Register</div>
      <Divider />

      <div className="mb-4">
        <label htmlFor="inputField" className="block font-bold text-md mb-2">
          Please enter your signed identity proof (this would be NFC if apple
          weren&apos;t dogs).
        </label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {isSigValid && (
        <div className="mb-4 w-[500px] flex flex-row">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="block font-bold text-md mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFNChange}
              className="w=[200px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="ml-2 flex flex-col">
            <label htmlFor="lastName" className="block font-bold text-md mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLNChange}
              className="w=[200px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="ml-[20px] mt-[30px]">
            <Button
              onClick={() => console.log("hello")}
              text="Register"
              variant="primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
