import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const cities = [
    {
      name: "Bangalore",
    },
    {
      name: "Chennai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Gurgaon",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Kolkata",
    },
    { name: "Mumbai" },
    {
      name: "Noida",
    },
    {
      name: "Pune",
    },
  ];
  return (
    <div>
      <div className="flex bg-gray-100 justify-between px-10 text-gray-500">
        {cities.map((item, index) => (
          <span
            key={index}
            className="px-5 py-3 flex items-center gap-2 text-sm cursor-pointer"
          >
            {item.name}
            <AiOutlineDown className=" text-sm relative top-0.5" />
          </span>
        ))}
        <span className="px-5 py-3 flex items-center text-sm">All Cities</span>
      </div>
    </div>
  );
};

export default Header;
