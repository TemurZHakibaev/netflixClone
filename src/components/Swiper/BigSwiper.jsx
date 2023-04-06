import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Link } from 'react-router-dom';

function BigSwiper({ films }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={4.7}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={'w-[1400px]'}
      >
        {films.map((film, i) => (
          <SwiperSlide key={i} className={'w-[285px] '}>
            <Link to={'/films/' + film.id}>
              <img className={'h-[575px] '} src={film.small_poster} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      v
    </div>
  );
}

export default BigSwiper;
