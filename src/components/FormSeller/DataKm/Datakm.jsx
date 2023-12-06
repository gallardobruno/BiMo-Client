import React, { useRef } from 'react';
import '../Style.css';

const DataKm = ({name, onInputChange, onKeyPress, inputRef}) => {
  
    const handleInputChange = () => {
      const inputValue = inputRef.current.value;
      onInputChange(name, inputValue); // Llama a la función onInputChange del padre con el valor del input
    };

    return (
        <div className='f-s'>
            <form>
                <label htmlFor="km">¿Cuantos Km tiene?:</label>
                <br></br>
                <input type="text" placeholder="Ej: 1000" autoComplete="off" required="" name="km" id="km" ref={inputRef} onChange={handleInputChange} onKeyPress={onKeyPress}></input>
            </form>
        </div>
            
    );
  };
  
  export default DataKm

  
   

