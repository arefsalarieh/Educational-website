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

const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigate = useNavigate();

  const loginUser = async (values) => {
    const userobj = {
      phoneOrGmail: values.email,
      password: values.pass,
      rememberMe: values.remember,
    };
    const user = await loginAPI(userobj);
    console.log(user);
    setItem("token", user.token);
    if (user.success === true) {
      toast.success(user.message);
      // alert(user.message)
    }
    if (user.roles === null) {
      navigate("/studentPanel");
    }
  };

  // const handleClick = () => {
  //   navigate("/studentPanel");
  // };

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
        }}
        // onSubmit={onSubmit}
        validationSchema={validation}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form>
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
                      className="error"
                    />
                    <div className="message-forgot  flex">
                      <input
                        className="ml-2"
                        type="checkbox"
                        id="check"
                        name="remember"
                      />
                      <label for="check" />
                      مرا بخاطر بسپار
                    </div>
                    {/*Bouttons */}
                    <div className="flex mt-8 sm:ml-10">
                      <button className=" button-register">ثبت نام</button>
                      <button onClick={loginUser} className="button-login">
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
