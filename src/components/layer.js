import '../index.css';
import React from 'react';



function Layer() {
  return (
    <>
        <div className="layer2" style={{ maxWidth: '100px' }}>
            <img src='vine1.png'/>
        </div> 
        <div className="layer1" style={{ maxWidth: '100px' }}>
            <img src='vine2.png'/>
        </div> 
    </>
  );
}

export default Layer;