import React from 'react';
import SidebarItem from './SidebarItems';
import SidebarImage from './SidebarItems';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <SidebarItem />
        </li>
        <li>
          <SidebarItem />
        </li>
        <li>
          <SidebarItem />
        </li>
        <li>
          <SidebarItem />
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
