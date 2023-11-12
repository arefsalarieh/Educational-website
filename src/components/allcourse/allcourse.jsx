import React, { useState } from "react";
import Course from "../common/course/Course";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";
import { string } from "yup";

const Allcourse = ({ parentShape, courseShape }) => {
  const [coursesList, setCoursesList] = useState([
    {
      courseName: "دوره آموزش جامع ریکت",
      teacherName: "آرمین ساکت",
      date: "1402/9/10",
      src: "c2.png",
      statusName: "درحال برگذاری",
      levelName:"مقدماتی",
      typeName:"حضوری",
      cost:"17500.00"
    },
    {
      courseName: "دوره آموزش جامع ریکت",
      teacherName: "آرمین ساکت",
      date: "1402/9/10",
      src: "c2.png",
      statusName: "درحال برگذاری",
      levelName:"مقدماتی",
      typeName:"حضوری",
      cost:"17500.00"
    },
    {
      courseName: "دوره آموزش جامع ریکت",
      teacherName: "آرمین ساکت",
      date: "1402/9/10",
      src: "c2.png",
      statusName: "درحال برگذاری",
      levelName:"مقدماتی",
      typeName:"حضوری",
      cost:"17500.00"
    },
    {
      courseName: "دوره آموزش جامع ریکت",
      teacherName: "آرمین ساکت",
      date: "1402/9/10",
      src: "c2.png",
      statusName: "درحال برگذاری",
      levelName:"مقدماتی",
      typeName:"حضوری",
      cost:"17500.00"
    },
  ]);

  const [parentDesign, setParentDesign] = useState([
    // course wraper style for courses
    {
      parentCourses:
        "w-full xl:w-10/12 mt-12 mx-auto md:flex md:flex-wrap justify-center gap-16 ",
    },
    //course wraper style for landing
    {
      parentLanding:
        "flex justify-around flex-wrap lg:flex-nowrap mt-8 gap-8 w-full px-6 sm:px-18 text-xl text-center",
    },
  ]);
  const getCoursesPaging = async () => {
    const result = await http.get("/Home/GetCoursesWithPagination?PageNumber=3&RowsOfPage=2&SortingCol=Active&SortType=DESC&TechCount=0");
    return result;
  };
  const getCoursesList = async () => {
    const result = await http.get("/Home/GetCoursesTop?Count=5");
    return result;
  };
  const { data, status } = useQuery("CoursesQuery", getCoursesPaging);

  var st = "st";

  if (parentShape == "courses") {
    st = parentDesign[0].parentCourses;
  } else if (parentShape == "landing") {
    st = parentDesign[1].parentLanding;
  }

  return (
    <section className="mx-auto text-center">
      <div className={st}>
        {status === "success" &&
          data.map((item, index) => {
            return (
              <Course
              key={index}
              courseShape={courseShape}
              courseName={item.classRoomName}
              teacher={item.teacherName}
              date={item.lastUpdate}
              typeName = {item.typeName}
              levelName = {item.levelName}
              src={item.src}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Allcourse;
