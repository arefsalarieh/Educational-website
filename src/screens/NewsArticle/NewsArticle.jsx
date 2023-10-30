import React from 'react'
import BigSearch from '../../components/common/BigSearch/BigSearch';
import NewsArticleComponent from '../../components/NewsArticleComponent/NewsArticleComponent';

const NewsArticle = () => {
  return (
    <div className='text-center font-irSans'>

    <section>
        <div className='mx-auto w-2/5 mt-12'><img src="laptop.png" alt="" /></div>
    </section>

    <h2 className='mb-12 font-extrabold text-xl mt-8'>اخبار و مقالات  </h2>

    <BigSearch placeholder='عنوان مورد نظر ...'/>

    <NewsArticleComponent/>


  </div>
  )
}

export default NewsArticle