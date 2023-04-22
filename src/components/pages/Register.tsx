import React, { useRef } from 'react';
import { BsImages, BsChatLeftDots } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const Register = () => {
  const ref = useRef<HTMLInputElement>(null);

  function handleInputClick() {
    ref.current?.click();
  }

  const chatIcon = <BsChatLeftDots className="text-5xl text-blue-400" />;
  return (
    <div className="w-2/5 bg-black-grey p-10 rounded text-white ">
      <div className="flex items-center justify-center gap-6">
        <BsChatLeftDots />
        <h1 className="text-center text-4xl font-medium ">Регистрация</h1>
        <BsChatLeftDots />
      </div>

      <form action="" className="flex flex-col items-start gap-3 mb-8 mt-[50px]">
        <input className="w-full p-3 rounded " type="text" placeholder="имя в чате" />
        <input className="w-full p-3 rounded " type="email" placeholder="почта" />
        <input className="w-full p-3 rounded " type="password" placeholder="пароль" />

        <BsImages
          onClick={handleInputClick}
          className="text-blue-400  text-5xl my-6 cursor-pointer"
        />
        <input ref={ref} className="w-full p-3 rounded  hidden" type="file" />
        <button
          type="submit"
          className="p-5 rounded bg-black-blue transition w-full hover:bg-button-hover">
          отправить
        </button>
      </form>
      <div className="flex justify-end">
        <p>
          Уже есть аккаунт?{' '}
          <Link className="text-blue-500" to="/chat/auth">
            войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
