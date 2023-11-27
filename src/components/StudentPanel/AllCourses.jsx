import React, { useState } from "react";
import SearchCourses from "../common/search/searchCourses";
import { Pagination } from "antd";
import style from "./PaidCourses.modules.css";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const AllCoursesItem = ({
  name,
  teacher,
  term,
  cost,
  levelName,
  technologyList,
}) => {
  const courseId = useParams();

  return (
    <div className="my-12 lg:my-3 lg:flex justify-around bg-mygray items-center gap-9 xl:gap-12 2xl:gap-18 text-sm xl:text-base lg:pr-4 2xl:pr-6 mx-auto border">
      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden">نام دوره :</span>
        <span className="font-light"> {name}</span>
      </h2>
      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden">مدرس :</span>
        <span className="font-light">{teacher} </span>
      </h2>
      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden"> آموزش و یادگیری :</span>
        <span className="font-light">{technologyList} </span>
      </h2>
      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden"> سطح دوره :</span>
        <span className="font-light">{levelName} </span>
      </h2>
      <h2 className="font-extrabold mt-4 lg:mt-0">
        <span className="lg:hidden">قیمت :</span>
        <span className="font-light">{cost} تومان </span>
      </h2>
      <div className="mx-auto my-4 lg:my-0 bg-pannel bg-courseIcon bg-center rounded-full overflow-hidden w-6 h-6">
        {" "}
      </div>
    </div>
  );
};

const AllCourses = () => {
  const [pCourses, setPCourses] = useState([
    {
      pic: "c1.png",
      name: "1دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c2.png",
      name: "2دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c3.png",
      name: "3دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c4.png",
      name: "4دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c1.png",
      name: "5دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c2.png",
      name: "6دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c3.png",
      name: "7دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c4.png",
      name: "8دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c1.png",
      name: "1دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c2.png",
      name: "2دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c3.png",
      name: "3دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c4.png",
      name: "4دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c1.png",
      name: "5دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c2.png",
      name: "6دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c3.png",
      name: "7دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
    {
      pic: "c4.png",
      name: "8دوره ریکت",
      teacher: "دکنر بحرالعلوم",
      term: "بهار ",
      startDate: "1400/02/02",
      cost: "250000   ",
    },
  ]);

  const [start, setStart] = useState(0);
  var end = start + 5;

  const changeStart = (pageSize) => {
    setStart((pageSize - 1) * 6);
  };

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    e.target.value && setSearch(`&Query=${e.target.value}`);
    !e.target.value && setSearch("");
  };

  const getAllCourse = async () => {
    const result = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=4&SortingCol=Active&SortType=DESC${search}&TechCount=0`
    );
    return result;
  };

  const { data, status } = useQuery(
    ["allCourseQuery", pageNumber, search],
    getAllCourse
  );

  status === "success" && console.log(data);

  const smallList = pCourses.filter(
    (item, index) => index >= start && index <= end
  );

  return (
    <div className="lg:flex mx-auto flex-wrap my-8 lg:pt-6 text-center font-irSans">
      <h2 className="block  my-12 lg:my-0  lg:w-7/12 lg:text-left text-2xl font-extrabold">
        لیست دوره ها
      </h2>
      {/* <SearchCourses
        backgroundColor="bg-pannel"
        width="w-9/12 lg:w-3/12"
        height="h-10"
        onChange={handleSearch}
      /> */}
        <div className="border mx-auto  flex rounded-lg  overflow-hidden w-8/12 md:w-6/12 h-10 md:h-12 mt-10">
          <input
            onChange={handleSearch}
            type="text"
            className="block w-full pr-4"
            placeholder="جستجوی دوره ..."
          />
          <button className="block  bg-magnifier bg-50 bg-no-repeat bg-center  rounded-none w-10 md:w-12  text-white p-2.5 px-4 bg-zgh"></button>
        </div>

      <div className="mx-auto  w-10/12 lg:mt-8">
        <div className="hidden rounded-t-xl lg:flex pr-4 py-2 text-md text-white bg-pannel ">
          <h3 className="pr-10 xl:pr-16 2xl:pr-26">نام دوره</h3>
          <h3 className="pr-16 xl:pr-20 2xl:pr-26">مدرس</h3>
          <h3 className="pr-6 xl:pr-10 2xl:pr-16"> آموزش و یادگیری</h3>
          <h3 className="pr-12 xl:pr-16 2xl:pr-22"> سطح دوره</h3>
          <h3 className="pr-12 xl:pr-18 2xl:pr-24">قیمت </h3>
        </div>
        {status === "success" &&
          data.courseFilterDtos.map((item, index) => {
            return (
              <AllCoursesItem
                key={index}
                name={item.title}
                teacher={item.teacherName}
                term={item.termName}
                levelName={item.levelName}
                technologyList={item.technologyList}
                cost={item.cost}
              />
            );
          })}

        <div className="mt-8">
          <Pagination
            total={pCourses.length}
            pageSize={6}
            showQuickJumper
            onChange={(pageSize) => {
              changeStart(pageSize);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
