import Image from "next/image";

const Header = () => (
  <div className="flex flew-row align-center ml-[-40px]">
    <Image src="/zkOfficer.webp" alt="zkOfficer" width={150} height={150} />
    <h1 className=" ml-[-20px] mt-[60px] text-xl font-mono">zk0fficer</h1>
  </div>
);

export default Header;
