"use client";

import Image from "next/image";
import React from "react";

const GetNotify = () => {
  return (
    <div className=" border-2 border-gray h-[100px] p-5 flex my-10 justify-between items-center rounded-lg">
      <div className="flex gap-10">
        <Image
          src={"/fire.jpg"}
          width={60}
          height={60}
          className="w-15 h-50 object-contain"
        />
        <div>
          <h2 className="text-xl font-bold">Get access to exclusive deals</h2>
          <p className="text-base text-gray-500">
            Only the best deals reach your inbox
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <fieldset className="border border-gray px-2 h-[55px] w-80 rounded-lg">
          <legend className="text-xs text-gray-500">Your email</legend>
          <input
            className="flex items-center cursor-pointer outline-none w-full"
            placeholder="e.g., john@email.com"
            type="email"
            name=""
            id=""
          />
        </fieldset>
        <button
          type="submit"
          className="px-8 py-0 h-[45px] bg-orange-600 cursor-pointer rounded-lg relative top-2 text-white hover:bg-orange-800 transition"
        >
          Notify me
        </button>
      </div>
    </div>
  );
};

export default GetNotify;
