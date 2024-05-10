import bin from '../../../public/bin.png'
import cartImg from '../../assets/product.png'
import addLight from '../../assets/PlusLight.png'
import addDark from '../../assets/PlusDark.png'
import minusLight from '../../assets/MinusLight.png'
import minusDark from '../../assets/MinusDark.png'
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import axios from 'axios'

function CartItem(props) {
    const { id } = useParams();
    const useNav=useNavigate()
    const[data,setData]=useState({
        id: 0
    });

    // useEffect(()=>{
    //     const url=`http://localhost:8080/cart/get/${id}`
    //     axios.get(url)
    //     .then((res)=>{
    //         setData({
    //             id: res.data.id,
    //         })
    //     })
    //     .catch(error=>useNav('/error404'))
    // },[])




    return (
        <div className='flex mb-3 dark:bg-[#18191b] dark:text-white '>
            <div className='ml-4  w-[30%] dark:bg-[#18191b] dark:text-white' >
                <img src={cartImg} alt="" />
            </div>
            <div className='flex flex-col pr-[20%] dark:bg-[#18191b] dark:text-white '>
                <div className='  flex'>
                    <h2 className='ml-3'>Yellow Sweatshirt</h2>
                    <span className=' pr-5 mr-0 ml-[65%]'> 3500.00</span>
                </div>
                <span className='ml-[10%] mt-3'>xs/Black</span>
                <div className='flex flex-row size-[9%] gap-1 ml-[6%] mt-4 dark:flex dark:flex-row dark:size-[9%] dark:gap-1 dark:ml-[6%] dark:mt-4'>
                    <motion.img whileHover={{ scale: 1.5 }} className=' dark:hidden' src={addLight} alt="" />
                    <motion.img whileHover={{ scale: 1.5 }} className='hidden dark:flex' src={addDark} />
                    <motion.input whileHover={{ scale: 1.5 }} className='w-[4.8rem] pl-8  bg-black text-white ' type="text" />
                    <motion.img whileHover={{ scale: 1.5 }} className='dark:hidden' src={minusLight} alt="" />
                    <motion.img whileHover={{ scale: 1.5 }} className='' src={minusDark} />
                    <motion.img whileHover={{ scale: 1.5 }} className='w-[100%] h-[24px] pb-1' src={bin} />
                </div>
            </div>
        </div>
    )
}

export default CartItem