import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats'


type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="basis-2/4 bg-sidebar-bg">
      <Navbar />
      <Search />
      <Chats/>
    </div>
  );
};

export default Sidebar;
