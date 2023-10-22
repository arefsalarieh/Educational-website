import React from 'react'
import { Button, Checkbox, Form, Input   } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';


const Landing = () => {
  return (
    <>
  
    <section className='md:flex justify-center gap-x-6'>

      <div className='  md:w-2/5 w-full'>
        <img src='./big.png' alt='jdth' className='md:pt-20 lg:pt-0'/>
      </div>

      <div className='md:mr-24  md:pt-32 md:w-1/3 w-full text-center md:text-right lg:pt-32'>
        <h2><span className='text-zgh'>پژوهشگاه</span> سپهر</h2>
        <p className='mt-8 '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرده</p>
        <button className='bg-zgh mt-6 p-2 rounded-lg'>مشاهده دوره ها</button>
      </div>

    </section>


    <section className=' flex flex-wrap flex-col-2 justify-evenly text-center mt-16 lg:mt-0 bg-line bg-no-repeat bg-top-4 bg-80'>
      <h2 className='mb-10 w-full '>خدمات ما</h2>

      <div className='  text-center w-full sm:w-1/2  lg:w-1/4 lg:mt-30'>
        <div className='  mx-auto rounded-full overflow-hidden w-36 h-36 lg:w-30 lg:h-30'>
          <img src='./k1.png'/>
        </div>
        <h3 className='mb-2'>مشاوره</h3>
        <span className='block w-16 mx-auto border-b-4 border-yellow-400'></span>
        <p className='mt-2 text-xs md:text-lg'>لورم ایپسوم متن  صنعت چاپ</p>
      </div>

      <div className='  text-center w-full sm:w-1/2  lg:w-1/4 lg:mt-30'>
        <div className='  mx-auto rounded-full overflow-hidden w-36 h-36 lg:w-30 lg:h-30'>
          <img src='k2.png'/>
        </div>
        <h3 className='mb-2'>مشاوره</h3>
        <span className='block w-16 mx-auto border-b-4 border-yellow-400'></span>
        <p className='mt-2 text-xs md:text-lg'>لورم ایپسوم متن  صنعت چاپ</p>
      </div>

      <div className='  text-center w-full sm:w-1/2  lg:w-1/4 mt-8 lg:mt-26 '>
        <div className='  mx-auto rounded-full overflow-hidden w-40 h-40 lg:w-40 lg:h-40'>
          <img src='k3.png'/>
        </div>
        <h3 className='mb-2'>مشاوره</h3>
        <span className='block w-16 mx-auto border-b-4 border-yellow-400'></span>
        <p className='mt-2 text-xs md:text-lg'>لورم ایپسوم متن  صنعت چاپ</p>
      </div>      

      <div className='  text-center w-full sm:w-1/2  lg:w-1/4 mt-10 lg:mt-30'>
        <div className='  mx-auto rounded-full overflow-hidden w-36 h-36 lg:w-30 lg:h-30'>
          <img src='k4.png'/>
        </div>
        <h3 className='mb-2'>مشاوره</h3>
        <span className='block w-16 mx-auto border-b-4 border-yellow-400'></span>
        <p className='mt-2 text-xs md:text-lg'>لورم ایپسوم متن  صنعت چاپ</p>
      </div>
    </section>


    <section className=' mx-auto flex flex-wrap justify-evenly text-center mt-32 w-full md:w-2/3'>
      <h2 className=' w-full text-2xl mb-4'> دسته بندی</h2>

      <div className='bg-daste rounded-lg  text-center mt-12 w-full sm:w-1/6 h-32'>
        <div className=' w-10 h-10 mx-auto mt-8  overflow-hidden'>
          <img src='./d1.png'/>
        </div>
        <h3 className='my-3'>وب</h3>
      </div>

      <div className='bg-daste rounded-lg  text-center mt-12  w-full sm:w-1/6 h-32'>
        <div className=' w-10 h-10 mx-auto mt-8  overflow-hidden'>
          <img src='./d2.png'/>
        </div>
        <h3 className='my-3'>آی تی</h3>
      </div>

      <div className='bg-daste rounded-lg  text-center mt-12  w-full sm:w-1/6 h-32'>
        <div className=' w-10 h-10 mx-auto mt-8  overflow-hidden'>
          <img src='./d3.png'/>
        </div>
        <h3 className='my-3'>شبکه</h3>
      </div>

      <div className='bg-daste rounded-lg  text-center mt-12  w-full sm:w-1/6 h-32'>
        <div className=' w-10 h-10 mx-auto mt-8  overflow-hidden'>
          <img src='./d4.png'/>
        </div>
        <h3 className='my-3'>امنیت</h3>
      </div>

      <div className='bg-daste rounded-lg  text-center mt-12  w-full sm:w-1/6 h-32'>
        <div className=' w-10 h-10 mx-auto mt-8  overflow-hidden'>
          <img src='./d5.png'/>
        </div>
        <h3 className='my-3'>ریکت</h3>
      </div>
     
    </section>


    <section className='flex flex-wrap  mt-24 text-xl text-center'>
      <h2 className=' w-full text-2xl font-bold mb-16 '> دوره های آموزشی </h2>
      
      <div className='flex justify-around flex-wrap lg:flex-nowrap  gap-8 w-full px-18 text-xl text-center'>

        <div className='border shadow-xl pb-7 text-center w-full sm:w-5/12 lg:w-1/4'>
          <div className='bg-course p-8'>
            <img className=' mx-auto w-4/6'  src='./c1.png'/>
          </div>
          <div>
            <h3 className=' p-2 font-semibold  mt-4'>دوره آموزش جامع انگولار</h3>
            <p className=' p-2'>مدرس : آرمین ساکت</p>
            <button className='border-2  text-zgh rounded-xl p-2 px-4 m-3 '>ثبت دوره</button>
          </div>
        </div>

        <div className='border shadow-xl  pb-7 text-center w-full sm:w-5/12 lg:w-1/4'>
          <div className='bg-course p-8'>
            <img className=' mx-auto w-4/6'  src='./c2.png'/>
          </div>
          <div>
            <h3 className=' p-2 font-semibold mt-4'>دوره آموزش جامع انگولار</h3>
            <p className=' p-2'>مدرس : آرمین ساکت</p>
            <button className='border-2 text-zgh rounded-xl p-2 px-4 m-3 '>ثبت دوره</button>
          </div>
        </div>

        <div className='border shadow-xl pb-7 text-center w-full sm:w-5/12 lg:w-1/4'>
          <div className='bg-course p-8'>
            <img className=' mx-auto w-4/6'  src='./c3.png'/>
          </div>
          <div>
            <h3 className=' p-2 font-semibold  mt-4'>دوره آموزش جامع انگولار</h3>
            <p className=' p-2'>مدرس : آرمین ساکت</p>
            <button className='border-2 text-zgh rounded-xl p-2 px-4 m-3 '>ثبت دوره</button>
          </div>
        </div>

        <div className='border shadow-xl pb-7 text-center w-full sm:w-5/12 lg:w-1/4'>
          <div className='bg-course p-8'>
            <img className=' mx-auto w-4/6'  src='./c4.png'/>
          </div>
          <div>
            <h3 className=' p-2 font-semibold  mt-4'>دوره آموزش جامع انگولار</h3>
            <p className=' p-2'>مدرس : آرمین ساکت</p>
            <button className='border-2 text-zgh rounded-xl p-2 px-4 m-3 '>ثبت دوره</button>
          </div>
        </div>

      </div>

      <button className='mx-auto my-24 bg-zgh p-4 rounded-xl text-white'>مشاهده دوره ها</button>

    </section>


    <section className='text-justify '>
      <h2 className='text-center text-2xl  my-24 '> اساتید برتر</h2>

      <div className='gap-6 md:flex px-10 xl:px-18 pt-8'>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 640px

            // when window width is >= 768px
            768: {
      
              slidesPerView: 2,
            },

            1024: {
      
              slidesPerView: 3,
            },            
          }}
          
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          

    >
      <SwiperSlide >
        <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
      <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div> 
      </SwiperSlide>

      <SwiperSlide>
        <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
      <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div> 
      </SwiperSlide>

      <SwiperSlide>
        <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
      <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div> 
      </SwiperSlide>

    </Swiper>

        {/* <div  className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8'>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12 '>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div>

        <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div>

        <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8'>
          <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>دکتر محمد حسین بحرالعلوم</h2>
          <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4' src='./dr.png'/>
          <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
          <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کاربر</p>
        </div> */}

      
      </div>
    </section>


    <section className='mt-32 text-justify'>
      <h2 className='text-center text-2xl w-full'>اخبار و مقالات</h2>

      <div className='flex flex-wrap xl:flex-nowrap gap-12 lg:px-48'>

        <div className='flex flex-wrap  items-center w-10/12 xl:w-1/2 mx-auto my-8 gap-4'>
          <h3 className='  w-1/12'>اخبار </h3>
          <span className='border-8 h-4 w-10/12 '></span>

          <div className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
            <img className='m-4 mx-auto sm:mx-0' src='./news.png'/>
            <p className='pl-8 pr-4 text-sm mt-6'>
              م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد   
              <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2 left-6 bottom-2' src='./felesh.png'/></span>
            </p>
          </div>

          <div className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
            <img className='m-4 mx-auto sm:mx-0' src='./news.png'/>
            <p className='pl-8 pr-4 text-sm mt-6'>
              م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد   
              <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2 left-6 bottom-2' src='./felesh.png'/></span>
            </p>
          </div>

          <div className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
            <img className='m-4 mx-auto sm:mx-0' src='./news.png'/>
            <p className='pl-8 pr-4 text-sm mt-6'>
              م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد   
              <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2 left-6 bottom-2' src='./felesh.png'/></span>
            </p>
          </div>

        </div>


        <div className='flex flex-wrap  items-center w-10/12 xl:w-1/2 mx-auto my-8 gap-4'>
          <h3 className='  w-1/12'>اخبار </h3>
          <span className='border-8 h-4 w-10/12 '></span>

          <div className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
            <img className='m-4 mx-auto sm:mx-0' src='./news.png'/>
            <p className='pl-8 pr-4 text-sm mt-6'>
              م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد   
              <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2 left-6 bottom-2' src='./felesh.png'/></span>
            </p>
          </div>

          <div className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
            <img className='m-4 mx-auto sm:mx-0' src='./news.png'/>
            <p className='pl-8 pr-4 text-sm mt-6'>
              م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد   
              <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2 left-6 bottom-2' src='./felesh.png'/></span>
            </p>
          </div>

          <div className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
            <img className='m-4 mx-auto sm:mx-0' src='./news.png'/>
            <p className='pl-8 pr-4 text-sm mt-6'>
              م ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد   
              <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2  left-6 bottom-2' src='./felesh.png'/></span>
            </p>
          </div>

        </div>
      </div>


  
    </section>


    <section className='mt-12 '>
      <h2 className='text-center w-full text-2xl mt-8'>پیشمهادات و شکایات</h2>
      <div className=' flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-4   mx-auto'>
        <div className=' w-full lg:w-1/2'>
          <Form className=' shadow-xl mx-auto lg:mr-48 mt-12 pt-6 px-12 w-8/12 '    name="basic" labelCol={{span: 8,}}   initialValues={{remember: true,}}>
            <label htmlFor='d1'>ایمیل شما</label>
            <Form.Item id='d1' className='w-full  mt-4 rounded-xl' name="email" rules={[{ required: true, message: 'Please input your username!',},]}>
              <Input className='w-full h-14 text-xl p-4' style={{direction:'ltr'}} placeholder='Maryammohajer@gmail.com'/>
            </Form.Item>

            <label htmlFor='d2'>متن پیام شما</label>
            <Form.Item id='d2' className='mt-4'>
              <TextArea className='h-24 rounded-xl' style={{direction:'ltr' , height:'160px' ,minHeight:'100px' , maxHeight:'300px'}}/>
            </Form.Item>

            <Form.Item >
              <Button type="primary" className='bg-send rounded-xl mx-auto mb-8 px-6 pt-0 h-10 block text-xl '>ارسال</Button>
            </Form.Item>
            
          </Form>
        </div>

        <div className=' w-full lg:w-1/2'>
          <img className='w-8/12 mx-auto lg:mr-16' src="./pish.png" alt="" />
        </div>
        
      </div>
    </section>

  

    </>
  )
}

export default Landing