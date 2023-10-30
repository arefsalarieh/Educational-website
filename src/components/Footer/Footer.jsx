import { Input, Space } from "antd";
import { Button } from "antd/es/radio";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import 'leaflet/dist/leaflet.css';

const position = [36.59783708008768, 53.06466164759884];

const Footer = () => {
  return (
    <>
    <div className="w-[100%] bg-primary dark:bg-teal-800 p-10 mt-20 box-border" style={{borderTopLeftRadius: "5000px 200px", borderTopRightRadius: "5000px 400px"}}></div>
      <div className="flex items-center w-[100%] bg-primary dark:bg-teal-800 pb-10  font-irSans text-white text-sm box-border">
        <div className="container mx-auto flex flex-col gap-y-6 md:flex-row justify-around">
          <div className="flex flex-col mr-16 md:mr-0 "  style={{flex: 1}}>
            <span className="indent-2 mb-4 cursor-default text-base md:text-lg">
              لینکها
            </span>
            <ul className="flex flex-col gap-y-3 md:gap-y-4 list-disc">
              <li className="hover:text-secondary transition-all cursor-pointer text-sm md:text-base">
                صفحه اصلی
              </li>
              <li className="hover:text-secondary transition-all cursor-pointer font-medium">
                آموزش
              </li>
              <li className="hover:text-secondary transition-all cursor-pointer font-medium">
                مالی
              </li>
              <li className="hover:text-secondary transition-all cursor-pointer font-medium">
                خدمات
              </li>
            </ul>
          </div>
          <div className="flex flex-col my-10 md:my-0 w-80% mr-12 md:mr-0" style={{flex: 1}}>
            <span className="indent-4 mb-4 cursor-default text-base md:text-lg">
              ارتباط با ما
            </span>
            <ul className="flex flex-col gap-y-3 md:gap-y-4">
              <li className="hover:text-secondary transition-all cursor-default font-medium">
                <PhoneOutlined />
                <span className="ms-2">011-33322555</span>
              </li>
              <li className="hover:text-secondary transition-all cursor-default font-medium">
                <MailOutlined />
                <span className="ms-2">bahr@bahr-academy.org</span>
              </li>
              <li className="hover:text-secondary transition-all cursor-default font-medium">
                <HomeOutlined />
                <span className="ms-2">
                  آدرس: ساری، میدان خزر، جاده فرح آباد، ساختمان سپهر 
                </span>
              </li>
              <li className="flex flex-col pt-5">
                <span className="md:text-xs text-slate-200 dark:text-stone-300 text-xs cursor-default">
                  برای دریافت خبرنامه، ایمیل خود را ثبت کنید:
                </span>
                <Space.Compact className="w-[80%] mt-2">
                  <Input defaultValue="example@company.com" />
                  <Button
                    className="bg-secondary font-irSans text-white"
                    type="primary">
                    ارسال
                  </Button>
                </Space.Compact>
              </li>
            </ul>
          </div>
          <div className="w-60 h-44 sm:w-80 sm:h-60 mx-auto md:mx-0 bg-slate-200 rounded-lg overflow-hidden font-irSans"  style={{flex: 1}}>
            <MapContainer
              className="w-full h-full"
              center={position}
              zoom={13}
              scrollWheelZoom={true}>
              <TileLayer
                attribution="&copy; "
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>آکادمی بحر</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
