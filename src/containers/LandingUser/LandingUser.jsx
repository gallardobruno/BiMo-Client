import { Link } from 'react-router-dom';
import './Style.css';
import { useDispatch, useSelector } from 'react-redux';
import { guardarMiNombre } from '../../store/misSlice';

function LandingUser({companyName}) {
    const dispatch = useDispatch();
    const miNombreAhora=useSelector(state => state.unValor.miNombre)
    const modificar=()=>{
        dispatch(guardarMiNombre('Bruno Gallardo'))
    }
    
    return (
        <div className='u-welcome'>
            <div>
                <h1>Bienvenido a {companyName}</h1>
                <h3>Buscá tu moto de la forma mas segura</h3>
                {/* ver incorporacion de props Y FUNCIONES en minuto 1:12:58 */}
            </div>
            <br></br>
            <div>
                <Link to='/seller'>Quiero Vender</Link><br></br><br></br>
                <button className='u-continue-button'>Ya se que moto quiero</button>
                <button className='u-continue-button'>Quiero ver Opciones</button>
                <br/>
                <br/>
                <br/>
                <h1> {miNombreAhora} </h1>
                <button onClick={modificar}>Modificar miNombre</button>
            </div>
        </div>
     

    )
  }
  
  export default LandingUser