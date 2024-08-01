import FiltredProducts from './components/FiltredProducts.jsx'
import Main from './components/Main.jsx'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import Nav from './components/NavBar/Nav.jsx'

function App() {



  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/filtredProduct/:type' element={<FiltredProducts />} />
        <Route path='/filtredProduct/:type/:id' element={<ProductDetails />} />
      </Routes>

    </>
  )
}

export default App
