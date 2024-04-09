import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import ProductSelectionPage from './pages/ProductSelectionPage'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/productSelect' element={<ProductSelectionPage/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/error404' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App