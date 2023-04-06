import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../src/assets/image/index';
const Auth = () => {
  const navigate = useNavigate();
  const token = false;
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleRegister = (e) => {
    e.preventDefault();
    // window.location.href = '/';
    axios
      .post('https://reqres.in/api/register', data)
      .then((response) => {
        var token = response.data.token;
        localStorage.setItem('token', token);
        console.log('Token:', token);
        if (token.length >= 0) {
          navigate('/');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className={'w-container mx-auto'}>
        <form
          className={'w-[500px] mx-auto shadow-2xl p-5 mt-10'}
          style={{ backgroundColor: 'rgba(255,255,255,0.9) ' }}
          onSubmit={handleRegister}
        >
          <img src={Logo} className={' p-4 block mx-auto'} />
          <label>Ваш Email: eve.holt@reqres.in</label>
          <input
            type="text"
            placeholder={'Введите ваш Email...'}
            className="px-4 py-2 my-4 w-full block mx-auto shadow-xl"
            required={true}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Ваш пароль:</label>
          <input
            type="password"
            placeholder={'Введите ваш пароль...'}
            className="px-4 py-2 mt-4 w-full block my-5  shadow-xl"
            required={true}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button
            className={
              'block border-none px-5 py-2 block mx-auto border bg-red-400 rounded-lg'
            }
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
