import Footer from "@/components/Footer";
import GetNotify from "@/components/GetNotify";
import Header from "@/components/Header";
import SearchCity from "@/components/SearchCity";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <TopHeader />
      <Header />
      <SearchCity />
      <div className="mx-10">
        <Image
          src={"/banner1.avif"}
          width={100}
          height={10}
          className=" w-full h-full my-10"
        />
        <Image
          src={"/banner2.avif"}
          width={100}
          height={10}
          className=" w-full h-full"
        />
        <GetNotify />
      </div>
      <Footer />
    </div>
  );
};

export default page;
