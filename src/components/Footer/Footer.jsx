import React from 'react';
import {
  instagram,
  facebook,
  youtube,
  twitter,
} from '../../../src/assets/image/index';

function Footer() {
  return (
    <footer className={'w-[1000px] mx-auto mt-14'}>
      <div className={'flex gap-5'}>
        <img src={facebook} />
        <img src={instagram} />
        <img src={twitter} />
        <img src={youtube} />
      </div>
      <div className={'flex justify-between text-white mt-4 '}>
        <ul>
          <li className={'mb-4 text-textGray'}>Seslendirme ve Alt Yazı</li>
          <li className={'mb-4 text-textGray'}>Medya Merkezi</li>
          <li className={'mb-4 text-textGray'}>Gizlilik</li>
          <li className={'mb-4 text-textGray'}>Bize Ulaşın</li>
          <li className={'mb-4 text-textGray'}>
            <button>Hizmet Kodu</button>
          </li>
        </ul>
        <ul>
          <li className={'mb-4 text-textGray'}>Sesli Betimleme</li>
          <li className={'mb-4 text-textGray'}>Yatırımcı İlişkileri</li>
          <li className={'mb-4 text-textGray'}>Yasal Hükümler</li>
        </ul>
        <ul>
          <li className={'mb-4 text-textGray'}>Yardım Merkezi</li>
          <li className={'mb-4 text-textGray'}>İş İmkanları</li>
          <li className={'mb-4 text-textGray'}>Çerez Tercihleri</li>
        </ul>
        <ul>
          <li className={'mb-4 text-textGray'}>Çerez Tercihleri</li>
          <li className={'mb-4 text-textGray'}>Kullanım Koşulları</li>
          <li className={'mb-4 text-textGray'}>Kurumsal Bilgiler</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
