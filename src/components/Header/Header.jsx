import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

import { Menu, Row, Col, Input, Drawer, Divider } from "antd";
import {
  UserOutlined,
  UserAddOutlined,
  MenuOutlined,
  HomeOutlined,
  AppstoreOutlined,
  WifiOutlined,
  ToolOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button } from "antd/es/radio";

// tailwind dependencies

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
  AcademicCapIcon,
  Bars3Icon,
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  XMarkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import HeaderSearch from "../common/HeaderSearch/HeaderSearch";
import {
  getItem,
  removeItem,
  setItem,
} from "../../core/services/common/storage.services";
import { useSelector } from "react-redux";

// antd header
const { Search } = Input;



const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const user = useSelector((reducer) => reducer.user);

  return (
    <header className="bg-transparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-headerSvg bg-no-repeat bg-[length:50%_300px] bg-[position:50px_-190px]"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-8 md:h-10 w-auto" src={logo} alt="" />
            <h2 className="ms-2 md:ms-4 font-irSans md:text-2xl md:font-bold">
              آکادمی 
            </h2>
          </Link>
        </div>

        {/* responsive menu button */}
        <div className="flex justify-end lg:hidden" style={{ flex: 1 }}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 shadow-lg hover:bg-slate-50 dark:bg-slate-600 dark:text-slate-300 hover:shadow-2xl transition-all duration-200"
            onClick={() =>
              setMobileMenuOpen(mobileMenuOpen === false ? true : false)
            }>
            <span className="sr-only">نمایش لیست منو</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* top menu elements */}
        <Popover.Group
          className="hidden lg:flex lg:gap-x-6"
          style={{ flex: 2 }}>
          <Link
            to="/"
            className="underline-hover text-sm leading-6 font-irSans flex items-center gap-x-2 hover:text-secondary transition-all duration-200 px-2 py-1">
            <HomeIcon className="h-4 w-4" aria-hidden="true" />
            <span>خانه</span>
          </Link>
          <Link
            to="courses"
            className="underline-hover text-sm leading-6 font-irSans flex items-center gap-x-2 hover:text-secondary transition-all duration-200 px-2 py-1">
            <AcademicCapIcon className="h-4 w-4" aria-hidden="true" />
            <span>دوره‌ها</span>
          </Link>
          <Link
            to="newsArticle"
            className="underline-hover text-sm leading-6 font-irSans flex items-center gap-x-2 box-border hover:text-secondary transition-all duration-200 px-2 py-1">
            <NewspaperIcon className="h-4 w-4" aria-hidden="true" />
            <span>اخبار</span>
          </Link>

        </Popover.Group>

        {getItem("token") ? (
          <div
            className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-5"
            style={{ flex: 1 }}>
            <HeaderSearch />
            <Link
              to=""
              onClick={() => navigate(`/studentPanel` )}
              className="bg-white text-sm leading-6 px-4 py-1 border border-gray-400 text-gray-800 font-irSans  rounded-lg hover:text-black hover:shadow-lg transition-all duration-200">
              <img src="" alt="" />
              <span>{user.fname  !== null || undefined ? getItem("userF&LName") : "کاربر بی نام"}</span>
            </Link>
            <Link
              to="/"
              onClick={() => {
                removeItem("token");
                setTimeout(() => {
                  location.reload();
                }, 500);
              }}
              className="text-sm leading-6 text-gray-400 px-4 py-1 font-irSans rounded-lg hover:text-gray-600 hover:text-shadow-md transition-all duration-200">
              <span>خروج</span>
            </Link>
          </div>
        ) : (
          <div
            className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-5"
            style={{ flex: 1 }}>
            <HeaderSearch />
            <Link
              to="login"
              className="bg-white text-sm leading-6 px-4 py-1 text-gray-800 font-irSans border border-gray-400 rounded-lg hover:text-black hover:shadow-lg transition-all duration-200">
              <span>ورود</span>
            </Link>
            <Link
              to="register"
              className="text-sm leading-6 text-zinc-100 bg-secondary px-4 py-1 font-irSans rounded-lg hover:bg-yellow-600 hover:text-white hover:shadow-md hover:shadow-yellow-700 transition-all duration-200">
              <span>ثبت نام</span>
            </Link>
          </div>
        )}
      </nav>

      {/* drawer menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 transition-all duration-200" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-slate-600 dark:text-stone-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between divide-gray-500/10">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <img className="h-8 w-auto" src={logo} alt="" />
              <h2 className="ms-2 md:ms-4 font-irSans md:text-lg md:font-semibold dark:text-stone-300">
                آکادمی بحر
              </h2>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10 text-gray-900 dark:text-stone-300">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="text-sm leading-6 font-irSans flex items-center gap-x-2 hover:border-b-2 hover:border-secondary box-border hover:text-secondary transition-all duration-150 px-2 py-1">
                  <HomeIcon className="h-4 w-4" aria-hidden="true" />
                  <span>خانه</span>
                </Link>
                <Link
                  to="courses"
                  className="text-sm leading-6 font-irSans flex items-center gap-x-2 hover:border-b-2 hover:border-secondary box-border hover:text-secondary transition-all duration-150 px-2 py-1">
                  <AcademicCapIcon className="h-4 w-4" aria-hidden="true" />
                  <span>دوره‌ها</span>
                </Link>
                <Link
                  to="newsArticle"
                  className="text-sm leading-6 font-irSans flex items-center gap-x-2 hover:border-b-2 hover:border-secondary box-border hover:text-secondary transition-all duration-150 px-2 py-1">
                  <NewspaperIcon className="h-4 w-4" aria-hidden="true" />
                  <span>اخبار</span>
                </Link>

                <Link
                  to="#"
                  className="text-sm leading-6 font-irSans flex items-center gap-x-2 hover:border-b-2 hover:border-secondary box-border hover:text-secondary transition-all duration-150 px-2 py-1">
                  <UserGroupIcon className="h-4 w-4" aria-hidden="true" />
                  <span>خدمات</span>
                </Link>
                <Link
                  to="#"
                  className="text-sm leading-6 font-irSans flex items-center gap-x-2 hover:border-b-2 hover:border-secondary box-border hover:text-secondary transition-all duration-150 px-2 py-1">
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  <span>تماس با ما</span>
                </Link>
              </div>
              <div className="py-6 flex gap-x-4">
                <Link
                  to="login"
                  className="bg-white dark:bg-slate-400 text-sm leading-6 px-4 py-1 text-gray-800 font-irSans border border-gray-400 rounded-lg hover:text-black hover:shadow-lg transition-all duration-200">
                  <span>ورود</span>
                </Link>
                <Link
                  to="register"
                  className="text-sm leading-6 text-zinc-100 bg-secondary px-4 py-1 font-irSans rounded-lg hover:bg-yellow-600 hover:text-white hover:shadow-md hover:shadow-yellow-700 transition-all duration-200">
                  <span>ثبت نام</span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
