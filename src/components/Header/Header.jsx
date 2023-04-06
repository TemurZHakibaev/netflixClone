import React from 'react';
import { HeaderMainBg } from '../../assets/image/index';
import MiniSwiper from '../Swiper/MiniSwiper';
import BigSwiper from '../Swiper/BigSwiper';

function Header({ films }) {
  return (
    <>
      <header
        className={`pt-8`}
        style={{ backgroundImage: `url(${HeaderMainBg})` }}
      >
        <div className={'w-container mx-auto text-white'}>
          <div className={''}>
            <h1 className={'text-bigTitleSize font-extrabold'}>Yanimda</h1>
            <span className={'text-bigTitleSize font-medium'}>cal</span>
          </div>
          <h2 className={'text-[30px] font-medium'}>
            Türkiye’de Bugün 4 Numara
          </h2>
          <p>
            Küçük yaşta başının çaresine bakmayı öğrenen ve çok{' '}
            <span className={'block'}>
              çalışarak iş dünyasında önemli bir konuma gelen Emir,
            </span>{' '}
            bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı{' '}
            <span>değişir .</span>
          </p>
          <div className={'mt-4 flex gap-4'}>
            <button
              className={
                'bg-white text-textBlack font-medium py-4 px-9 rounded-sm'
              }
            >
              Oynat
            </button>
            <button
              className={'text-textBlack font-medium py-4 px-9 rounded-sm'}
              style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
            >
              Daha Fazla Bilgi
            </button>
          </div>
        </div>

        <div>
          <h3>Netflix'te Popüler</h3>
          <MiniSwiper films={films} />
        </div>
      </header>
      ;
    </>
  );
}

export default Header;
