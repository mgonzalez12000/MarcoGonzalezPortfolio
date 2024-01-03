import React from 'react';

const TitleComponent = ({ title, titleID }) => {
  return (
    <div>
      <div className='titles' id={titleID}>
        <h3 id="leftHeader" className="border-light text-light p-2">{title}</h3>
      </div>
    </div>
  );
};

export default TitleComponent;
