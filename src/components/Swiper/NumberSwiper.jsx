import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

function NumberSwiper({ films, counter, setCounter }) {
  const number = 1;
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={4.7}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={'h-[160px] w-[1400px]'}
      >
        {films.map((film, i) => (
          <SwiperSlide key={i} className={''}>
            <Link to={'/films/' + film.id}>
              <div className={'flex items-start'}>
                <span className={'text-textGray text-[200px] -mt-20'}>
                  {film.id}{' '}
                </span>
                <img
                  className={'w-[145px] h-[205px]'}
                  src={film.small_poster}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NumberSwiper;
