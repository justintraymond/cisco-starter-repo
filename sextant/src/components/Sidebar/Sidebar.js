import React, { useState } from 'react';

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={handleToggle}>Toggle Sidebar</button>
      <div className="sidebar-content">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;