import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="basis-2/4 bg-sidebar-bg">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
