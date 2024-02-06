import { pricing } from "@/util/data";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="w-[100%] p-2 min-h-[100vh] bg-[#252B42]">
      <div className="w-[80%] h-[100%] my-[50px] mx-auto flex flex-col justify-center items-center max-[1000px]:w-[90%] max-[750px]:w-[100%]">
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <span className="text-[30px] text-white">Pricing</span>
          <div className="flex flex-col text-white text-[14px] text-center">
            <span>Most calenders are designed for teans.</span>
            <span>Slate is designed for freelancers</span>
          </div>
        </div>
        {/* --------------- cards -------------- */}
        <div className="w-[60%] my-[30px] flex justify-between items-center  max-[1400px]:w-[80%] max-[1100px]:w-[90%] max-[1000px]:gap-[20px] max-[750px]:w-[95%] max-[700px]:flex-col">
          {pricing.map((price, index) => {
            return (
              <div
                key={index}
                className={
                  price.type === "standard"
                    ? "w-[30%] p-4 rounded-[10px] min-h-[500px] bg-[#2091F9] max-[1000px]:w-[40%] max-[700px]:w-[50%] max-[600px]:w-[70%]"
                    : "w-[30%] p-4 rounded-[10px] min-h-[300px] bg-white max-[1000px]:w-[40%] max-[700px]:w-[50%] max-[600px]:w-[70%]"
                }
              >
                <div className="w-[80%]  mx-auto flex flex-col gap-[20px]">
                  <div
                    className={
                      price.type === "standard"
                        ? "text-white text-center flex flex-col gap-[10px] "
                        : "text-center flex flex-col gap-[10px]"
                    }
                  >
                    <span className="font-bold uppercase">{price.type}</span>
                    <span className="text-[12px]">{price.title}</span>
                  </div>
                  <div
                    className={
                      price.type === "standard"
                        ? "w-[100%] flex justify-center items-center gap-[20px] text-white "
                        : "w-[100%] flex justify-center items-center gap-[20px]"
                    }
                  >
                    <span className="text-[40px]  font-bold">
                      {price.price}
                    </span>

                    <div className="flex flex-col text-[14px]">
                      <BsCurrencyDollar className="font-bold" />
                      <span className="text-[14px]">Per month</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[20px]">
                    {price.features.map((feature, index) => (
                      <span
                        key={index}
                        className={
                          price.type === "standard"
                            ? "text-[12px] text-white"
                            : "text-[12px]"
                        }
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    className={
                      price.type === "standard"
                        ? "bg-white mt-[30px] text-[#2091F9]  text-[12px] py-2 px-8 rounded-[20px]"
                        : "bg-[#2091F9] mt-[30px] text-white  text-[12px] py-2 px-8 rounded-[20px]"
                    }
                  >
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
