
import { InputPasswordComp } from "./InputPasswordComp";
const ContentChangePass = () => {
  return (
    <>
      <div className="md:flex">
        <p className="font-irSans mb-2 font-bold md:font-semibold  whitespace-nowrap  w-[135px] text-sm md:text-[16px]">
          پسورد فعلی
        </p>
        <InputPasswordComp />
      </div>
      <div className=" md:flex">
        <p className="font-irSans mb-2 font-bold md:font-semibold   whitespace-wrap  md:whitespace-wrap  md:whitespace-nowrap  w-[135px] text-sm md:text-[16px]">
          پسورد جدید
        </p>
        <InputPasswordComp />
      </div>
      <div className="md:flex">
        <p className="font-irSans mb-2 font-bold md:font-semibold    whitespace-wrap  md:whitespace-nowrap  w-[135px] text-sm md:text-[16px]">
          {" "}
          تکرار پسورد جدید
        </p>
        <InputPasswordComp />
      </div>
    </>
  );
};
export { ContentChangePass };
