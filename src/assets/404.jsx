import image from './error-404-g31826c587_1280.png'
import './Style404.css'

export default function Page404 () {
  return (
    <div className='e-404'>
      <div><br></br><br></br>
        <img src={image} alt='imágen personas arreglando' className='image-404'/>
      </div>
      <h3 className='h1-404'>La página que estas ingresando no existe o no se encuentra en el servidor<br></br>Por favor chequea la URL o puedes:</h3>
      {/* <Link to='/'>ir a la página principal</Link> */}
    </div>
  )
}