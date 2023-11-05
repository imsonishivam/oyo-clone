import Image from "next/image";
import React from "react";

const Block = ({ src, title, para }) => {
  return (
    <div className="flex w-100 items-center justify-center p-5 gap-2 border-l-2 border-gray-100">
      <Image src={src} width={30} height={30} />
      <div className="flex-col gap-1">
        <h4 className=" text-sm font-bold">{title}</h4>
        <p className="text-xs">{para}</p>
      </div>
    </div>
  );
};

export default Block;
