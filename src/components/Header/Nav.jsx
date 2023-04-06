import React from 'react';
import {
  Logo,
  gitBox,
  profileImg,
  search,
  notificationBill,
} from '../../assets/image/index';
import { Link } from 'react-router-dom';

function Nav(props) {
  const cleareToken = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <div className={'bg-mailBG py-7'}>
      <nav className={'flex items-center justify-between w-container mx-auto '}>
        <ul className={'flex gap-5'}>
          <li className={'mr-7'}>
            <img src={Logo} />
          </li>
          <li className={'navText'}>Ana Sayfa</li>
          <li className={'navText'}>Diziler</li>
          <li className={'navText'}>Filmler</li>
          <li className={'navText'}>Yeni ve Popüler</li>
          <li className={'navText'}>Listem</li>
        </ul>
        <ul className={'flex gap-5 items-center'}>
          <li>
            <img src={search} />
          </li>
          <li className={'navText'}>ÇOCUK</li>
          <li>
            <img src={gitBox} />
          </li>
          <li>
            <img src={notificationBill} />
          </li>
          <li onClick={cleareToken}>
            <img src={profileImg} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
