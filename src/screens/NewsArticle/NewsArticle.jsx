import { useState } from "react";
import { AntdInputSearch } from "./AntdInputSearch";
import { ListNewsCards } from "./ListNewsCards";
import React from "react";
import { Button, Dropdown, Space } from "antd";
import SearchCourses from "../../components/common/search/serachCourses";
import { BsFillCalendarCheckFill } from "react-icons/bs";

// import "react-datepicker/dist/react-datepicker.css";
// import { DatePickerPersian } from "../../components/common/datePicker/DatePickerPersian"
// import "../../datepicker.css";

const NewsArticle = () => {
  const [articelList, setArticelList] = useState([
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "223",
      nameWriter: "سمیه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      date: 1400 / 12 / 13,
      star: 4,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "123",
      nameWriter: "وحید",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ",
      date: 1400 / 12 / 13,
      star: 2.5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "14",
      nameWriter: "رضا",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ",
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "حسین",
      description: "این توضیحات 4 هست",
      date: 1402 / 2 / 10,
      star: 3,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
      date: 1302 / 2 / 10,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
      star: 3.5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
      date: 1401 / 5 / 11,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "223",
      nameWriter: "سمیه",
      description: "این توضیحات یک هست",
      date: 1300 / 2 / 10,
      star: 4,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "123",
      nameWriter: "وحید",
      description: "این توضیحات دو هست",
      date: 1367 / 6 / 15,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "14",
      nameWriter: "رضا",
      description: "این توضیحات سه هست",
      date: 1357 / 8 / 9,
      star: 5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "محمد حسین",
      description: "این توضیحات 4 هست",
      date: 1377 / 8 / 19,
      star: 2,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
      date: 1397 / 7 / 26,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
      date: 1387 / 8 / 22,
      star: 4.5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
      date: 1333 / 8 / 15,
      star: 1,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "حسین",
      description: "این توضیحات 4 هست",
      date: 1365 / 8 / 10,
      star: 1.5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
      date: 1369 / 10 / 1,
      star: 4.5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
      date: 1375 / 8 / 18,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
      date: 1373 / 1 / 1,
      star: 2.5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "223",
      nameWriter: "سمیه",
      description: "این توضیحات یک هست",
      date: 1327 / 8 / 11,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "123",
      nameWriter: "وحید",
      description: "این توضیحات دو هست",
      date: 1379 / 8 / 13,
      star: 5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "14",
      nameWriter: "رضا",
      description: "این توضیحات سه هست",
      date: 1382 / 8 / 18,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "100",
      nameWriter: "محمد حسین",
      description: "این توضیحات 4 هست",
      date: 1362 / 5 / 29,
      star: 3.5,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "95",
      nameWriter: "عارف",
      description: ".....   این توضیحات دو هست",
      date: 1337 / 11 / 16,
      star: 3.3,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "46",
      nameWriter: "مزیم",
      description: "این توضیحات سه هست",
      date: 1347 / 8 / 28,
    },
    {
      title: "آموزش ری اکت جی اس با استاد جدید",
      view: "178",
      nameWriter: "زهرا",
      description: "این توضیحات 4 هست",
      date: 1396 / 8 / 17,
      star: 1.75,
    },
  ]);

  return (
    <div className=" font-irSans">
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
          <p className="mx-auto font-bold  text-lg sm:text-2xl md:text-4xl">
            اخبار و مقالات
          </p>
          {/* <AntdInputSearch className="flex  justify-items-center mx-auto placeholder:font-irSans placeholder:font-light placeholder:text-[10px] md:w-[400px]" /> */}
          <SearchCourses className="cursor-pointer"/>
        </div>
        {/*end Title and Input Seach  */}
        {/* filter newsArticle */}
        <div className="flex  w-full gap-2 mr-2 mt-4">
          <div className="flex text-[#131b1f] text-[11px] md:text-sm  bg-white  cursor-pointer select-none items-center rounded-xl border border-[#dddedf] pr-2  pl-2 md:pr-4  md:pl-4 font-light relative bottom-2 h-[30px]">
            <BsFillCalendarCheckFill className=" text-[#a5a5a5] w-4 h-4 ml-2 mr-2" />
            {/* <DatePickerPersian size="large xs:default" />  */}
            <p className="font-bold font-irSans text-gray-400 hover:text-gray-600" id="dateFilter">
              تاریخ انتشار
            </p>
          </div>
        </div>
        {/* end filter newsArticle */}
        {/*border Spliter  */}
        <div className="w-full mt-1 mb-1">
          <div className="w-full   border-[1px]  border-[#f3f0f0]"></div>
          <div className="mx-auto relative bottom-4  items-center  bg-zinc-100  w-fit h-fit px-3"></div>
        </div>
        {/*End border Spliter  */}

        {/* SortBy newsArticle */}
        <div className="flex w-full gap-[14px]  mb-[30px] h-[40px] ">
          <span className=" text-xs text-gray-400  hover:text-gray-600 md:text-sm font-irSans cursor-pointer mb-1 border rounded-3xl  border-[#dddedf] bg-white pt-[.5625rem]  pb-[.5625rem] pr-2 pl-2 md:pr-4 md:pl-4 font-bold leading-4">
            <input
              type="checkbox"
              id="mostVisited"
              name="sortGroup"
              className="bg-[#a5a5a5]  w-3 h-3 cursor-pointer"
            />
            <label for="mostVisited" className="cursor-pointer"> پربازدیدترین </label>
          </span>
          <span className=" text-xs text-gray-400  hover:text-gray-600 md:text-sm font-irSans cursor-pointer mb-1 border rounded-3xl  border-[#dddedf] bg-white pt-[.5625rem]  pb-[.5625rem] pr-2 pl-2 md:pr-4 md:pl-4 fd font-bold leading-4">
            <input
              type="checkbox"
              id="newest"
              name="sortGroup"
              className="bg-[#a5a5a5]  w-3 h-3  cursor-pointer"
            />
            <label for="newest" className="cursor-pointer"> جدیدترین</label>
          </span>
        </div>
        {/* end SortBy newsArticle */}

        {/*The ListOf News and Articels */}
        <div className="">
          <ListNewsCards articelList={articelList} />
        </div>
        {/*Button More */}
        <div>
          <Button className="border border-secondary  font-irSans ">
            بیشتر
          </Button>
        </div>
      </div>
    </div>
  );
};
export { NewsArticle };
