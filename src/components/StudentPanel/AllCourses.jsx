import React, { useState } from 'react'
import SearchCourses from '../common/search/searchCourses'
import { Pagination } from 'antd'
import style from './PaidCourses.modules.css'

const AllCoursesItem = ({pic , name , teacher , term , startDate , cost}) =>{
  return(
    <div className='my-12 lg:my-3 lg:flex justify-around bg-mygray items-center gap-9 xl:gap-12 2xl:gap-18 text-sm xl:text-base lg:pr-4 2xl:pr-6 mx-auto border'>
      <div className='w-1/2 lg:w-1/12 mx-auto lg:mx-0'>
        <img className=' mt-6 lg:mt-0 mx-auto w-full' src={pic}/>        
      </div>

      <h2 className='font-extrabold mt-4 lg:mt-0'>
        <span className='lg:hidden'>نام دوره :</span>
        <span className='font-light'>  {name}</span>
      </h2>
      <h2 className='font-extrabold mt-4 lg:mt-0'>
        <span className='lg:hidden'>مدرس  :</span>
        <span className='font-light'>{teacher} </span>
      </h2>
      <h2 className='font-extrabold mt-4 lg:mt-0'>
        <span className='lg:hidden'>نام ترم  :</span>
        <span className='font-light'>{term}   </span>
      </h2>
      <h2 className='font-extrabold mt-4 lg:mt-0'>
        <span className='lg:hidden'>تاریخ شروع   :</span>
        <span className='font-light'>{startDate}  </span>
      </h2>
      <h2 className='font-extrabold mt-4 lg:mt-0'>
        <span className='lg:hidden'>قیمت    :</span>
        <span className='font-light'>{cost}  تومان  </span>
      </h2>
      <div className= 'mx-auto my-4 lg:my-0 bg-pannel bg-courseIcon bg-center rounded-full overflow-hidden w-6 h-6'> </div>

    </div>    
  )

}





const AllCourses = () => {
  const [pCourses , setPCourses] = useState([
    {pic:'c1.png' , name : '1دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c2.png' , name : '2دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c3.png' , name : '3دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c4.png' , name : '4دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c1.png' , name : '5دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c2.png' , name : '6دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c3.png' , name : '7دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c4.png' , name : '8دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c1.png' , name : '1دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c2.png' , name : '2دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c3.png' , name : '3دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c4.png' , name : '4دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c1.png' , name : '5دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c2.png' , name : '6دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c3.png' , name : '7دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
    {pic:'c4.png' , name : '8دوره ریکت' , teacher : 'دکنر بحرالعلوم' , term : 'بهار ' , startDate : '1400/02/02' , cost : '250000   '},
  ])

  const [start , setStart] = useState(0)
  var end = start + 5 ;

  const changeStart = (pageSize) =>{
    setStart((pageSize-1)*6) ;
    //console.log(pageSize);
  }  


  const smallList = pCourses.filter((item , index)=>index >= start && index <= end)



  return (
    <div className='lg:flex mx-auto flex-wrap my-8 lg:pt-6 text-center font-irSans'>
      <h2 className='block  my-12 lg:my-0  lg:w-7/12 lg:text-left text-2xl font-extrabold'>لیست دوره ها  </h2>
      <SearchCourses backgroundColor='bg-pannel'  width='w-9/12 lg:w-3/12' height='h-10'/>
      <div className='mx-auto  w-10/12 lg:mt-8'>
        <div className='hidden rounded-t-xl lg:flex pr-4 py-2 text-md text-white bg-pannel '>
          <h3 className='pr-3 xl:pr-6 2xl:pr-8'>نصویز</h3>
          <h3 className='pr-10 xl:pr-16 2xl:pr-26'>نام دوره</h3>
          <h3 className='pr-16 xl:pr-20 2xl:pr-26'>مدرس</h3>
          <h3 className='pr-12 xl:pr-16 2xl:pr-22'>نام ترم</h3>
          <h3 className='pr-6 xl:pr-10 2xl:pr-16'>ناریخ شروع </h3>
          <h3 className='pr-12 xl:pr-18 2xl:pr-24'>قیمت </h3>
        </div>

        {smallList.map((item , index)=>{
          return(
            <AllCoursesItem key={index} pic={item.pic} name={item.name} teacher={item.teacher} 
            term={item.term} startDate={item.startDate} cost={item.cost}/>            
          )
        })}

        <div className='mt-8'>
           <Pagination total={pCourses.length} pageSize={6} showQuickJumper onChange={pageSize=>{changeStart(pageSize)}}/>
        </div>


        
      </div>  
    </div>
  )
}

export default AllCourses