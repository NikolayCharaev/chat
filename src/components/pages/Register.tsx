import React, { useRef } from 'react';
import { BsImages, BsChatLeftDots } from 'react-icons/bs';
const Register = () => {
  const ref = useRef<HTMLInputElement>(null);

  function handleInputClick() {
    ref.current?.click();
  }

  const chatIcon = <BsChatLeftDots className='text-5xl text-blue-400'/>
  return (
    <div className="w-2/5 bg-cyan-100 p-10 rounded text-black">
      <div className="flex items-start justify-center gap-6">
        <BsChatLeftDots />
        <h1 className="text-center text-4xl font-medium mb-[50px]">Регистрация</h1>
        <BsChatLeftDots />
      </div>

      <form action="" className="flex flex-col items-start gap-3 mb-8">
        <input className="w-full p-3 rounded text-black" type="text" placeholder="имя в чате" />
        <input className="w-full p-3 rounded text-black" type="email" placeholder="почта" />
        <input className="w-full p-3 rounded text-black" type="password" placeholder="пароль" />

        <BsImages
          onClick={handleInputClick}
          className="text-blue-400  text-5xl my-6 cursor-pointer"
        />
        <input ref={ref} className="w-full p-3 rounded text-black hidden" type="file" />
        <button
          type="submit"
          className="bg-cyan-400 p-5 rounded hover:bg-cyan-300 transition w-full">
          отправить
        </button>
      </form>
      <div className="flex justify-end">
        <p>
          Уже есть аккаунт?{' '}
          <a className="text-blue-500" href="">
            войти
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
