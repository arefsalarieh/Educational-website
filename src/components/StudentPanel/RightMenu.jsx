import React from "react";
import {
  AcademicCapIcon,
  PencilSquareIcon,
  SquaresPlusIcon,
  InboxStackIcon,
  ShoppingCartIcon,
  ArrowLeftOnRectangleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const RightMenu = ({ userInfo, setNavigateTo }) => {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpenCourses, setAlwaysOpenCourses] = React.useState(false);
  const [alwaysOpenProfile, setAlwaysOpenProfile] = React.useState(false);

  const handleAlwaysOpenCourses = () => setAlwaysOpenCourses((x) => !x);
  const handleAlwaysOpenProfile = () => setAlwaysOpenProfile((y) => !y);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="hidden gap-y-2 sm:block w-1/4 min-h-screen relative items-center justify-center bg-primary me-2 lg:me-4 xl:mt-6 2xl:mt-10 rounded-r-2xl font-irSans text-white">
        {/* image container */}
        <div
          onClick={() => {
            setNavigateTo("edit");
          }}
          className="block mx-auto mt-8 md:absolute md:start-1/4 top-4 md:-top-16 lg:-top-24 xl:-top-28 2xl:-top-32 w-2/3 md:w-1/2 rounded-full hover:scale-110 duration-150 cursor-pointer">
          <img
            src={userInfo.img}
            className="rounded-full object-contain hover:ring-4 hover:ring-secondary"
          />
        </div>
        {/* user data */}
        <div className="mt-6 md:mt-24 lg:mt-28 xl:mt-32 flex flex-col items-center justify-center">
          <span className="md:text-base lg:text-lg cursor-pointer hover:text-secondary duration-150">
            {userInfo.name}
          </span>
          <span className="mt-4 hidden md:block sm:text-xs lg:text-sm cursor-default">
            {userInfo.role}
          </span>
        </div>
        {/* menu items */}
        <div className="text-xs md:text-base sm:mt-6 md:mt-8 xl:mt-14 flex flex-col justify-center w-[85%] lg:w-[70%] mx-auto">
          <ul className="w-full">
            <li
              onClick={() => {
                setNavigateTo("dash");
              }}
              className="flex hover:text-secondary hover:bg-white hover:bg-opacity-60 hover:shadow-md p-2.5 rounded-md duration-150 cursor-pointer">
              <SquaresPlusIcon className="w-4 h-4 md:w-6 md:h-6" />
              <span className="ms-4 md:text-sm xl:text-base">داشبورد</span>
            </li>
            <li>
              <Accordion className="w-full " open={alwaysOpenCourses}>
                <AccordionHeader
                  className="flex justify-start w-full text-xs md:text-base border-none hover:text-secondary hover:border-none hover:bg-white hover:bg-opacity-60 hover:shadow-md focus:border-none p-2.5 my-2 rounded-md duration-150 cursor-pointer"
                  onClick={handleAlwaysOpenCourses}>
                  <AcademicCapIcon className="w-4 h-4 md:w-6 md:h-6" />
                  <span className="ms-4 text-left font-normal md:text-sm xl:text-base">
                    دوره‌ها
                  </span>
                </AccordionHeader>
                <AccordionBody className="flex justify-end sm:py-0 md:py-2">
                  <ul className="w-4/5 text-start text-white">
                    <li
                      onClick={() => {
                        setNavigateTo("allCourses");
                      }}
                      className="p-1 text-xs md:text-sm xl:text-base hover:ps-2 hover:text-secondary hover:bg-white hover:bg-opacity-60 hover:shadow-md rounded-md duration-150 cursor-pointer">
                      لیست دوره‌ها
                    </li>
                    <li
                      onClick={() => {
                        setNavigateTo("paidCourses");
                      }}
                      className="p-1 text-xs md:text-sm xl:text-base hover:ps-2 hover:text-secondary hover:bg-white hover:bg-opacity-60 hover:shadow-md rounded-md duration-150 cursor-pointer">
                      دوره‌های من
                    </li>
                    <li
                      onClick={() => {
                        setNavigateTo("buyCourse");
                      }}
                      className="p-1 text-xs md:text-sm xl:text-base hover:ps-2 hover:text-secondary hover:bg-white hover:bg-opacity-60 hover:shadow-md rounded-md duration-150 cursor-pointer">
                      خرید دوره
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </li>
            <li>
              <Accordion className="w-full " open={alwaysOpenProfile}>
                <AccordionHeader
                  className="flex justify-start w-full text-xs md:text-base border-none hover:text-secondary hover:border-none hover:bg-white hover:bg-opacity-60 hover:shadow-md focus:border-none p-2.5 my-2 rounded-md duration-150 cursor-pointer"
                  onClick={handleAlwaysOpenProfile}>
                  <PencilSquareIcon className="w-4 h-4 md:w-6 md:h-6" />
                  <span className="ms-4 text-left font-normal md:text-sm xl:text-base text-clip">
                    پروفایل
                  </span>
                </AccordionHeader>
                <AccordionBody className="flex justify-end sm:py-0 md:py-2">
                  <ul className="w-4/5 text-start text-white">
                    <li
                      onClick={() => {
                        setNavigateTo("edit");
                      }}
                      className="p-1 text-xs md:text-sm xl:text-base hover:ps-2 hover:text-secondary hover:bg-white hover:bg-opacity-60 hover:shadow-md rounded-md duration-150 cursor-pointer">
                      اطلاعات کاربری
                    </li>
                    <li
                      onClick={() => {
                        setNavigateTo("changePass");
                      }}
                      className="p-1 text-xs md:text-sm xl:text-base hover:ps-2 hover:text-secondary hover:bg-white hover:bg-opacity-60 hover:shadow-md rounded-md duration-150 cursor-pointer">
                      تغییر گذرواژه
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </li>
          </ul>
        </div>
        {/* exit btn */}
        <Link
          to="/"
          className="group absolute end-5 bottom-5 rounded-lg p-2 bg-white bg-opacity-30 shadow-sm cursor-pointer hover:bg-opacity-40 hover:text-secondary hover:shadow-xl duration-150 hover:ring-1 active:ring-secondary">
          <ArrowLeftOnRectangleIcon className="w-4 h-4 md:w-6 md:h-6" />
          <span className="hidden group-hover:block absolute w-20 text-[10px] rounded-md -top-7 -end-4 text-white bg-zinc-800 px-2 py-1">
            بازگشت به خانه
          </span>
        </Link>
      </div>
      <div className="bg-primary flex flex-col items-center gap-y-1 rounded-l-md sm:hidden w-1/12 sm:w-0 min-h-screen text-white text-center">
        {/* user image */}
        <div
          onClick={() => {
            setNavigateTo("edit");
          }}
          className="w-2/3 rounded-full mx-auto my-2 hover:scale-105">
          <img
            src={userInfo.img}
            className="rounded-full object-contain hover:ring-2 hover:ring-secondary"
          />
        </div>
        {/* menu items  */}
        <div
          onClick={() => {
            setNavigateTo("dash");
          }}
          className="flex flex-col text-center p-1 rounded-md hover:bg-white hover:bg-opacity-40">
          <SquaresPlusIcon className="w-5 h-5 mx-auto" />
          <span className="text-ellipsis text-[7px]">داشبورد</span>
        </div>
        <div
          onClick={() => {
            setNavigateTo("allCourses");
          }}
          className="flex flex-col text-center p-1 rounded-md hover:bg-white hover:bg-opacity-40">
          <AcademicCapIcon className="w-5 h-5 mx-auto" />
          <span className="text-ellipsis text-[7px]">دوره‌ها</span>
        </div>
        <div
          onClick={() => {
            setNavigateTo("paidCourses");
          }}
          className="flex flex-col text-center p-1 rounded-md hover:bg-white hover:bg-opacity-40">
          <InboxStackIcon className="w-5 h-5 mx-auto" />
          <span className="text-ellipsis text-[7px]">دوره‌های من</span>
        </div>
        <div
          onClick={() => {
            setNavigateTo("buyCourse");
          }}
          className="flex flex-col text-center p-1 rounded-md hover:bg-white hover:bg-opacity-40">
          <ShoppingCartIcon className="w-5 h-5 mx-auto" />
          <span className="text-ellipsis text-[7px]">خرید دوره</span>
        </div>
        <div
          onClick={() => {
            setNavigateTo("edit");
          }}
          className="flex flex-col text-center p-1 rounded-md hover:bg-white hover:bg-opacity-40">
          <PencilSquareIcon className="w-5 h-5 mx-auto" />
          <span className="text-ellipsis text-[7px]">پروفایل</span>
        </div>
        <div
          onClick={() => {
            setNavigateTo("edit");
          }}
          className="flex flex-col text-center p-1 rounded-md hover:bg-white hover:bg-opacity-40">
          <ShieldCheckIcon className="w-5 h-5 mx-auto" />
          <span className="text-ellipsis text-[7px]">گذرواژه</span>
        </div>
        <Link
          to="/"
          className="flex flex-col text-center p-1 rounded-md bg-white bg-opacity-30">
          <ArrowLeftOnRectangleIcon className="w-4 h-4 md:w-6 md:h-6" />
          <span className="text-ellipsis text-[7px]">خروج</span>
        </Link>
      </div>
    </>
  );
};

export default RightMenu;
