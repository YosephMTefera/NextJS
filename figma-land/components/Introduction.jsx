import React from "react";
import Navbar from "./Navbar";

const Introduction = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-[#222B32] max-[600px]:min-h-[50vh]">
      <Navbar />
      <div className="w-[100%] h-[100%]  flex justify-center items-center">
        <div className=" w-[40%] min-h-[70%]  mx-auto mt-[100px] flex flex-col justify-center items-center max-[1700px]:w-[60%] max-[1100px]:w-[80%] max-[800px]:h-[100%]">
          <div className="flex flex-col text-center gap-[20px] max-[800px]:justify-center">
            <span className="text-[70px] text-white font-extrabold max-[800px]:text-[50px] max-[600px]:text-[30px]">
              The best products start with figma
            </span>
            <span className="mx-auto text-[27px] text-gray-300 max-[1300px]:text-[20px] max-[600px]:text-[14px]">
              Most calenders are designed for teams. slate is designed for
              freelancers
            </span>
          </div>

          <button className="bg-[#2091F9] mt-[30px] text-white text-[14px] py-2 px-8 rounded-[20px] max-[600px]:text-[12px] max-[600px]:py-1 max-[600px]:px-6">
            Try For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
