import React from 'react';

function TabPanel({ heading, children }) {
  return (
    <div className="tab-panel">
      <h2>{heading}</h2>
      <div className="tab-panel-content">
        {children}
      </div>
    </div>
  );
}

export default TabPanel