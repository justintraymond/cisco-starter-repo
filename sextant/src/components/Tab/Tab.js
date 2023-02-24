import React, {useState} from 'react';

function Tab({ heading, children }) {
  const [activeTab, setActiveTab] = useState(0);

  //Click event handler
  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="TabNav">
      <div className="tab-headers">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {child.props.heading}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children[activeTab]}
      </div>
    </div>
  );
}

export default Tab;