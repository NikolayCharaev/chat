import React from 'react';
import Chat from '../Chat';
import Sidebar from '../Sidebar';

const Home = () => {
  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center">
      <div className="border border-black rounded-xl w-4/6 h-4/5 flex flex-row overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
