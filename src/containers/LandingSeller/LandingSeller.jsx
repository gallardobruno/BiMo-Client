import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Importa useDispatch y useSelector
import { DataType, DataBrand, DataModel, DataYear, DataKm, DataPrice } from '../../components/index';
import { actualizarDatos } from '../../store/landingSlice'; // Importa la acción que creaste
import './Style.css';

function LandingSeller({ companyName = "Moto-Market" }) {
  const dispatch = useDispatch(); // Obtén la función dispatch
  const inputValues = useSelector((state) => state.formulario.inputValues);
  const inputRef = useRef(null); // Referencia para el campo de entrada
  const [formularioActual, setFormularioActual] = useState(0);
  const [ocultarSeller, setOcultarSeller] = useState(true);
  const [ocultarButton, setOcultarButton] = useState(false);
  const [formularioCompletado, setFormularioCompletado] = useState(false); // Nuevo estado para controlar el formulario completado
  const navigate = useNavigate();

  const handleContinuar = () => {
    setOcultarSeller(false);
    setOcultarButton(true);
    setFormularioActual(formularioActual + 1);
  };

  const handleInputChange = (name, value) => {
    // Actualiza el estado global a través de la acción actualizarDatos
    dispatch(actualizarDatos({ 
        [name]: value,
     }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormularioActual(formularioActual + 1);
    if (formularioActual === 6) {
      console.log('Formulario enviado:', inputValues);
      // Reinicia el formulario para comenzar de nuevo
      dispatch(actualizarDatos(inputValues));
      setFormularioActual(0);
      setOcultarSeller(true);
      setOcultarButton(false);
      // Qué puedes hacer una vez finalizado el proceso de carga de datos, usar setFormularioCompletado para verificar si se completo y generar alguna accion
      setFormularioCompletado(true);
      navigate('/post');
    }
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e); // Llama a la función handleSubmit cuando se presiona Enter
    }
  };

  return (
    <div className='s-welcome'>
      {ocultarSeller && (
        <div>
          <div>
            <h1>Bienvenido a {companyName}</h1>
            <h3>Publicá tu moto, es gratis y sin vueltas</h3>
            {/* ver incorporacion de props Y FUNCIONES en minuto 1:12:58 */}
          </div>
          <br></br>
          <div>
            <Link to='/'>Volver a Home</Link><br></br><br></br>
            <button className='s-continue-button' onClick={handleContinuar}>Continuar</button>
          </div>
        </div>
      )}
      <pre>{JSON.stringify(inputValues, null, 2)}</pre>
      <div>
        {formularioActual == 1 && <DataType name='Tipo de Moto' onInputChange={handleInputChange} onKeyPress={handleKeyPress} inputRef={inputRef} />}
        {formularioActual == 2 && <DataBrand name='Marca' onInputChange={handleInputChange} onKeyPress={handleKeyPress} inputRef={inputRef} />}
        {formularioActual == 3 && <DataModel name='Modelo' onInputChange={handleInputChange} onKeyPress={handleKeyPress} inputRef={inputRef} />}
        {formularioActual == 4 && <DataYear name='Año' onInputChange={handleInputChange} onKeyPress={handleKeyPress} inputRef={inputRef} />}
        {formularioActual == 5 && <DataKm name='km' onInputChange={handleInputChange} onKeyPress={handleKeyPress} inputRef={inputRef} />}
        {formularioActual == 6 && <DataPrice name='Precio' onInputChange={handleInputChange} onKeyPress={handleKeyPress} inputRef={inputRef} />}
        {ocultarButton && (
          <div>
            {formularioActual <= 6 && (
              <button onClick={handleSubmit}>Enviar</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingSeller;
