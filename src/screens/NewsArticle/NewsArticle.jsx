import { useState } from "react";
import { AntdInputSearch } from "./AntdInputSearch";
import { ListNewsCards } from "./ListNewsCards";
import React from "react";
import { Button, Dropdown, Space } from "antd";


const NewsArticle = () => {
  const [articelList, setArticelList] = useState([
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "223",
      nameWriter: "سمیه",
      description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "123",
      nameWriter: "وحید",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "14",
      nameWriter: "رضا",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "223",
      nameWriter: "سمیه",
      description: "این توضیحات یک هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "123",
      nameWriter: "وحید",
      description: "این توضیحات دو هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "14",
      nameWriter: "رضا",
      description: "این توضیحات سه هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "محمد حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "223",
      nameWriter: "سمیه",
      description: "این توضیحات یک هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "123",
      nameWriter: "وحید",
      description: "این توضیحات دو هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "14",
      nameWriter: "رضا",
      description: "این توضیحات سه هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "محمد حسین",
      description: "این توضیحات 4 هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
    },
  ]);

  return (
    <>
      {/* Global Container */}
      <div className="flex w-full flex-col items-center  mx-auto p-5 gap-4">
        {/* Images */}
        <div className="w-full mx-auto justify-center ">
          <img
            src="/public/assets/img/newsPic-removebg.png"
            className="mx-auto justify-center cursor-pointer "
            alt="newsPic"
          />
        </div>
        {/* Title and Input Seach  */}
        <div className="w-full flex flex-col items-center  gap-4">
          <p className="mx-auto font-bold font-sans text-lg sm:text-2xl md:text-4xl">
            {" "}
            اخبار و مقالات{" "}
          </p>
          <AntdInputSearch className="flex  justify-items-center mx-auto placeholder:font-sans placeholder:font-light placeholder:text-[10px]] md:w-[400px]" />
        </div>
        {/*end Title and Input Seach  */}

        {/*Tthe ListOf News and Articels */}
        <div className="">
          <ListNewsCards articelList={articelList} />
        </div>
        {/*Button More */}
        <div>
          <Button className="border border-bgbtns font-sans ">بیشتر</Button>
        </div>
      </div>
    </>
  );
};
export { NewsArticle };
