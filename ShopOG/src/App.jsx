import FiltredProducts from './components/FiltredProducts.jsx'
import Main from './components/Main.jsx'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/filtredProduct/:type' element={<FiltredProducts />}/>
    </Routes>

    </>
  )
}

export default App
