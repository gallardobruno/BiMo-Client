import React, { useRef } from 'react';
import '../Style.css';

const DataPrice = ({name, onInputChange, onKeyPress, inputRef}) => {
  
    const handleInputChange = () => {
      const inputValue = inputRef.current.value;
      onInputChange(name, inputValue); // Llama a la función onInputChange del padre con el valor del input
    };

    return (
        <div className='f-s'>
            <form>
                <label htmlFor="price">¿Precio de la moto?:</label>
                <br></br>
                <input type="text" placeholder="Ej: $500000" autoComplete="off" required="" name="price" id="price" ref={inputRef} onChange={handleInputChange} onKeyPress={onKeyPress}></input>
            </form>
        </div>
            
    );
  };
  
  export default DataPrice

