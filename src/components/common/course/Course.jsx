import React, { useState } from 'react'

const Course = ({courseShape , courseName , teacher , date , src }) => {
  const [courseStyle , setCourseStyle] = useState([
    // course style for courses
    {parent : 'border  md:w-5/12 rounded-xl p-8 lg:flex shadow-2xl',
      firstDiv:'lg:w-1/2  rounded-xl shadow-inner bg-course',
      img:'mx-auto',
      secondDiv:'lg:w-1/2 text-center lg:text-right lg:pr-6',
      h2:'font-bold mt-4 xl:mt-4',
      firstP:'mt-8',
      secondP:'mt-8',
      but:' block  border-zgh border rounded-xl mx-auto xl:mr-18 mt-6 py-1 px-4',
    },

    //course style for landing 
    {parent : 'border shadow-xl  pb-7 text-center w-full sm:w-5/12 lg:w-1/4',
      firstDiv:'bg-course p-8',
      img:' mx-auto w-4/6',
      secondDiv:'',
      h2:'p-2 md:p-4 text-sm sm:text-base md:text-xl font-sm mt-4',
      firstP:'p-2 md:p-4 text-sm sm:text-base md:text-lg text-blue-400',
      secondP:'p-2',
      but:' border-2 text-zgh rounded-xl p-2 px-2 md:px-4 m-2 ',  
    }
  ])

  return (


    <div className={courseShape =='courses' ? courseStyle[0].parent : courseStyle[1].parent}>
        <div className={courseShape =='courses' ? courseStyle[0].firstDiv : courseStyle[1].firstDiv}>
            <img className={courseShape =='courses' ? courseStyle[0].img : courseStyle[1].img}  src={src} alt="" />
        </div>
        <div className={courseShape =='courses' ? courseStyle[0].secondDiv : courseStyle[1].secondDiv}>
            <h2 className={courseShape =='courses' ? courseStyle[0].h2 : courseStyle[1].h2}>{courseName}</h2>
            <p className={courseShape =='courses' ? courseStyle[0].firstP : courseStyle[1].firstP}>مدرس : {teacher} </p>
            {courseShape =='courses' ? 
            <p className={ courseStyle[0].secondP }>  تاریخ شروع : {date}</p>
            : null}
            <button className={courseShape =='courses' ? courseStyle[0].but : courseStyle[1].but}>ثبت دوره</button>
        </div>
    </div>
  )
}

export default Course