import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importa useSelector desde react-redux
import { actualizarDatos } from '../../store/landingSlice';

function PostBike({ onConfirmation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formulario.inputValues);


  const handleConfirmation = () => {
    // Validar que se haya proporcionado nombre, teléfono y correo electrónico antes de continuar
    dispatch(
      actualizarDatos({
        nombre: nombre || data.nombre, // Si nombre está vacío, usa el valor existente
        telefono: telefono || data.telefono,
        email: email || data.email,
      })
    );
  };

  return (
    <div>
      <h2>Datos cargados:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Teléfono de contacto:
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </label>
        <label>
          Correo electrónico:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={handleConfirmation}>Confirmar</button>
      </div>
    </div>
  );
}

export default PostBike;
