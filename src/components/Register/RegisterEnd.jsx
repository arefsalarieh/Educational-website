import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { NumericInput } from "./NumericInput";
// import { InputContact } from "./InputContact";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";

import "react-datepicker/dist/react-datepicker.css";
import { DatePickerPersian } from "./DatePickerPersian";
import "./datepicker.css";
import { useNavigate } from "react-router";
import * as yup from "yup";
import axios from "axios";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";
import toast, { Toaster } from "react-hot-toast";

const RegisterEnd = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigate = useNavigate();

  const [userinfo, setUserInfo] = useState({
    name: "",
    number: "",
    nationalCode: "",
    dateBitrthday: "",
    email: "",
    pass: "",
  });

  const handleClick = () => {
    navigate("/Login");
  };
  // const bodyReg = { phoneNumber: "userinfo.number" };

  const onSubmit = async (values) => {
    const bodyReg = { phoneNumber: values.number,gmail:values.email,password:values.pass };
    const result = await http.post("/Sign/Register", bodyReg);
    if (result.success === true) {
      toast.success(result.message);
    }
    else{
      toast.success(result.message);
    }
    console.log(result);
    return result;

  };

  const validation = yup.object().shape({
    email: yup.string().required(" لطفا ایمیل خود را وارد کنید! "),
    pass: yup.string().required("لطفا پسورد  را وارد نمایید"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          pass: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            {/* Global Container */}
            <div className=" flex items-center justify-center font-irSans bg-gradient-to-b from-primary dark:from-teal-800 sm:p-0 w-full sm:h-screen xs:p-8">
              {/* Card Container  */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex  w-9/12 p-12 space-y-10  bg-white dark:bg-slate-600 dark:text-stone-200 shadow-2xl rounded-2xl lg:flex-row  xs:flex-col-reverse xs:p-6"
              >
                {/* Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className=" flex flex-col justify-center w-full "
                >
                  <h1 className="justify-center font-mono sm:mb-5 sm:text-4xl font-bold text-center sm:text-center  xs:text-[26px] xs:mb-4 ">
                    ثبت نام کاربر
                  </h1>
                  <Toaster/>
                  {/* start of form */}
                  <div className="flex flex-col gap-4 w-full mt-5">
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className=" mb-2  sm:text-base  xs:text-[14px]  ">
                          ایمیل
                        </p>
                        <Input
                          size="large xs:default"
                          placeholder="Reaction@gmail.com"
                          prefix={<MailOutlined className="text-gray-400" />}
                          className=" w-full border border-gray-400 rounded-md placeholder:font-sans sm:placeholder:font-light  xs:placeholder:text-[8px]"
                          dir="ltr"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          name="email"
                          component={"p"}
                          className="text-red-600 text-[14px] whitespace-nowrap"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="  mb-2  sm:text-base  xs:text-[14px] ">
                        پسورد
                      </p>
                      <Input.Password
                        size="large  xs:default"
                        placeholder="******************"
                        className="w-full flex-row-reverse  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light placeholder:align-middle "
                        dir="ltr"
                        name="pass"
                        value={values.pass}
                        onChange={handleChange}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                      <ErrorMessage
                        name="pass"
                        component={"p"}
                        className="text-red-600 text-[14px] whitespace-nowrap"
                      />
                    </div>
                    {/*Bouttons */}
                    <div className="flex  sm:mt-8    xs:mt-4 sm:justify-items-center sm:justify-center ">
                      <button
                        type="submit"
                        className="w-full  xs:justify-center whitespace-nowrap ml-4   flex  sm:justify-center sm:items-center  lg:px-10 md:px-24 space-x-4 font-sans font-bold text-white dark:text-stone-200 rounded-md shadow-lg  bg-teal-600  dark:bg-teal-800 dark:shadow-shadowDarkUp shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition   text-center  hover:-translate-y-0.5 duration-150 sm:w-5/6 xs:w-1/2 xs:px-0  xs:py-1 xs:text-center"
                      >
                        ثبت نام
                      </button>
                      <button className="w-full   xs:justify-center whitespace-nowrap  flex sm:justify-center sm:items-center    lg:px-10 md:px-24  space-x-4  font-sans font-bold text-white dark:text-stone-200 rounded-md shadow-lg  bg-teal-600  dark:bg-teal-800 dark:shadow-shadowDarkUp shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150 sm:w-5/6 xs:w-1/2 xs:px-0  xs:py-1 xs:text-center">
                        ورود
                      </button>
                    </div>
                  </div>
                  {/* end of form */}
                </motion.div>
                {/* left Side  */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className=" w-full mr-30 relative bottom-4 sm:mx-auto pr-10 xs:mx-auto"
                >
                  <img
                    src="assets/img/regPic.avif"
                    alt="registerPic"
                    className="w-max rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
export { RegisterEnd };
