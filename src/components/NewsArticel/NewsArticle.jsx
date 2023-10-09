import { useState } from "react";
import { AntdInputSearch } from "./AntdInputSearch";
import { NewsCard } from "./NewsCard";
import React from "react";
import { Button, Dropdown, Space } from "antd";

const NewsArticel = () => {
  const [articelList, setArticelList] = useState([]);

  return (
    <>
      {/* Global Container */}
      <div className="flex w-screen flex-col items-center mx-auto h-screen gap-6">
        {/* Images */}
        <div className="w-full mx-auto justify-center ">
          <img
            src="/public/assets/img/newsPic-removebg.png"
            className="mx-auto justify-center "
            alt="newsPic"
          />
        </div>
        {/* Title and Input Seach  */}
        <div className="w-full flex flex-col items-center  gap-6">
          <p className="mx-auto font-bold font-sans text-lg sm:text-2xl md:text-4xl">
            {" "}
            اخبار و مقالات{" "}
          </p>
          <AntdInputSearch className="flex  justify-items-center mx-auto placeholder:font-sans placeholder:font-light placeholder:text-[10px]]" />
        </div>
        {/*Tthe ListOf News and Articels */}
        <div>
          <NewsCard />
        </div>
        {/*Button More */}
        <div>
          <Button className="border border-bgbtns font-sans ">بیشتر</Button>
        </div>
      </div>
    </>
  );
};
export { NewsArticel };
