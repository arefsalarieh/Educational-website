// import { Button, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
// import { useState } from "react";
// import Search from "antd/es/transfer/search";
// import headerSvg from "../../assets/images/headerShape.svg";

import { useState } from "react";
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

const { Search } = Input;

const Header = () => {
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

export default Header;
