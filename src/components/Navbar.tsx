import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between bg-navbar-bg h-14 p-2.5 ">
      <span className="font-bold xl:hidden">Чатик</span>
      <div className="flex gap-6 items-center xl:justify-between  xl:gap-3">
        <img
          className="w-6 h-6 rounded-full bg-navbar-bg object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt=""
        />
        <span>Коля</span>
        <button className="p-2 rounded bg-black-blue transition w-full hover:bg-button-hover">
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Navbar;
