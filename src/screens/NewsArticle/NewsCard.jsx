import React from "react";

const NewsCard = ({
  id,
  title,
  nameWriter,
  view,
  description,
})  => {
  return (
    <>
      <div className="w-5/6 mx-auto justify-center border border-bg-bgBorder rounded-md p-3">
        {/* Image */}
        <div className="w-full mx-auto justify-center pb-4">
          <img src="/public/assets/img/itemNewsPic.jpg" alt="NewsPic" />
        </div>
        {/* Text below the photo */}
        <div className="px-2">
          {/* Title */}
          <div>
            <p className=" text-justify  text-sm  font-semibold font-sans whitespace-nowrap pb-2">
              {title}
            {/* آموزش ری اکت جی اس با استاد جدید */}
            </p>
          </div>
          {/* Description */}
          <div className="mx-auto">
            <p className=" text-justify text-xs font-sans pb-2">
            {description}
              {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده{" "} */}
            </p>
          </div>
          {/* Writer and View */}
          <div className="flex justify-between">
            {/*View */}
            <div>
              <p className=" text-justify  text-[11px] font-sans font-light">
                {view}
                {/* 232 */}
              </p>
            </div>
            {/* Writer*/}
            <div>
              <p className=" text-justify  text-xs text-bgWriterNews  font-semibold font-sans">
                {nameWriter}
                {/* مریم مهاجر */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NewsCard };
