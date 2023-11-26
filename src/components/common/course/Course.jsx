import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import http from '../../../core/services/interceptor'
import {useQuery} from 'react-query'
import { LikeOutlined , DislikeOutlined} from "@ant-design/icons";




const Course = ({courseShape , idx , courseName , teacher , date , src , likeCount , userIsLiked , userLikedId , userFavorite }) => {
  const [count , setCount] = useState(likeCount)
  const navigate = useNavigate()
  const [like , setLike] = useState(1)
  const handleClick = () => {
    navigate("/CourseMenuDetail/" + idx)
  }

  const handleReserve =async () =>{
    const itemId = {
      courseId: idx,
    }
    const result = await http.post('/CourseReserve/ReserveAdd' , itemId )
    console.log(result);
  }

  const handleFavorite =async () =>{
    if(userFavorite === false){
      const itemId = {
        courseId: idx,
      }
      const result = await http.post('/Course/AddCourseFavorite' , itemId )
      console.log(result);  
    }

  }  

  const handleLike =async (e) =>{

    const result = await http.post(`/Course/AddCourseLike?CourseId=${idx}`)
    {userIsLiked === false ? setCount(2) : null}
    
  }



  const handleDeleteLike =async () =>{
    const data = new FormData()

    const dislikeObj = {
      CourseLikeId : userLikedId,
    }

    const keys = Object.keys(dislikeObj)

    keys.forEach((key)=>{
      const item = dislikeObj[key]
      data.append(key , item)
      console.log(data);
    })


    //data.append('CourseLikeId' , userLikedId)

     const result = await http.delete(`/Course/DeleteCourseLike` , data)  

     console.log(result); 
  }

  
  



  const [courseStyle , setCourseStyle] = useState([
    // course style for courses
    {parent : 'border  md:w-5/12 rounded-xl p-8 lg:flex shadow-2xl dark:shadow-shadowDarkUp dark:border-slate-400 m-6 md:m-0 cursor-pointer',
      firstDiv:'lg:w-1/2  rounded-xl shadow-inner bg-course',
      img:'mx-auto',
      secondDiv:'lg:w-1/2 text-center lg:text-right lg:pr-6',
      h2:'font-bold mt-4 xl:mt-4',
      firstP:'mt-8',
      secondP:'mt-8',
      but:' block  border-zgh border rounded-xl mx-auto xl:mr-18 mt-6 py-1 px-4',
    },

    //course style for landing 
    {parent : 'border shadow-xl  pb-7 text-center w-full sm:w-5/12 lg:w-1/5',
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


    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ delay:0.3}}
    className={courseShape =='courses' ? courseStyle[0].parent : courseStyle[1].parent}>
        <div className={courseShape =='courses' ? courseStyle[0].firstDiv : courseStyle[1].firstDiv}>
            <img className={courseShape =='courses' ? courseStyle[0].img : courseStyle[1].img}  src={src} alt="" />
        </div>
        <div className={courseShape =='courses' ? courseStyle[0].secondDiv : courseStyle[1].secondDiv}>
            <h2 className={courseShape =='courses' ? courseStyle[0].h2 : courseStyle[1].h2} onClick={handleClick}>{courseName}</h2>
            <p className={courseShape =='courses' ? courseStyle[0].firstP : courseStyle[1].firstP}>مدرس : {teacher} </p>
            {courseShape =='courses' ? 
            <p className={ courseStyle[0].secondP }>  تاریخ شروع : {date}</p>
            : null}

            <div className='flex  h-6  mt-6'>

              <button onClick={handleFavorite} className='flex w-1/2  h-6 justify-center'>
                {userFavorite === true  ? <img className=' overflow-hidden' src='./heart2.png'/> : <img className=' overflow-hidden' src='./heart1.png'/>}
             
              </button>

             <button onClick={handleLike} className='flex w-1/4  h-6 justify-center '>
                {userIsLiked === true || count !==likeCount ? <img className=' overflow-hidden' src='./like2.png'/> : <img className=' overflow-hidden' src='./like1.png'/>}
                <h5 className='mr-2'>{count}</h5>                        
              </button>                

              <button onClick={handleDeleteLike} className='flex w-1/4  h-6 justify-center '>
                <img className=' overflow-hidden' src='./dislike1.png'/>       
              </button>              
            </div>

            <button onClick={handleReserve} className={courseShape =='courses' ? courseStyle[0].but : courseStyle[1].but}>ثبت دوره</button>
        </div>
    </motion.div>
  )
}

export default Course