import React from 'react';
import { BsImages, BsChatLeftDots } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Register = () => {
  interface FormData {
    username: string;
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="w-2/5 bg-bg-card p-10 rounded text-white ">
      <div className="flex items-center justify-center gap-6">
        <BsChatLeftDots />
        <h1 className="text-center text-4xl font-medium ">Регистрация</h1>
        <BsChatLeftDots />
      </div>

      <form
        action=""
        className="flex flex-col items-start gap-3 mb-8 mt-[50px]"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full p-3 rounded text-black"
          type="text"
          placeholder="имя в чате"
          {...register('username', { required: true })}
        />
        <p className={`mt-1 text-green-500 font-bold bg-black-grey p-2 rounded ${errors.username ? '' : 'hidden'}`}>
          {errors.username && 'Это поле обязательно для заполнения'}
        </p>
        <input
          className="w-full p-3 rounded text-black"
          type="email"
          placeholder="почта"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <p className={`mt-1 text-green-500 font-bold bg-black-grey p-2 rounded ${errors.email ? '' : 'hidden'}`}>
          {errors.email && 'Введите корректный адрес электронной почты'}
        </p>
        <input
          className="w-full p-3 rounded text-black"
          type="password"
          placeholder="пароль"
          {...register('password', { required: true })}
        />
        <p className={`mt-1 text-green-500 font-bold bg-black-grey p-2 rounded ${errors.password ? '' : 'hidden'}`}>
          {errors.password && 'Введите пароль'}
        </p>

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
