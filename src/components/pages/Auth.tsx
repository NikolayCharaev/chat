import React from 'react';
import { Link } from 'react-router-dom';
import { TbComet } from 'react-icons/tb';

const Auth = () => {
  return (
    <div className="w-2/5 bg-bg-card p-10 rounded ">
        <div className="flex gap-6 justify-center items-center">
      <TbComet />
      <h1 className="text-center text-4xl font-medium ">Войти в аккаунт</h1>
      <TbComet />
      </div>
      <form action="" className="flex flex-col items-start gap-3 mb-8 mt-[50px]">
        <input className="w-full p-3 rounded text-black" type="text" placeholder="введите логин" />
        <input className="w-full p-3 rounded text-black" type="password" placeholder="введите пароль" />
        <button
          type="submit"
          className="bg-black-blue p-5 rounded  transition hover:bg-button-hover">
          отправить
        </button>
      </form>
      <div className="flex justify-end">
        <p>
          У вас нет аккаунта?{' '}
          <Link className="text-green-500" to="/chat/register">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
