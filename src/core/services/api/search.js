import http from "../interceptor/";
import axios from "axios";

export const headerSearch = (input) => {
  //   console.log(input);
//   if (!input) return;
  console.log("fetching search result started...");
  const result = http.get(
    "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0&query=" + input
  );
  console.log(result);
  return result;
};
