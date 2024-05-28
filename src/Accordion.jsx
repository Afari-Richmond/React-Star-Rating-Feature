import React, { useState } from 'react';
import accordionData from './data';
import './style.css'

const Accordion = () => {
  const [selected,setSelected] = useState(null);
  function handleSingleSelection(getCurrentId) {
  
    setSelected(getCurrentId === selected ? null : getCurrentId);
    
  }




  return (
    <>
      <div className="wrapper">
        <div className="accordion">  
          {accordionData.length > 0 ? (
            accordionData.slice(0,4).map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div  onClick={() => handleSingleSelection(dataItem.id)} className="title">
                  <h3>{dataItem.question}</h3>
                </div>
                <span>+</span>
                {selected === dataItem.id ?
                <div className="answer">
                  {dataItem.answer}
                </div>
                
                : null}
                
              </div>
            ))
          ) : (
            'No data Found'
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
