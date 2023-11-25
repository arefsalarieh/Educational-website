import React, { useState } from "react";
import SearchCourses from "../common/search/searchCourses";
import { Pagination } from "antd";
import style from "./PaidCourses.modules.css";
import Button from "../common/button/button";
import { Input, Select } from "antd";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";

const BuyCourseItem = ({ courseName, studentName, reserverDate }) => {
  return (
    <div className="w-full my-12 lg:my-3 lg:flex justify-start bg-mygray items-center gap-10 xl:gap-8  2xl:gap-8 text-sm xl:text-base lg:pl-2 lg:pr-4 2xl:pr-6 mx-auto border">
      {/* <div className='w-1/2 lg:w-1/12 mx-auto lg:mx-0'>
        <img className=' mt-6 lg:mt-0 mx-auto w-full' src={pic}/>        
      </div> */}

      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden">نام دوره :</span>
        <span className="font-light text-sm"> {courseName}</span>
      </h2>

      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden">نام دانشجو :</span>
        <span className="font-light">{studentName} </span>
      </h2>

      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden">تاریخ خرید :</span>
        <span className="font-light">{reserverDate} </span>
      </h2>
      <div className=" my-4 lg:my-0 bg-red-400  w-3/12 lg:w-fit p-1 mx-auto text-white rounded ">
        <h2>حذف</h2>
      </div>
    </div>
  );
};

const BuyCourse = () => {
  const [buyCourses, setBuyCourses] = useState([
    {
      pic: "c1.png",
      name: "دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: 250000,
    },
    {
      pic: "c2.png",
      name: "دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: 250000,
    },
    {
      pic: "c4.png",
      name: "دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: 250000,
    },
  ]);

  const [start, setStart] = useState(0);
  var end = start + 5;

  const changeStart = (pageSize) => {
    setStart((pageSize - 1) * 6);
  };

  const costs = buyCourses.map((item) => {
    return item.cost;
  });
  const sumCosts = costs.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const [pageNumber, setPageNumber] = useState(1);

  const getBuyCourse = async () => {
    const result = await http.get(`/SharePanel/GetMyCoursesReserve`);
    return result;
  };

  const { data, status } = useQuery(
    ["buyCourseQuery", pageNumber],
    getBuyCourse
  );
  status === 'success' && console.log(data)

  const smallList = buyCourses.filter(
    (item, index) => index >= start && index <= end
  );

  return (
    <div className="xl:flex mx-auto flex-wrap justify-center my-8 lg:pt-6 text-center font-irSans">
      <h2 className="block  my-12 lg:my-0  lg:w-full lg:text-center text-2xl font-extrabold">
        دوره های رزرو شده
      </h2>

      <div className="w-10/12 mx-auto lg:w-8/12 xl:w-6/12 lg:mx-auto lg:mt-8 ">
        <div className="hidden rounded-t-xl lg:flex pr-4 py-2 text-md text-white bg-pannel  ">
          <h3 className="pr-10 xl:pr-8 2xl:pr-14">نام دوره</h3>
          <h3 className="pr-16 xl:pr-14 2xl:pr-14">نام دانشجو</h3>
          <h3 className="pr-16 xl:pr-18 2xl:pr-22">تاریخ رزرو دوره </h3>
        </div>
        {status === "success" && 
          data.map((item, index) => {
              return (
                <BuyCourseItem
                  key={index}
                  courseName={item.courseName}
                  studentName={item.studentName}
                  reserverDate={item.reserverDate}
                />
              );
          })}

        <div className="mt-8">
          <Pagination
            total={buyCourses.length}
            pageSize={6}
            showQuickJumper
            onChange={(pageSize) => {
              changeStart(pageSize);
            }}
          />
        </div>
      </div>

      {/* <div className="xl:flex text-center flex-wrap mt-8 p-4 lg:w-8/12 xl:w-3/12 mx-auto bg-mygray">
        <h2 className="my-8 xl:my-4 lg:w-1/2 xl:w-full mx-auto xl:mt-14">
          جمع کل :
          <span className="bg-zgh xl:block  text-center w-fit mx-auto mt-4  text-white p-1  rounded">
            {sumCosts} تومان
          </span>
        </h2>

        <div className="my-8 xl:my-4 w-2/3 mx-auto">
          <label className="block text-center " htmlFor="fname">
            کد تخفیف
          </label>
          <Input type="text" id="sale" name="sale" className="" />
        </div>

        <h2 className="my-8 xl:my-4 mb-14 xl:mb-8 lg:w-1/2 w-full mx-auto ">
          قیمت جدید :
          <span className="bg-zgh xl:block  text-center w-fit  mx-auto mt-4  text-white p-1  rounded">
            {sumCosts} تومان
          </span>
        </h2>
        <Button
          title="ادامه خرید"
          backgroundColor="bg-green-400"
          borderWidth="border-none"
          extra="h-10 mx-auto"
        ></Button>
      </div> */}
    </div>
  );
};

export default BuyCourse;
