import React from 'react';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { FiUserPlus } from 'react-icons/fi';
import { RiMoreFill } from 'react-icons/ri';
import Input from './Input';

import Messages from './Messages';

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="bg-chat-bg basis-3/4">
      <div className="flex justify-between items-center p-4 bg-chat-header">
        <span className="font-medium">Коля</span>
        <div className="flex gap-5 text-2xl ">
          <AiOutlineVideoCamera className="cursor-pointer hover:text-green-400" />
          <FiUserPlus className="cursor-pointer hover:text-green-400" />
          <RiMoreFill className="cursor-pointer hover:text-green-400" />
        </div>
      </div>
      <div className="h-full">
        <Messages />
        <Input />
      </div>
    </div>
  );
};

export default Chat;
