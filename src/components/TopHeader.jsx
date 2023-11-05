import Image from "next/image";
import Block from "./Block";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";

const TopHeader = () => {
  return (
    <div className="flex  pl-14 justify-between  items-center border-b-2 border-gray-100">
      <Image
        src={"/logo.png"}
        width={150}
        height={80}
        className="w-28 h-16 object-cover"
      />
      <div className="flex">
        <Block
          src={"/buildings.svg"}
          para={"Trusted by 5000 Corporates"}
          title={"OYO for Business"}
        />
        <Block
          src={"/bag.svg"}
          title={"List your property"}
          para={"Start earning in 30 mins"}
        />
        <Block
          src={"/call.svg"}
          title={"0124-6201611"}
          para={"Call us to Book now"}
        />
        <div className="languages flex items-center gap-1 border-l-2 border-gray-100 p-5">
          <BsGlobe className="text-2xl font-light" />
          <span className="text-sm font-bold">English</span>
          <AiOutlineCaretDown />
        </div>
        <div className="flex items-center border-l-2 border-gray-100 p-5 gap-1">
          <Image src={"/user.svg"} width={30} height={30} />
          <h3 className="font-bold text-sm">Login / Signup</h3>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
