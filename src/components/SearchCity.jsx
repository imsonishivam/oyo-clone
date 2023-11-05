"use client";

const SearchCity = () => {
  return (
    <div className=" bg-gradient-to-r from-red-600 to-orange-500 h-60">
      <div className="mx-10 flex flex-col justify-center gap-3 h-full">
        <h1 className="text-3xl font-bold text-white text-center p-3">
          Over 157,000 hotels and home across 35 counties
        </h1>
        <div className="grid grid-cols-5">
          <input
            type="text"
            placeholder="Seacrh by city, hotel, or neighthood"
            className=" h-14 outline-none p-5 text-lg border-r-2 border-gray-300 col-span-2"
          />
          <input
            type="text"
            placeholder="Seacrh by city, hotel, or neighthood"
            className=" h-14 outline-none p-5 text-lg border-r-2 border-gray-300 col-span-1"
          />
          <input
            type="text"
            placeholder="Seacrh by city, hotel, or neighthood"
            className=" h-14 outline-none p-5 text-lg col-span-1"
          />
          <button
            type="submit"
            className="col-span-1  bg-green-400 hover:cursor-pointer hover:bg-green-500 transition-all text-white text-lg"
          >
            Search
          </button>
        </div>
        <div className="flex items-center text-white my-2 gap-2">
          <button type="submit" className=" border-solid hover:cursor-pointer ">
            Continue your search
          </button>
          <button
            type="submit"
            className="border-white-200 border p-[12px] hover:cursor-pointer hover:bg-gray-500/30 transition-all rounded-md"
          >
            Inn Coorg Homestay - 2 Guests
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCity;
