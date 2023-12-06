import React, { useRef } from 'react';
import './Style.css'

export const TestChild = ({name, onInputChange}) => {

  const inputRef = useRef(null);

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    onInputChange(name, inputValue); // Llama a la función onInputChange del padre con el valor del input
  };

  return (
    <div className='test child'>
      <i>este es el componente hijo</i>
      <form>
        <input type='text' ref={inputRef} onChange={handleInputChange}/>
        <button>Poner Nombre</button>
      </form>
      Hola, {name}!!
    </div>
  )
};


// 1:38:56