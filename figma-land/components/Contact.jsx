import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="w-[100%] min-h-[100vh]">
      <div className="w-[80%] my-[100px] mx-auto flex flex-col justify-center items-center max-[900px]:w-[90%]">
        <div className="text-center">
          <span className="text-[30px]">Contact Us</span>
          <div className="flex flex-col text-[14px] my-[10px] text-[#374754]">
            <span>Most calendars are designed for teams.</span>
            <span>Slate is designed for freelancers</span>
          </div>
        </div>
        {/* ------- */}
        <div className="w-[100%] my-[100px] flex justify-between gap-[50px] max-[750px]:flex-col-reverse">
          <div className="w-[50%] mx-auto p-4 shadow-md rounded-[10px] border flex flex-col max-[750px]:w-[100%]">
            <div className="text-center my-[30px]">
              <span className="font-bold">Contact Us</span>
            </div>
            <div className="flex justify-between">
              <div className="w-[80%] my-[20px] mx-auto flex flex-col gap-[10px]">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-[20px] bg-[#F4F4F4] py-3 px-6 text-[14px] outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-[20px] bg-[#F4F4F4] py-3 px-6 text-[14px] outline-none"
                />
                <textarea
                  rows={10}
                  placeholder="message..."
                  className="w-[100%] rounded-[20px] bg-[#F4F4F4] py-2 px-6 text-[14px] resize-none outline-none"
                ></textarea>
                <button className="w-[20%] my-[20px] bg-[#2091F9]  text-white text-[12px] py-2 px-6 rounded-[20px] outline-none max-[1400px]:w-[50%]">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] mx-auto max-[750px]:w-[80%]">
            <div className="flex justify-between items-center gap-[20px] max-[1600px]:items-start max-[1400px]:flex-col max-[1400px]:justify-start">
              <div className="w-[30%] flex flex-col justify-center items-center gap-[20px] max-[1400px]:flex-row max-[1400px]:w-[100%] max-[1400px]:justify-start">
                <IoLocationOutline className="text-[30px] text-[#2091F9]" />
                <span className="text-center text-[14px] max-[1100px]:text-[12px]">
                  6386 Spring St undefined Anchorage, Georgia 12473 United
                  States
                </span>
              </div>
              <div className="w-[30%] flex flex-col justify-center items-center gap-[20px] max-[1400px]:flex-row max-[1400px]:w-[100%] max-[1400px]:justify-start">
                <MdPhoneAndroid className="text-[30px] text-[#2091F9]" />
                <span className="text-center text-[14px] max-[1100px]:text-[12px]">
                  (843) 555-0130
                </span>
              </div>
              <div className="w-[30%] flex flex-col justify-center items-center gap-[20px] max-[1400px]:flex-row max-[1400px]:w-[100%]  max-[1400px]:justify-start">
                <MdOutlineEmail className="text-[30px] text-[#2091F9]" />
                <span className="text-center text-[14px] max-[1100px]:text-[12px]">
                  willie.jennings@example.com
                </span>
              </div>
            </div>
            <div className="my-[30px] w-[100%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46708.90722837158!2d-149.88773409706567!3d61.22687710428008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s6386%20Spring%20St%20undefined%20Anchorage%2C%20%20Georgia%2012473%20United%20States!5e0!3m2!1sen!2set!4v1707062910675!5m2!1sen!2set"
                width="500"
                height="300"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-[80%] mx-auto"
              ></iframe>
            </div>
            <div className="flex items-center text-[30px] text-[#2091F9] gap-[20px] max-[750px]:justify-center">
              <FaTwitter />
              <FaSquareFacebook />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
