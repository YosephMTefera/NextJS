import React from "react";
import Image from "next/image";
const Prototyping = () => {
  return (
    <div className="w-[100%] min-h-[70vh] flex justify-center items-center">
      <div className="w-[70%] mx-auto flex items-center justify-between max-[1200px]:w-[80%] max-[1000px]:flex-col max-[1000px]:gap-[20px]">
        <div>
          <Image
            src={"/undraw_newsletter_vovu.png"}
            width={500}
            height={500}
            className="max-[1400px]:w-[400px] max-[1000px]:w-[300px]"
          />
        </div>
        <div>
          <div className="flex flex-col gap-[10px] max-[1000px]:items-center max-[600px]:my-[30px]">
            <span className="font-bold max-[1400px]:text-[14px]">
              At your fingertips
            </span>
            <span className="text-[30px] max-[1400px]:text-[25px]">
              Lighting fast prototyping
            </span>
          </div>
          <div className="my-[20px] flex flex-col max-[1000px]:items-center">
            <span className="font-bold">Subscribe to our Newsletter</span>
            <span className="text-[14px] max-[1400px]:text-[12px]">
              Available exclusivery on Figmaland
            </span>
          </div>
          <div className="my-[30px] flex items-center gap-[20px] max-[600px]:flex-col">
            <input
              type="text"
              placeholder="Your Email"
              className="rounded-[20px] bg-[#F4F4F4] py-2 px-6 text-[14px] max-[600px]:w-[100%]"
            />
            <button className="bg-[#2091F9]  text-white text-[12px] py-2 px-6 rounded-[20px] outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototyping;
