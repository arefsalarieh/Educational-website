import React, { useState } from 'react'
import SingleItem from './singleItem'

const Article = () => {
    const [newsList , setNewsList] = useState([
        { pic:'./news.png' , desc:'م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد  ' },
        { pic:'./news.png' , desc:'م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد  ' },
        { pic:'./news.png' , desc:'م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد  ' },
    ])

  return (
    <>
        {newsList.map((item , index)=>{
            return(
                <SingleItem key={index} pic={item.pic} desc={item.desc}/>                
            )
        })}

    </>
  )
}

export default Article