import React, { useRef } from 'react';
import '../Style.css';

const DataModel = ({name, onInputChange, onKeyPress, inputRef}) => {

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    onInputChange(name, inputValue); // Llama a la función onInputChange del padre con el valor del input
  };

  return (
    <div className='f-s'>
      <form>
        <label htmlFor="model">¿Cuál es el Modelo?:</label>
        <br />
        <input
          type="text"
          placeholder="Ej: Cb 150"
          autoComplete="off"
          required=""
          name="model"
          id="model"
          ref={inputRef} 
          onChange={handleInputChange}
          onKeyPress={onKeyPress}
        />
      </form>
    </div>
  );
};

export default DataModel;