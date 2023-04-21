import React from 'react';

const Auth = () => {
  return (
    <div className="w-2/5 bg-cyan-100 p-10 rounded text-black">
      <h1 className="text-center text-4xl font-medium mb-[50px]">Войти в аккаунт</h1>
      <form action="" className="flex flex-col items-start gap-3 mb-8">
        <input className="w-full p-3 rounded text-black" type="text" placeholder="введите логин" />
        <input
          className="w-full p-3 rounded text-black"
          type="password"
          placeholder="введите пароль"
        />
        <button type="submit" className="bg-cyan-400 p-5 rounded hover:bg-cyan-300 transition">
          отправить
        </button>
      </form>
      <div className="flex justify-end">
        <p>
          У вас нет аккаунта?
          <a className="text-blue-500" href="">
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
