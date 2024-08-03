import FiltredProducts from './components/FiltredProducts.jsx'
import Main from './components/Main.jsx'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import Nav from './components/NavBar/Nav.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login/Login.jsx'
import NotFound from './components/NotFound.jsx'

function App() {



  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/filtredProduct/:type' element={<FiltredProducts />} />
        <Route path='/filtredProduct/:type/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
