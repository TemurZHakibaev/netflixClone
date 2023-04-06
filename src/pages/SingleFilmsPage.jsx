import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../settings/BASEURL';
import { Link, useParams } from 'react-router-dom';
import { star } from '../../src/assets/image/index';
import MiniSwiper from '../components/Swiper/MiniSwiper';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Header/Nav';

function SingleFilmsPage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch('https://kinobd.ru/api/films')
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.data.slice(10, 17));
      });
  }, []);

  const [film, setFilm] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(BASE_URL + '/' + params.id)
      .then((res) => res.json())
      .then((data) => {
        setFilm(data);
        console.log(data);
      });
  }, []);

  const [person, setPerson] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + '/' + params.id);
        const json = await response.json();
        const films = json;
        setPerson(films.persons);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + '/' + params.id);
        const json = await response.json();
        const films = json;
        setGenres(films.genres);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div
        className={'text-white bg-repeat w-[1600px] mx-auto py-8 '}
        style={{ backgroundImage: `url(${film.big_poster})` }}
      >
        <div className={'w-container mx-auto mb-40'}>
          <Link className={'inline-block'} to="/">
            <p className={'pt-11 pb-14 font-medium text-titleSize'}>
              Вернуться домой
            </p>
          </Link>

          <div>
            <ul className={'flex gap-2 font-medium'}>
              {genres.map((item, i) => (
                <>
                  <li key={i}>{item.name_ru}</li>
                  <span>•</span>
                </>
              ))}
            </ul>
            <p className={'text-bigTitleSize font-bold '}>
              {film.name_russian}
            </p>
            <div
              className={
                'border border-white px-4 py-1 rounded-full items-center inline-block mb-5'
              }
            >
              {film.age_restriction}+
            </div>
            <div className={'flex gap-4 items-center mb-14'}>
              <div className={'flex items-center gap-2'}>
                <img src={star} />
                <p className={'font-semibold'}> {film.rating_imdb}</p>
              </div>
              <p>{film.year}</p>
            </div>
            <p className={'font-medium mb-14'}>{film.description}</p>
            <div className={'flex'}>
              <p className={'text-titleGray'}>B главной роли: </p>
              <ul className={'flex gap-1'}>
                {person?.map((item, i) => (
                  <li className={'font-semibold'} key={i}>
                    {item.name_russian}
                  </li>
                ))}
              </ul>
            </div>
            <div className={'flex gap-5 mt-14 pb-10'}>
              <button
                className={
                  'py-4 px-6 bg-[#E50914] text-white border border-red-600'
                }
              >
                Watch Season 3
              </button>
              <button
                className={'text-white border border-white bg-none py-4 px-6'}
              >
                All Seasons
              </button>
            </div>
          </div>
        </div>
      </div>
      <MiniSwiper films={films} />
      <Footer />
    </>
  );
}
export default SingleFilmsPage;
