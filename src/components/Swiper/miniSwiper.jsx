// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import { Link } from 'react-router-dom';
export default ({ films }) => {
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
          <SwiperSlide key={i} className={'w-[285px]'}>
            <Link to={'/films/' + film.id}>
              <img src={film.small_poster} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
