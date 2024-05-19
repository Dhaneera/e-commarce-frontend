import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Image from '../assets/MensBanner.png'
import Img from '../assets/im.png'
import Navbar from '../pages/components/Navbar'
import React from "react";
import { useSelector } from 'react-redux'
import Cart from './components/Cart'

const Men = () => {
    const show=useSelector((state)=>state.cart.show);
    const [products, setProducts] = useState([]);
    const nav = useNavigate();
    useEffect(()=>{
        const url="http://localhost:8080/product/get/category/men";
        Axios.get(url).then((res)=>{
            setProducts(res.data)
        })
    },[])

    return (
        <div className=" flex flex-col  dark:bg-black">
            <div className=' fixed w-[100%] h-[5rem] bg-[#FCFCF5] dark:fixed dark:bg-black z-50 '>
                <Navbar/>
            </div>
            <section className=' mt-40 flex flex-col bg-[#fbfcf0] h-max w-screen items-center font-mulish overflow-x-hidden overflow-auto scrollbar-hidden dark:bg-black scroll justify-center'>
                <div className='mt-0 h-72 relative'>
                    <img src={Image} className='h-[100%] w-screen object-cover' alt='Mens image' />
                    <div className={`w-[100%] h-[100%]  mt-[-66%] xl:mt-[-72%] xl:ml-[5%] p-0 max-2xl:mt[-70%] mr-10 fixed ${show===true?`fixed`:`hidden`}`}>
                        <Cart />
                    </div>
                </div>
                <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1 ml-2">
                {products.map((element)=>{
                    return(
                        <div>
                            {console.log(element.id)}
                        <ProductCard product={element} image={Img}/>
                        </div>
                    )
                })}
                
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Men