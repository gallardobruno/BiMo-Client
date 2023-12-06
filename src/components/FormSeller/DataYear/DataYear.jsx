import React, { useRef } from 'react';
import '../Style.css';

const DataYear = ({name, onInputChange, onKeyPress, inputRef}) => {
  
    const handleInputChange = () => {
      const inputValue = inputRef.current.value;
      onInputChange(name, inputValue); // Llama a la función onInputChange del padre con el valor del input
    };   
  
    return (
        <div className='f-s'>
            <form>
                <label htmlFor="year">¿De que año es?:</label>
                <br></br>
                <input type="text" placeholder="Ej: 2020" autoComplete="off" required="" name="year" id="year"  ref={inputRef} onChange={handleInputChange} onKeyPress={onKeyPress}></input>
            </form>
        </div>
            
    );
  };
  
  export default DataYear



