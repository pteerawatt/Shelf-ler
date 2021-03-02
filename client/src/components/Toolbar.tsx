import React from 'react';
import Dropdown from './DropDowns';
import DropDowns from './DropDowns';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="edit-dropdown">
        <Dropdown />
      </div>
      <div className="sort-dropdown">
        <Dropdown />
      </div>
    </div>
  )
}

export default Toolbar;
