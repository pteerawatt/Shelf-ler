import React from 'react';
import SidebarItem from './SidebarItems';
import SidebarImage from './SidebarItems';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <SidebarItem />
      </div>
    </div>
  )
}

export default Sidebar;
