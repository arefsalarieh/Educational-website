import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Checkbox, Input, Space } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { TfiCheckBox } from "react-icons/tfi";
import * as yup from "yup";
import axios from "axios";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";
import { loginAPI } from "../../core/services/api/auth";
import { setItem } from "../../core/services/common/storage.services";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigate = useNavigate();

  const loginUser = async (values) => {
    const userobj = {
      phoneOrGmail: values.email,
      password: values.pass,
      rememberMe:values.remember,
    };

    console.log(values.remember);
    console.log(userobj);
    const user = await loginAPI(userobj);
    console.log(user);
    setItem("token", user.token);
    if (user.success === true ) {
      toast.success(user.message);
      setTimeout(() => {
        navigate("/studentPanel")
      }, "7000");
    }
    else {
      toast.error(user.errors);
    }
  };

  const validation = yup.object().shape({
    email: yup
      .string()
      .required(" لطفا ایمیل یا شماره تماس خود را وارد کنید! "),
    pass: yup.string().required("لطفا پسورد  را وارد نمایید"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          pass: "",
          remember: false,
        }}
        // onSubmit={loginUser}
        validationSchema={validation}
        onSubmit={loginUser}
      >
        {({ values, handleSubmit, handleChange ,setFieldValue}) => (
          <form onSubmit={handleSubmit}>
            {/* Global Container */}
            <div className=" global-container">
              {/* Card Container  */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="card-container "
              >
                {/* Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="right-side-container "
                >
                  <h1 className="">ورود کاربر</h1>
                  {/* Right section Inputes */}
                  <div className="mr-8 mt-5 sm:mr-6">
                    <p className="font-semibold mb-2 ">ایمیل</p>
                    <div className="flex">
                      <Input
                        size="large xs:default"
                        placeholder="Reaction@gmail.com"
                        dir="ltr"
                        prefix={<MailOutlined className="text-gray-400" />}
                        className=" mail-input-login dir=ltr"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component={"p"}
                      className="text-red-600 text-[14px] whitespace-nowrap"
                    />
                    <p className="font-semibold  mb-2">پسورد</p>
                    <Input.Password
                      placeholder="************"
                      className="password-input-login"
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
                    <div className="message-forgot  flex">
                      <input
                        className="ml-2"
                        type="checkbox"
                        id="check"
                        value={values.remember}
                        onChange={(e) =>setFieldValue("remember",e.target.checked )}
                        name="remember"
                      />
                      <label for="check" />
                      مرا بخاطر بسپار
                    </div>
                    {/*Bouttons */}
                    <div className="flex mt-8 sm:ml-10">
                      <button className=" button-register">ثبت نام</button>
                      <button
                        onSubmit={loginUser}
                        className="button-login"
                        type="submit"
                      >
                        ورود
                      </button>
                    </div>
                  </div>
                </motion.div>
                {/* left Side  */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="left-side-container"
                >
                  <img
                    src="assets/img/loginPic.avif"
                    alt="loginPic"
                    className="w-max rounded-xl"
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
export { Login };
