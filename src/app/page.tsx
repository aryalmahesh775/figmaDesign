import React from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

const DecorativeBackground = () => {
  return (
    <div className="relative hidden md:block">
      <Image
        src="/mid.png"
        alt="Decorative background"
        width={1092}
        height={514}
        className="absolute z-0 h-[800px] w-[944px] -translate-y-[500px] -translate-x-[490px] object-cover rotate-[75deg]"
      />
      <Image
        src="/skyline2.png"
        alt="Skyline graphic"
        width={892}
        height={514}
        className="absolute z-00 h-[100px] w-[500px] -mt-[80px] -left-[130px] object-contain"
      />
    </div>
  );
};

export default function Home() {
  const data = [
    {
      id: 1,
      image: "/first.png",
      text: "Festivalen genom tiderna",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      id: 2,
      image: "/second.png",
      text: "Nyheter",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      id: 3,
      image: "/third.png",
      text: "Festivalens områden",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      id: 4,
      image: "/fourth.png",
      text: "Frågor och svar",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      id: 5,
      image: "/fifth.png",
      text: "UNG Kulturfestival",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      id: 6,
      image: "/sixth.png",
      text: "Partner och sponsorer",
      link: "https://react-icons.github.io/react-icons/",
    },
  ];
  return (
    <div className="px-5 lg:px-16 bg-black ">
      <div className="relative min-h-screen text-white bg-black font-sans overflow-hidden">
        <Image
          src="/header.png"
          alt="headerImage"
          width={892}
          height={514}
          className="absolute right-[-362px] top-[-845px] z-10 rotate-[230.49deg]  object-cover"
        />
        {/* Top Bar */}
        <div className="pt-[40px] px-4 flex justify-between items-start">
          <span className="text-[18px] md:text-[29px] font-bold w-[100px] md:w-[191px] h-[20px] md:h-[36px]">
            FRI ENTRÉ
          </span>
          <div className="bg-black py-6 text-center md:block hidden">
            <Image
              src="/logo.png"
              alt="logo"
              width={3000}
              height={1000}
              className=" w-[372px] h-[152px] object-cover"
            />
          </div>
          <button className="w-[62px] h-[40px] md:h-[62px] bg-black z-50 rounded-full flex justify-center  items-center">
            <MdMenu className="text-3xl" />
          </button>
        </div>
        <div className="h-[75vh] w-full relative">
          <Image
            src="/hero.png"
            alt="logo"
            width={1000}
            height={1000}
            className=" w-full h-[75vh] object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-80 cursor-pointer text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
              ▶
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center my-10 px-4">
          <div className="bg-black py-6 text-[32px] md:text-[60px] font-semibold text-white leading-tight">
            1 FESTIVAL • 5 DAGAR • 6 OMRÅDEN
          </div>
          <button className="mt-6 bg-[#D0336C] hover:bg-[#b4295b] text-white text-lg font-medium px-10 py-3 transition duration-300 cursor-pointer">
            Se hela programmet här
          </button>
        </div>

        <div className="relative my-20 overflow-hidden">
          <div className="w-[90%] mx-auto">
            <Image
              src="/textImage.png"
              alt="textImage"
              width={1000}
              height={1000}
              className="h-full w-full mx-auto lg:ml-10 z-50  mb-6 object-fit"
            />
          </div>
          <div className="z-0">
            <DecorativeBackground />
          </div>
        </div>

        {/* Festival Info */}
        <div className="bg-black py-8 text-center">
          <h2 className="text-white text-[24px] md:text-[30px] font-semibold">
            Det här är KULTURFESTIVALEN
          </h2>
        </div>
        <div className="mx-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-black mb-40  ">
            {data.map((section, index) => (
              <a
                href={section.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  key={index}
                  className="relative h-[300px] w-full rounded overflow-hidden group cursor-pointer"
                >
                  <img
                    src={section.image}
                    alt={section.text}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute font-bold bottom-5 left-5 w-auto bg-black bg-opacity-70 text-white p-2 text-sm">
                    {section.text}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* footer */}
          <div className="border-gray-500  border-t-[1px]"></div>
          <footer className="bg-black text-white px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              {/* Logo */}
              <img
                src="/footerLogo.png"
                alt="Kultur Festival Logo"
                className="w-[161px] h-[59px]"
              />

              {/* Social Media */}
              <div>
                <p className="font-bold mb-2">Följ oss</p>
                <div className="text-[30px] flex gap-4">
                  <FaInstagram className="hover:text-pink-400 transition-colors cursor-pointer" />
                  <FaFacebookF className="hover:text-blue-500 transition-colors cursor-pointer" />
                  <FaTiktok className="hover:text-gray-300 transition-colors cursor-pointer" />
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="text-lg font-bold mb-1">KONTAKT</p>
                <a href="www.gmail.com" target="_blank">
                  kulturfestivalen@stockholm.se
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
