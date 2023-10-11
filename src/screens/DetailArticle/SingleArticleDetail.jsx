import React from "react";

const SingleArticleDetail = ({ id, title, date }) => {
  return (
    <>
      <div className="w-full flex  flex-col mx-auto justify-center items-center border border-bg-bgBorder rounded-md p-5 bg-white 2xl: xl:w-1/7 lg:w-1/6 md:w-1/5 sm:w-1/4 ">
        {/* Image */}
        <div className="w-full flex justify-center pb-2 ">
          <img
            src="/public/assets/img/office.jpg"
            alt="NewsPic"
            className=" rounded-full w-100 h-100 p-3"
          />
        </div>
        {/* Title */}
        <div>
          <p className=" text-justify  text-sm  font-bold  whitespace-nowrap pb-2 ">
            {title}
          </p>
        </div>
        {/* Date */}
        <div>
          <p className=" text-justify  text-sm  font-bold  whitespace-nowrap pb-2 text-bgbtns">
            {date}
          </p>
        </div>
      </div>
    </>
  );
};

export { SingleArticleDetail };
