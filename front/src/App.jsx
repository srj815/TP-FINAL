import React, {useState} from 'react'
import './App.css'
import Products from './screens/Products'
import ProductDetail from './screens/ProductDetail'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  return (
    <>



      <nav className='navBar'>
      <NavLink className='navLink' to='/'><img className='logo' src="" alt="Fitness San Martin" /></NavLink>
      </nav>


      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:pid' element={<ProductDetail/>}/>
      </Routes>

      {loading && (
        <div className='divPadre'>
          <span className='flip-square'></span>
        </div>
      )}

      <Link className='btn-wsp' to="https://api.whatsapp.com/send?phone=1126300464" target='_black'><i class="bi bi-whatsapp"></i></Link> 

      <footer className='footerBar'>
        <div className='lrpmqlp'>
        <div className='lrpm'>
        <div className='lpm'>
        <div className='zeroF'>
          <h2>Categorías</h2>
          <div className='zeroF-nav'>
          <NavLink className='navLink2' to='/'>Home</NavLink>
          <NavLink className='navLink2' to='/cart'>Carrito</NavLink>
          <NavLink className='navLink2' to='/contact/'>Contacto</NavLink>
          </div>
          </div>
        <div className='firstF'>
          <h2>Sigamos conectados</h2>
          <div className='firstF-imgs'>
            <Link to="https://instagram.com" target='_black'><i className="bi bi-instagram"></i></Link>
            <Link to="https://facebook.com" target='_black'><i className="bi bi-facebook"></i></Link>
            <Link to="https://tiktok.com" target='_black'><i className="bi bi-tiktok"></i></Link>
          </div>
          </div>
        </div>
        <div className='secondF'>
          <h2>Medios de pago</h2>
          <div className='secondF-imgs'>
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png" alt="" />
            <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png" alt="" />
          </div>
        </div>
        </div>
        <div className='thirdF'>
          <h2>Medios de envío</h2>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/oca@2x.png" alt="Oca" />
        </div>
        </div>
        <div className='lastF'>
          <h3>Copyright Fitness San Martin - 2023. Todos los derechos reservados.</h3>
        </div>
        
      </footer>
  
    </>
  )
}

export default App