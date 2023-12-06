import React, { useRef } from 'react';
import '../Style.css';

const DataBrand = ({name, onInputChange, onKeyPress, inputRef}) => {

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    onInputChange(name, inputValue); // Llama a la función onInputChange del padre con el valor del input
  };


  return (
    <div className='f-s'>
      <form> 
        <label htmlFor="brand">¿De qué marca es la moto?:</label>
        <br />
        <input
          type="text"
          placeholder="Ej: Honda"
          autoComplete="off"
          required=""
          name="brand"
          id="brand"
          ref={inputRef} 
          onChange={handleInputChange}
          onKeyPress={onKeyPress}
        />
      </form>
    </div>
  );
};

export default DataBrand;
  //armar archivo style similar para todos los componentes de formseller