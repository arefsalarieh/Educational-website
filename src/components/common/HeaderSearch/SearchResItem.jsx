import React from "react";

const SearchResItem = ({ data }) => {
  return (
    <div className="w-[97%] h-[120px] mx-auto grid grid-cols-3 grid-rows-2 shadow-shadowPrimaryFront cursor-pointer rounded-lg me-[6px]">
      <div className="col-span-1 row-span-2 flex items-center justify-center">
        <img
          className="w-5/6 h-5/6 object-contain rounded-lg"
          src={data.image}
          alt=""
        />
      </div>
      <h4 className="col-span-2 flex items-center indent-4">{data.title}</h4>
      <div className="col-span-2 grid grid-cols-4 overflow-hidden text-sm">
        <p className="col-span-3 max-h-10 text-sm text-slate-400">
          {data.desc}
        </p>
        <span className="col-span-1 text-primary dark:text-teal-800 flex justify-center text-sm items-center mt-2">
          بیشتر...
        </span>
      </div>
    </div>
  );
};

export default SearchResItem;
