import React,{useState} from 'react';

type Props = {};

const Message = (props: Props) => {
  const [ownerMessage, setOwnerMessage] = useState<boolean>(false)
  return (
    <div className={`flex gap-5 ${ownerMessage && 'flex-row-reverse'}`}>
      <div className="mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakN75XE1j17LhfzEvGhyHVIajwhwylO9c_S_GLYo&s"
          alt=""
          className='w-12 h-12 object-cover rounded-full'
        />
        <span className='text-gray-400'>только что</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-3"> 
        <p className='bg-white text-black rounded p-4'>Привет</p>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakN75XE1j17LhfzEvGhyHVIajwhwylO9c_S_GLYo&s" alt="" className='w-5/5 block'/> */}
      </div>
    </div>
  );
};

export default Message;
