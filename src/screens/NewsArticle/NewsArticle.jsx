import React from 'react'
import NewsArticleComponent from '../../components/NewsArticleComponent/NewsArticleComponent'
import SearchCourses from '../../components/common/search/searchCourses'
import Button from '../../components/common/button/button'

const NewsArticle = () => {
  return (
  <div className='text-center font-irSans'>

    <section>
        <div className='mx-auto w-2/5 mt-12'><img src="laptop.png" alt="" /></div>
    </section>

    <h2 className='mb-12'>اخبار و مقالات  </h2>

    <SearchCourses placeholder='عنوان مورد نظر ...'/>

    <NewsArticleComponent/>

    <Button backgroundColor='bg-white' textColor='text-black' borderWidth='border' extra='mt-12'  paddingY = 'py-3' title='بیشتر' />

  </div>
  )
}

export default NewsArticle