import React, { useEffect, useState } from 'react'
import './style.css'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color,setColor] = useState("#000000")

    function utility(length) {
      return Math.floor(Math.random() * length);

    }

    function handleRandomRgbColor() {
      let r = utility(256);
      let g = utility(256);
      let b = utility(256);

      const rgbColor = `rgb(${r}, ${g}, ${b})`;

     setColor(rgbColor);
    

    }

    function handleRandomHexColor() {
      const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
      let hexColor = '#';
      
      for(let i=0; i < 6; i++) {
        hexColor += hex[utility(hex.length)];

      }
      setColor(hexColor);



        
    }

    useEffect( () => {
      typeOfColor === 'rgb' ? handleRandomRgbColor() : handleRandomHexColor();

    },[typeOfColor])



  return (
    <>



    <div className='container' style={{background:color}}>

      
    <div className="info">
      <h3>{typeOfColor ===  'rgb' ? 'RGB' : 'HEX'}</h3>
      <h2>{color}</h2>
    </div>

        <button  className='colorBtn' onClick={() => setTypeOfColor('hex')} >Create Hex Color</button>
        <button className='colorBtn' onClick={() => setTypeOfColor('rgb')} >Create RGB Color</button>

        <button className='changeBtn' onClick={ typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor }>Generate Color</button>
        <p className='down' >Created with love by Afari Richmond Addo</p>
    </div>

   
    
    
    
    
    
    </>
  )
}

export default RandomColor