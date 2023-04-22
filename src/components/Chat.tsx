import React from 'react';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { FiUserPlus } from 'react-icons/fi';
import { RiMoreFill } from 'react-icons/ri';

import Messages from './Messages'

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="bg-chat-bg">
      <div className="flex justify-between items-center p-4 bg-chat-header">
        <span className='font-medium'>Женя</span>
        <div className="flex gap-5 text-2xl ">
          <AiOutlineVideoCamera className="cursor-pointer hover:text-green-400" />
          <FiUserPlus className="cursor-pointer hover:text-green-400" />
          <RiMoreFill className="cursor-pointer hover:text-green-400" />
        </div>
      </div>
      Chat
      <div className="">
        <Messages/>
      </div>
    </div>
  );
};

export default Chat;
