import React from "react";
import SearchResItem from "./SearchResItem";
import SearchResNull from "./SearchResNull";
import SearchItemSkeleton from "./SearchItemSkeleton";

function SearchResItems({ data, header, isLoading }) {
  if (isLoading) {
    return (
      <div className="flex flex-col py-3">
        <div class="flex items-start justify-start h-6 ms-3 my-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
        <div className="flex flex-col items-center pb-2 gap-y-2">
          <SearchItemSkeleton />
          <SearchItemSkeleton />
          <SearchItemSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-auto my-4">
      <h4 className=" ps-6">{header}</h4>
      <div className="w-11/12 max-h-[424px] grid gap-y-4 mx-auto py-4 overflow-y-scroll ">
        {data ? (
          data.map((data, index) => <SearchResItem key={index} data={data} />)
        ) : (
          <SearchResNull />
        )}
      </div>
    </div>
  );
}

export default SearchResItems;
