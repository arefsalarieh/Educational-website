import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { ContentChangePass } from "./ContentChangePass";

const ChangePassword = () => {
  return (
    <>
      <Formik>
        <form>
          <div className="flex flex-col gap-6 md:p-5">
            {/* Top img Side  */}
            <div className=" w-ful flex justify-center">
              <img
                src="/src/assets/images/changePass.jpg"
                alt="ChangePassPic"
                className="w-max"
              />
            </div>
            {/* end Top img Side  */}
            {/* Below Content Side */}
            <div className=" w-ful flex  flex-col  gap-6 justify-center">
              <h1 className="font-irSans font-bold  text-center text-[20px]  md:text-[26px] ">
                {" "}
                تغییر رمز عبور
              </h1>
              <div className="flex flex-col gap-4  md:gap-8 p-6">
                <ContentChangePass />
                {/*end Below Content Side */}
                {/*Boutton */}
                <div className=" w-full flex justify-center   font-bold text-white mt-2  rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition    hover:-translate-y-0.5 duration-150 py-1 text-sm  md:text-[16px]  md:py-2  md:w-3/4   md:relative md:right-1/4  lg:w-10/12   lg:right-[120px]  xl:right-[130px]">
                  <button className="font-irSans">ذخیره تغییرات</button>
                </div>
                {/*end Boutton */}
              </div>
            </div>
          </div>
        </form>
      </Formik>
    </>
  );
};

export default ChangePassword;
