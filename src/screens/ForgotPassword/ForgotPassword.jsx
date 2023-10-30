import Input from "antd/es/input/Input";
import { Button } from "antd";
import React from "react";
import bgImg from "../../assets/images/forgot.png";
import { Form, Formik } from "formik";
import mailValidation from "../../core/validations/mailValidation"

const ForgotPassword = () => {
  const onSubmit = () => {
    console.log(values);
  }
  return (
    <div className="flex justify-center items-center w-full md:h-[100vh] bg-gradient-to-b from-primary dark:from-teal-800 font-irSans">
      <section className="flex flex-col-reverse md:flex-row justify-between container w-[80%] h-[80%] bg-white dark:bg-slate-600 rounded-3xl">
        <div className="w-[80%] md:w-[40%] flex flex-col  justify-center ms-14">
          <h3 className="mt-10 mb-16 md:mb-24 text-2xl font-semibold"> فراموشی رمز عبور </h3>
          <Formik className="w-[80%]" onSubmit={onSubmit} initialValues={{mailValidation}}>
            <Form>
            <label htmlFor="mailInput" className="">
              ایمیل ثبت شده خود را وارد کنید:
            </label>
            <Input
              id="mailInput"
              style={{direction: "ltr"}}
              name="mail"
              className="w-[100%] mt-2"
              placeholder="example@company.com"
            />
            <div className="flex justify-around my-5 ">
              <Button
                className=" bg-primary dark:bg-teal-800 text-white active:text-white font-irSans "
                type="primary"
                htmlType="submit">
                درخواست رمز جدید
              </Button>
              <Button className="font-irSans dark:bg-slate-400 dark:hover:shadow-shadowDarkUp">صفحه اصلی</Button>
            </div>
            </Form>
          </Formik>
        </div>
        <div className="w-[80%] md:w-[40%] mx-auto flex items-center mt-5 md:mt-0 py-2 overflow-hidden">
          <img
            className="w-[4/5] h-[4/5] object-fit rounded-2xl"
            src={bgImg}
            alt="Forgot Password"
          />
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
