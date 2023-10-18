import React from "react";
import Dashboard from "./Dashboard.jsx";
import AllCourses from "./AllCourses.jsx";
import PaidCourses from "./PaidCourses.jsx";
import BuyCourse from "./BuyCourse.jsx";
import EditProfile from "./EditProfile.jsx";

let layoutRenderer = (navigateTo) => {
  if (navigateTo === "dash") {
    return <Dashboard />;
  } else if (navigateTo === "allCourses") {
    return <AllCourses />;
  } else if (navigateTo === "paidCourses") {
    return <PaidCourses />;
  } else if (navigateTo === "buyCourse") {
    return <BuyCourse />;
  } else if (navigateTo === "edit") {
    return <EditProfile />;
  }
};


const LeftLayout = ({ navigateTo }) => {
  console.log(navigateTo);
  return (
    <div className=" shadow-[0px_0px_25px_rgba(51,141,129,0.4)] rounded-r-md sm:rounded-r-none sm:rounded-l-2xl w-11/12 ms-2 sm:ms-0 sm:w-3/4 min-h-screen xl:mt-6 2xl:mt-10">
      {layoutRenderer(navigateTo)}
    </div>
  );
};

export default LeftLayout;
