import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContentChangePass } from "./ContentChangePass";
import * as yup from "yup";
import { InputPasswordComp } from "./InputPasswordComp";
import toast,{Toaster} from "react-hot-toast";
import http from "../../core/services/interceptor";
import { getItem } from "../../core/services/common/storage.services";

import { useNavigate } from "react-router";

const ChangePassword = () => {
  const navigate = useNavigate();



  const onSubmit = async (values) => {
    const bodyCange = {
      oldPassword: values.oldPass,
      newPassword: values.newPass,
    };
    console.log(bodyCange);
    http.defaults.headers.post['Authorization'] = `Bearer ${getItem('token')}`;
    const result = await http.post("/SharePanel/ChangePassword", bodyCange);
    console.log(result);
    if (result.success === true) {
      toast.success(result.message);
      setTimeout(() => {
        navigate("/studentPanel")
      }, "2000");
      
      navigate("/");
    } else {
      toast.error(result.message);
    }
    console.log(result);
    return result;
  };

  const validation = yup.object().shape({
    oldPass: yup.string().required(" لطفا پسورد فعلی خود را وارد نمایید "),
    newPass: yup.string().required("لطفا پسورد جدید را وارد کنید"),
    newConfirm: yup.string().required("لطفا پسورد جدید را وارد کنید"),
  });

  return (
    <Formik
      initialValues={{
        oldPass: "",
        newPass: "",
        newConfirm: "",
      }}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 md:p-3">
            {/* Top img Side  */}
            <div className=" w-ful flex justify-center">
              <img
                src="/src/assets/images/changePass.jpg"
                alt="ChangePassPic"
                className="w-max rounded-2xl"
              />
            </div>
            {/* end Top img Side  */}
            {/* Below Content Side */}
            <div className=" w-ful flex  flex-col  gap-6 justify-center">
              <h1 className="font-irSans font-bold  text-center text-[20px]  md:text-[26px] ">
                تغییر رمز عبور
              </h1>

              <Toaster/>

              <div className="flex flex-col gap-4  md:gap-8 p-6 md:p-3">
                <div className="md:flex">
                  <p className="font-irSans mb-2 font-bold md:font-semibold  whitespace-nowrap  w-[135px] text-sm md:text-[16px]  pl-[46px]">
                    پسورد فعلی
                  </p>
                  <InputPasswordComp
                    name="oldPass"
                    value={values.oldPass}
                    onChange={handleChange}
                  />
                </div>
                <ErrorMessage
                  name="oldPass"
                  component={"p"}
                  className="text-red-600 text-[14px] whitespace-nowrap"
                />
                <div className=" md:flex">
                  <p className="font-irSans mb-2 font-bold md:font-semibold   whitespace-wrap  md:whitespace-wrap  md:whitespace-nowrap  w-[135px] text-sm md:text-[16px] pl-[44px]">
                    پسورد جدید
                  </p>
                  <InputPasswordComp
                    name="newPass"
                    value={values.newPass}
                    onChange={handleChange}
                  />
                </div>
                <ErrorMessage
                  name="newPass"
                  component={"p"}
                  className="text-red-600 text-[14px] whitespace-nowrap"
                />
                <div className="md:flex">
                  <p className="font-irSans mb-2 font-bold md:font-semibold    whitespace-wrap  md:whitespace-nowrap  w-[135px] text-sm md:text-[16px] pl-2">
                    تکرار پسورد جدید
                  </p>
                  <InputPasswordComp
                    name="newConfirm"
                    value={values.newConfirm}
                    onChange={handleChange}
                  />
                </div>
                <ErrorMessage
                  name="newConfirm"
                  component={"p"}
                  className="text-red-600 text-[14px] whitespace-nowrap"
                />
                {/*end Below Content Side */}
                {/*Boutton */}
                <button
                  className="font-irSans  md:py-2  w-full flex justify-center cursor-pointer  font-bold text-white mt-2  md:mt-0 rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition    hover:-translate-y-0.5 duration-150 py-1 text-sm  md:text-[16px]    md:w-3/4   md:relative md:right-1/4  lg:w-[82.333%]   lg:right-[130px]  xl:w-[86.120%] xl:right-[127px]"
                  type="submit"
                >
                  ذخیره تغییرات
                </button>
                {/*end Boutton */}
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ChangePassword;
