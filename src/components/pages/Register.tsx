import React from 'react';
import { BsImages, BsChatLeftDots } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit } = useForm();

  interface FormData {
    username: string;
    email: string;
    password: string;
  }

  return (
    <div className="w-2/5 bg-bg-card p-10 rounded text-white ">
      <div className="flex items-center justify-center gap-6">
        <BsChatLeftDots />
        <h1 className="text-center text-4xl font-medium ">Регистрация</h1>
        <BsChatLeftDots />
      </div>

      <form action="" className="flex flex-col items-start gap-3 mb-8 mt-[50px]">
        <input className="w-full p-3 rounded text-black" type="text" placeholder="имя в чате" />
        <input className="w-full p-3 rounded text-black" type="email" placeholder="почта" />
        <input className="w-full p-3 rounded text-black" type="password" placeholder="пароль" />

        <input className="hidden" type="file" id="file" />
        <label htmlFor="file">
          <BsImages className="text-blue-400  text-5xl my-6 cursor-pointer" />
        </label>
        <button
          type="submit"
          className="p-5 rounded bg-black-blue transition w-full hover:bg-button-hover">
          отправить
        </button>
      </form>
      <div className="flex justify-end">
        <p>
          Уже есть аккаунт?{' '}
          <Link className="text-green-500" to="/chat/auth">
            войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
