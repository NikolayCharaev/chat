import React from 'react';
import { BiImageAlt } from 'react-icons/bi';
import { GrAttachment } from 'react-icons/gr';
type Props = {};

const Input = (props: Props) => {
  return (
    <div className=" bg-input-bg px-2 py-6 flex justify-between gap-5">
      <input
        type="text"
        className="w-full bg-transparent placeholder:text-blue-300 outline-none "
        placeholder="текст сообщения"
      />
      <div className="flex gap-2 items-center text-2xl">
        <GrAttachment className="cursor-pointer hover:text-green-400" />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <BiImageAlt className="cursor-pointer hover:text-green-400" />
        </label>
        <button className="text-sm p-2 rounded bg-black-blue transition w-full hover:bg-button-hover">
          отправить
        </button>
      </div>
    </div>
  );
};

export default Input;
