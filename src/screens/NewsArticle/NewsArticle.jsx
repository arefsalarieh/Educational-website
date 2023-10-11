import { useState } from "react";
import { AntdInputSearch } from "./AntdInputSearch";
import { ListNewsCards } from "./ListNewsCards";
import React from "react";
import { Button, Dropdown, Space } from "antd";

const NewsArticle = () => {
  const [articelList, setArticelList] = useState([
    {
      title: " 1آموزش جامع طراحی وب",
      view: "223",
      nameWriter: "سمیه",
      description: "این توضیحات یک هست",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      view: "123",
      nameWriter: "وحید",
      description: "این توضیحات دو هست",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      view: "14",
      nameWriter: "رضا",
      description: "این توضیحات سه هست",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      view: "100",
      nameWriter: "حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست" ,
    },
    {
      title: " 3آموزش جامع طراحی وب",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
    {
      title: " 1آموزش جامع طراحی وب",
      view: "223",
      nameWriter: "سمیه",
      description: "این توضیحات یک هست",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      view: "123",
      nameWriter: "وحید",
      description: "این توضیحات دو هست",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      view: "14",
      nameWriter: "رضا",
      description: "این توضیحات سه هست",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      view: "100",
      nameWriter: "محمد حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست" ,
    },
    {
      title: " 3آموزش جامع طراحی وب",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
       {
      title: " 4آموزش جامع طراحی وب",
      view: "100",
      nameWriter: "حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست" ,
    },
    {
      title: " 3آموزش جامع طراحی وب",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
    {
      title: " 1آموزش جامع طراحی وب",
      view: "223",
      nameWriter: "سمیه",
      description: "این توضیحات یک هست",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      view: "123",
      nameWriter: "وحید",
      description: "این توضیحات دو هست",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      view: "14",
      nameWriter: "رضا",
      description: "این توضیحات سه هست",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      view: "100",
      nameWriter: "محمد حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست" ,
    },
    {
      title: " 3آموزش جامع طراحی وب",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
  ]);

  return (
    <>
      {/* Global Container */}
      <div className="flex w-screen flex-col items-center mx-auto p-5 gap-6">
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
        <div className="">
          <ListNewsCards  articelList={articelList} />
        </div>
        {/*Button More */}
        <div>
          <Button className="border border-bgbtns font-sans ">بیشتر</Button>
        </div>
      </div>
    </>
  );
};
export { NewsArticle};
