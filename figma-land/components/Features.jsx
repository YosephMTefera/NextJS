import React from "react";
import Image from "next/image";
import { features } from "@/util/data";
const Features = () => {
  return (
    <div className="w-[100%] min-h-[100vh]  flex justify-center items-center">
      <div className="w-[80%] my-[100px] mx-auto flex flex-col justify-center items-center max-[1400px]:w-[90%] max-[700px]:w-[100%]">
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <span className="text-[30px]">Features</span>
          <div className="flex flex-col justify-center items-center">
            <span>Most calenders are designed for teams.</span>
            <span>Slate is designed for freelancers</span>
          </div>
        </div>
        {/* ______________________________ */}
        <div className="w-[70%] my-[100px] mx-auto flex justify-between items-center max-[1400px]:w-[90%] max-[700px]:flex-col">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="w-[30%] flex flex-col justify-center items-center gap-[10px] max-[700px]:w-[100%]"
              >
                <Image src={feature.iconPath} width={50} height={50} />
                <span className="font-bold text-center">{feature.title}</span>
                <span className="text-[12px] text-center max-[700px]:w-[50%]">
                  {feature.description}
                </span>
              </div>
            );
          })}
        </div>
        {/* ----------------------------- */}
        <div className="w-[70%]  flex justify-between items-center gap-[20px] max-[1400px]:w-[90%] max-[700px]:flex-col">
          <div>
            <span className="text-[50px] max-[900px]:text-[30px] max-[700px]:text-center">
              Fastest way to organize
            </span>
            <div className="flex flex-col max-[900px]:text-[14px] max-[700px]:text-center">
              <span>Most calenders are designed for teams.</span>
              <span>Slate is designed for freelancers</span>
            </div>
            <div className="max-[700px]:flex max-[700px]:justify-center max-[700px]:items-center">
              <button className="bg-[#2091F9] mt-[30px] text-white text-[12px] py-2 px-8 rounded-[20px] max-[900px]:py-1 max-[900px]:px-6">
                Try For Free
              </button>
            </div>
          </div>
          <div>
            <Image src={"/screen.png"} width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
