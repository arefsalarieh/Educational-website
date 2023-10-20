import { Tabs } from "antd";
import "/src/menuTabs.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";

const Comments = () => {
  const questioncomm = {
    userName: "سمیه",
    userMsg: ":(سلام وقت بخیر, خبر واقعی بودنش ابهام داره؟",
    dateSend: "1402/07/26",
  };
  const responsecomm = {
    name: "مهدی اصغریان",
    msg: "سلام وقت بخیر،،پاسخ خبر رو ",
    date: "1402/07/26",
  };

  return (
    <>
      {/* Global Container */}
      <div className=" w-full md:w-5/6  items-center justify-center  bg-bgDetail mx-auto p-[26px] space-y-10  md:p-12">
        <div className="w-full flex flex-col gap-8">
          <div className=" bg-bgDivTopComm  rounded-md  align-middle   py-2 md:py-4   md:px-8">
            <p className="  whitespace-nowrap  px-2 pr-4 text-[16px]  md:text-lg  text-bgTextTopComm font-irSans  font-bold">  برای ثبت نظر باید وارد سایت شده باشید</p>
          </div>
          <div className="flex">
            <img
              src="/public/assets/img/academi.jpg"
              alt="academi"
              className="w-[33px] h-[33px]  pl-1 rounded-full relative top-8 md:left-2 md:w-12 md:h-12"
            />
            {/* <textarea
              className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail placeholder-bgPlaceholder  text-base resize-none  focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText"
            /> */}
            <div className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail   text-base focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText bg-white">
              <div className="flex flex-col gap-4 pr-2 pt-4">
                <p className="flex flex-row gap-2 text-[16px] md:text-lg font-irSans whitespace-nowrap font-bold">
                  {questioncomm.userName}
                  <span className="text-gray-300">|</span>
                  {questioncomm.dateSend}
                </p>
                <p className="flex flex-col gap-2 text-[16px] font-irSans text-gray-800 ">{questioncomm.userMsg}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              src="/public/assets/img/academi.jpg"
              alt="academi"
              className="w-[33px] h-[33px]  rounded-full  relative top-8  right-8 pr-1  md:w-12 md:h-12 md:right-16"
            />
            {/* <textarea
              className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail placeholder-bgPlaceholder  text-base resize-none   focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText"
            /> */}
            <div className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail   text-base   focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText  bg-white">
              <div className="flex flex-col gap-4 pr-2">
                <p className="flex flex-row gap-2 pr-4  text-[16px] md:pr-12 md:text-lg font-irSans  whitespace-nowrap font-bold">
                  {responsecomm.name}
                  <span className="text-gray-300">|</span> {responsecomm.date}
                </p>
                <p className="flex flex-col gap-2 pr-4  text-sm md:pr-12 md:text-[16px] font-irSans text-gray-800 ">{responsecomm.msg}</p>
              </div>
            </div>
          </div>
          {/*Boutton */}
          <div className=" w-full">
            {/* bg-bgbtns shadow-bgShadowBtnComm */}
            <button className="flex w-4/5  mx-auto  relative right-4 items bg-cyan-700 shadow-cyan-100  whitespace-nowrap justify-center items-center p-3  py-1 space-x-4  font-bold text-white rounded-md  shadow-md px-9 hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150    md:px-6 md:py-2 md:w-1/4  md:relative md:right-3/4 md:mx-0 ">
              مشاهده نظرات بیشتر
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <BsFillArrowDownCircleFill className="rounded-full text-bgArrowDown w-10 h-10 relative  top-12 md:top-16 md:w-12 md:h-12" />
        </div>
      </div>
    </>
  );
};
export { Comments };
