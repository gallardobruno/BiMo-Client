import React, {useState} from 'react';
import { TestChild } from './TestChild';
import './Style.css'

export const TestComponent = () => {
    const [inputValues, setInputValue] = useState({});

    const handleInputChange = (name, value) => {
      setInputValue((prevInputValues) => ({
        ...prevInputValues,
        [name]: value,
      })); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar cualquier acción adicional con el valor del input
        console.log('Valor del input enviado:', inputValues);
      };

    return (
        <div className='test'>
            <div>
                <h1>BIENVENIDO A REACT</h1>
                <h3>página de pruebas y test</h3>
                <TestChild name='Bruno Gallardo' onInputChange={handleInputChange}/>
                <TestChild name='Cristian Cordoba' onInputChange={handleInputChange}/>
            </div>
            <br></br>
            <br></br>
            <div>
            <p>Valor del input en el componente padre:</p>
            <pre>{JSON.stringify(inputValues, null, 2)}</pre>
            </div>
            <form onSubmit={handleSubmit}>
            <button type="submit">Enviar Formulario</button>
            </form>
        </div>
    )
  }  
  
