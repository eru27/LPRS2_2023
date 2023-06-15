import React from 'react';
import './jsonComponent.css'
import jsonData from './data.json';


const MyJson = () => {

  return (
      <div className='data'>
        {jsonData.items.map(item => (
          <p className='jsonItem' key={item.id}>{item.name}</p>
          
        ))}

        
      </div>
  );
};

export default MyJson;