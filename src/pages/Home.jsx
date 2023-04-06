import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MiniSwiper from '../components/Swiper/MiniSwiper';
import BigSwiper from '../components/Swiper/BigSwiper';
import NumberSwiper from '../components/Swiper/NumberSwiper';
import Nav from '../components/Header/Nav';

function Home() {
  const [films, setFilms] = useState([]);
  const [counter, setCounter] = useState(1);
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/sing-up';
  }

  useEffect(() => {
    fetch('https://kinobd.ru/api/films')
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.data.slice(0, 10));
      });
  }, []);

  return (
    <div>
      <Nav />
      <Header films={films} />

      <div className={''}>
        <h2
          className={
            'font-medium text-[26px] w-container mx-auto text-white mb-3 mt-4'
          }
        >
          Kemal, İzlemeye Devam Et
        </h2>
        <MiniSwiper films={films} />
      </div>

      <div className={''}>
        <h2
          className={
            'font-medium text-[26px] w-container mx-auto text-white mb-3 mt-4'
          }
        >
          Gündemdekiler
        </h2>
        <MiniSwiper films={films} />
      </div>

      <div>
        <h2
          className={
            'font-medium text-[26px] w-container mx-auto text-white mb-3 mt-4'
          }
        >
          Netflix Orijinal İçerikleri
        </h2>
        <NumberSwiper films={films} />
      </div>

      <div className={''}>
        <h2
          className={
            'font-medium text-[26px] w-container mx-auto text-white mb-3 mt-4'
          }
        >
          Netflix Orijinal İçerikleri
        </h2>
        <BigSwiper films={films} counter={counter} setCounter={setCounter} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
