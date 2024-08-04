import FiltredProducts from './components/FiltredProducts.jsx'
import Main from './components/Main.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import Nav from './components/NavBar/Nav.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login/Login.jsx'
import NotFound from './components/NotFound.jsx'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const userState = useSelector(state => state.auth.user)
  const { authUser } = userState
  console.log(authUser)
  console.log(userState)

  const navigate = useNavigate()
  useEffect(() => {
    if (!authUser) {
      navigate('/')
    }
  }, [authUser])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={authUser ? <Main /> : <Login userState={userState} />} />
        <Route path='/filtredProduct/:type' element={<FiltredProducts />} />
        <Route path='/filtredProduct/:type/:id' element={<ProductDetails />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
