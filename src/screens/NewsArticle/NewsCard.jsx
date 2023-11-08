import React from "react";
import { FaEye } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

const NewsCard = ({ id, title, nameWriter, view, description, star }) => {
  return (
    <>
      {/* border border-bg-[#ffffff] */}
      <div className="xl:w-1/6 lg:w-1/5 md:w-1/4  xs:w-full sm:w-1/3  mx-auto justify-center shadow-lg  shadow-bg-[#ffffff]  rounded-md p-3 ">
        {/* Image */}
        <div className="w-full mx-auto justify-center pb-4 cursor-pointer">
          <img src="/public/assets/img/itemNewsPic.jpg" alt="NewsPic" />
        </div>
        {/* Text below the photo */}
        <div className="mx-auto">
          {/* Title */}
          <div>
            <p className=" flex justify-center text-justify  xs:text-sm  font-bold whitespace-nowrap pb-2 md:text-[11px] lg:text-[12px] sm:text-[12px]">
              {title}
            </p>
          </div>
          {/* Description */}
          <div className="mx-auto ">
            <p className=" text-justify text-xs  pb-2  truncate">
              {description}
            </p>
          </div>
          {/* Writer and View */}
          <div className="flex justify-between ">
            {/* Writer*/}
            <div className="flex gap-1">
              <FaUserEdit className=" text-secondary text-[18px]" />
              <p className=" text-justify  text-[13px] text-[#5eabee]  font-semibold ">
                {nameWriter}
              </p>
            </div>
            {/*View */}
            <div className="flex gap-1">
              <p className=" text-justify  text-[11px]  text-[#68a4d8] font-bold">
                {view}
              </p>
              <FaEye className="text-secondary  text-sm md:text-xs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NewsCard };
