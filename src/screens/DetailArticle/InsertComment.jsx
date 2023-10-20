import { Tabs } from "antd";
import "/src/menuTabs.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const InsertComment = () => {
  return (
    <>
      {/* Global Container */}
      <div className="w-5/6 items-center justify-center  bg-bgDetail mx-auto p-8  md:p-12">
        <div className="w-full flex flex-col">
          <p className="font-semibold mb-2 whitespace-nowrap text-[12px]">
            نظر خود را وارد کنید!
          </p>
          <textarea
            className="w-full  h-[120px] p-3 md:h-[150px] border rounded-md  boreder-bgDetail placeholder-bgPlaceholder   text-base resize-none  placeholder:text-sm    md:placeholder:text-lg   focus:outline-none focus:border-bgFocusText focus:ring-1 focus:ring-bgFocusText"
            placeholder="نظر خود را وارد نمایید..."
            
          />

          {/*Boutton */}
          <div className="w-full mt-4 ">
            {/* bg-bgBtnComment border-bgBtnComment  shadow-green-200 */}
            <button className="flex w-full   whitespace-nowrap justify-center items-center p-3  py-1 space-x-4  font-bold text-white rounded-md  shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150    md:px-6 md:py-2 md:w-1/4  md:relative md: right-3/4">
              ثبت دیدگاه شما
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <BsFillArrowDownCircleFill className="rounded-full text-bgArrowDown w-10 h-10 relative  top-12 md:top-16 md:w-12 md:h-12" />
        </div>
      </div>
    </>
  );
};
export { InsertComment };
