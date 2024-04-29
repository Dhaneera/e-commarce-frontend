import { useState ,useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Error from '../src/pages/Error'
import ProductSelectionPage from './pages/ProductSelection'
import Cart from './pages/components/Cart'
import SubCategory from './pages/SubCategory'
import ProductView from '../src/pages/ProductView'
import Men from './pages/Men'
import OrderComplete from './pages/OrderComplete'
import Hanger from './assets/hanger.gif'
import DarkHanger from './assets/DarkHanger.png'
import Order from './pages/Order'
import PageNotFound from '../src/pages/PageNotFound'
import Kids from '../src/pages/Kids'
import Women from '../src/pages/Women'
import Teens from '../src/pages/Teens'


function App() {
  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 700);
  }, [])

  return (
    loading ?
      <div className='w-screen h-screen justify-center items-center flex flex-col gap-8 dark:text-white dark:bg-black'>
        <img src={Hanger} className='dark:hidden' alt='hanger Image' />
        <img src={DarkHanger} className='dark:block hidden' alt='hanger Image dark' />
        <h1 className='text-md font-mulish font-bold'>LOADING CLOTHIFY JUST A SEC</h1>
      </div> :
      (
        
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/productSelect' element={<ProductSelectionPage/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/error404' element={<Error/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/sub' element={<SubCategory/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<ProductView collection="SUMMER COLLECTION" />}></Route>
        <Route path='/mens' element={<Men />}></Route>
        <Route path='/kids' element={<Kids />}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/teens' element={<Teens/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/order/success' element={<OrderComplete />}></Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
      )
  )
}

export default App;