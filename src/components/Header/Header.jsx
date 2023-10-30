// import { Button, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
// import { useState } from "react";
// import Search from "antd/es/transfer/search";
// import headerSvg from "../../assets/images/headerShape.svg";

// import { useState } from "react";
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

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  Bars3Icon,
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  XMarkIcon,
  PhoneIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// antd header
const { Search } = Input;

const Header2 = () => {
  const [visible, setVisible] = useState(false);
  const [wannaSearch, setWannaSearch] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      className="menu-top"
      // style={{ backgroundImage: { headerSvg } }}
    >
      <div className="py-4 container mx-auto relative">
        <Row justify="space-between" align="middle">
          <Col lg={6} xs={18} sm={18}>
            <div className="menu-right flex items-center ms-2 mt-4 md:mt-0">
              <img
                src={logo}
                alt="Logo"
                className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
              />
              <h2 className="mx-2 font-irSans text-base md:text-2xl">
                آکادمی بحر
              </h2>
            </div>
          </Col>

          <Col lg={12} xs={0} sm={0}>
            <div className="menu-center mx-auto hidden lg:block">
              <Menu
                mode="horizontal"
                className="bg-transparent shadow-none border-none font-irSans">
                <Menu.Item key="home" label="خانه" icon={<HomeOutlined />}>
                  خانه
                </Menu.Item>
                <Menu.Item
                  key="courses"
                  label="دوره ها"
                  icon={<AppstoreOutlined />}>
                  دوره ها
                </Menu.Item>
                <Menu.Item key="news" label="اخبار" icon={<WifiOutlined />}>
                  اخبار
                </Menu.Item>
                <Menu.Item key="services" label="خدمات" icon={<ToolOutlined />}>
                  خدمات
                </Menu.Item>
                <Menu.Item
                  key="contact"
                  label="تماس با ما"
                  icon={<PhoneOutlined />}>
                  تماس با ما
                </Menu.Item>
              </Menu>
            </div>
          </Col>

          <Col lg={6} xs={0} sm={0}>
            <div className="menu-left hidden lg:block">
              <Menu
                mode="horizontal"
                className="bg-transparent shadow-none border-none hover:border-none focus:border-none font-irSans">
                <Menu.Item key="search">
                  <SearchOutlined
                    className="bg-slate-100 box-border md:px-3 md:py-2.5 rounded-xl cursor-pointer shadow-sm hover:bg-slate-200 hover:shadow transition-all duration-150"
                    onClick={() => setWannaSearch(!wannaSearch)}
                  />
                </Menu.Item>
                <Menu.Item
                  key="login"
                  style={{ borderRadius: ".5rem", marginRight: "1rem" }}>
                  <Button
                    className="font-irSans text-center"
                    style={{ minWidth: "80px" }}>
                    ورود
                  </Button>
                </Menu.Item>
                <Menu.Item key="register">
                  <Button
                    className="bg-secondary font-irSans text-center text-white hover:text-white hover:bg-yellow-700"
                    type="primary"
                    style={{ minWidth: "100px" }}>
                    ثبت نام
                  </Button>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
        <div className="menu-burger lg:hidden">
          <div
            onClick={showDrawer}
            className="absolute left-4 top-6 bg-slate-100 box-border px-3 py-2.5 rounded-xl cursor-pointer shadow-lg hover:bg-slate-200 hover:shadow-2xl transition-all duration-150 text-xs sm:text-sm">
            <MenuOutlined />
          </div>
          <Drawer
            title="آکادمی بحر"
            placement="right"
            className="font-irSans"
            closable={false}
            onClose={onClose}
            visible={visible}>
            <div className="menu-drawer max-w-sm">
              <Menu mode="vertical" className="font-irSans">
                <Menu.Item key="home" label="خانه" icon={<HomeOutlined />}>
                  خانه
                </Menu.Item>
                <Menu.Item
                  key="courses"
                  label="دوره ها"
                  icon={<AppstoreOutlined />}>
                  دوره ها
                </Menu.Item>
                <Menu.Item key="news" label="اخبار" icon={<WifiOutlined />}>
                  اخبار
                </Menu.Item>
                <Menu.Item key="services" label="خدمات" icon={<ToolOutlined />}>
                  خدمات
                </Menu.Item>
                <Menu.Item
                  key="contact"
                  label="تماس با ما"
                  icon={<PhoneOutlined />}>
                  تماس با ما
                </Menu.Item>
                <Divider />
                <Menu.Item key="login" icon={<UserOutlined />}>
                  ورود
                </Menu.Item>
                <Menu.Item key="register" icon={<UserAddOutlined />}>
                  ثبت نام
                </Menu.Item>
              </Menu>
            </div>
          </Drawer>
        </div>
        <div
          className={
            wannaSearch
              ? "absolute w-[70%] p-2 bg-white shadow-md -bottom-8 rounded-md left-[13%] transition-all duration-200"
              : "hidden transition-all duration-200"
          }>
          <Search placeholder="جست و جو ..." />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wannaSearch, setWannaSearch] = useState(false);

  return (
    <header className="bg-transparent">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-headerSvg bg-no-repeat bg-[length:50%_300px] bg-[position:50px_-190px]"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <img className="h-8 md:h-10 w-auto" src={logo} alt="" />
            <h2 className="ms-2 md:ms-4 font-irSans md:text-2xl md:font-bold">
              آکادمی بحر
            </h2>
          </a>
        </div>

        {/* responsive menu button */}
        <div className="flex justify-end lg:hidden" style={{ flex: 1 }}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 shadow-lg hover:bg-slate-50 dark:bg-slate-600 dark:text-slate-300 hover:shadow-2xl transition-all duration-200"
            onClick={() => setMobileMenuOpen(mobileMenuOpen === false ? true : false)}>
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
            className="text-sm leading-6 font-irSans flex items-center gap-x-2 hover:border-b-2 hover:border-secondary box-border hover:text-secondary transition-all duration-150 px-2 py-1">
            <HomeIcon className="h-4 w-4" aria-hidden="true" />
            <span>خانه</span>
          </Link>
          <Link
            to="#"
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
            className="bg-white dark:bg-inherit text-sm leading-6 font-irSans flex items-center gap-x-2 hover:border-b-2 hover:border-secondary box-border hover:text-secondary transition-all duration-150 px-2 py-1">
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            <span>تماس با ما</span>
          </Link>
        </Popover.Group>
        <div
          className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-5"
          style={{ flex: 1 }}>
          <Link
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900 p-1.5 rounded-md bg-gray-200 hover:shadow-md hover:text-white hover:bg-gray-500 transition-all duration-200">
            <MagnifyingGlassIcon
              className="h-5 w-5 "
              aria-hidden="true"
              onClick={() => setWannaSearch(!wannaSearch)}
            />
          </Link>
          <Link
            to="login"
            className="bg-white text-sm leading-6 px-4 py-1 text-gray-800 font-irSans border border-gray-400 rounded-lg hover:text-black hover:shadow-lg transition-all duration-200">
            <span>ورود</span>
          </Link>
          <Link
            to="#"
            className="text-sm leading-6 text-zinc-100 bg-secondary px-4 py-1 font-irSans rounded-lg hover:bg-yellow-600 hover:text-white hover:shadow-md hover:shadow-yellow-700 transition-all duration-200">
            <span>ثبت نام</span>
          </Link>
        </div>

        {/* search box */}
        <div
          className={
            wannaSearch
              ? "absolute w-[70%] p-2 bg-white dark:bg-slate-900 shadow-md -bottom-8 rounded-md left-[13%] transition-all duration-200"
              : "hidden transition-all duration-200"
          }>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative flex items-center transition-all duration-200">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:font-irSans"
                placeholder="جست و جو"
                required
              />
              <button
                type="submit"
                className="text-white absolute left-0  bg-primary dark:bg-teal-800 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-600 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-teal-700 dark:focus:ring-teal-800 font-irSans">
                جست و جو
              </button>
            </div>
          </form>
        </div>
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
                  to="#"
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
                  to="#"
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
