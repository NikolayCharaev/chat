import React from 'react';

type Props = {};

const Chats = (props: Props) => {
  return (
    <>
      <div className="flex gap-3 items-center cursor-pointer hover:bg-search-bg p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt=""
          className="w-12 h-12 rounded-full bg-slate-500 object-cover"
        />
        <div>
          <span className="font-medium">Коля</span>
          <p className="font-extralight">Последнее сообщение</p>
        </div>
      </div>

      <div className="flex gap-3 items-center cursor-pointer hover:bg-search-bg p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt=""
          className="w-12 h-12 rounded-full bg-slate-500 object-cover"
        />
        <div>
          <span className="font-medium">Коля</span>
          <p className="font-extralight">Последнее сообщение</p>
        </div>
      </div>

      <div className="flex gap-3 items-center cursor-pointer hover:bg-search-bg p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt=""
          className="w-12 h-12 rounded-full bg-slate-500 object-cover"
        />
        <div>
          <span className="font-medium">Коля</span>
          <p className="font-extralight">Последнее сообщение</p>
        </div>
      </div>
    </>
  );
};

export default Chats;
