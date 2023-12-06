import React, { useRef } from 'react';
import '../Style.css';

const DataType = ({name, onInputChange, onKeyPress, inputRef}) => {

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    onInputChange(name, inputValue); // Llama a la función onInputChange del padre con el valor del input
  };

  return (
    <div className='f-s'>
      <form>
        <label htmlFor="DataType">¿Qué tipo de moto es?:</label>
        <br />
        <select
          id="DataType"
          name="DataType"
          required=""
          ref={inputRef} 
          onChange={handleInputChange}
          onKeyPress={onKeyPress}
        >
           <option value=" "></option>
          <option value="SCOOTER">SCOOTER</option>
          <option value="MEGASCOOTER">MEGASCOOTER</option>
          <option value="MOTOCROSS">MOTOCROSS</option>
          <option value="ENDURO">ENDURO</option>
          <option value="SUPERMOTARD">SUPERMOTARD</option>
          <option value="TRIAL">TRIAL</option>
          <option value="TRAIL">TRAIL</option>
          <option value="NAKED">NAKED</option>
          <option value="CRUISER">CRUISER</option>
          <option value="CHOPPER">CHOPPER</option>
          <option value="DEPORTIVA">DEPORTIVA</option>
          <option value="SPORT TURISMO">SPORT TURISMO</option>
          <option value="MOTO ELÉCTRICA">MOTO ELÉCTRICA</option>
        </select>
      </form>
    </div>
  );
};

export default DataType;