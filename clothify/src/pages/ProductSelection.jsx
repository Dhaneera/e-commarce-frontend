import product from '../assets/product.png'
import primary from '../assets/Ellipse-1.png'
import secondary from '../assets/Ellipse-2.png'
import alter from '../assets/Ellipse-3.png'
import alter_1 from '../assets/Ellipse-4.png'
import Header from './components/Header'
import plus from '../assets/Max from cloth.png'
import minus from '../assets/Clothify Min.png'
import React, { useEffect } from "react";
import { motion } from 'framer-motion'
import addDark from '../assets/PlusLight.png'
import addDarkMinus from '../assets/MinusLight.png'

const ProductSelection = () => {
    const [count, setCount] = React.useState(1)
    const [isSelectSize, setSelectSize] = React.useState(null)
    const [isSelectColor, setIsSelectColor] = React.useState(null)
    const [cartItem, setCartItem] = React.useState([])
    const [errorMessage, setErrorMessage] = React.useState("")

    const addCart = () => {
        if (!isSelectColor && !isSelectSize) {
            setErrorMessage("choose options to proceed")

            setIsSelectColor(null);
            setSelectSize(null);

        } else if (!isSelectColor && isSelectSize) {
            setErrorMessage("please choose color")
            setIsSelectColor(null)
        } else if (!isSelectSize && isSelectColor) {
            setErrorMessage("please choose size")
            setSelectSize(null);
        } else {
            const newItem = {
                colorName: isSelectColor,
                preferSize: isSelectSize
            }
            setCartItem([...cartItem, newItem])
            setErrorMessage("")
        }
    }

    const toggleColor = (colorName) => {
        setIsSelectColor((prevIsSelectColor) => {
            return prevIsSelectColor === colorName ? null : colorName
        })
    }


    function add(params) {
        setCount(prevCount => prevCount + 1)
    }
    console.log(count);

    function sub(params) {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    }
    console.log(count)


    const toggleSize = (preferSize) => {
        setSelectSize((prevIsisSelectSizeSize) => {
            return prevIsisSelectSizeSize === preferSize ? null : preferSize
        })
    }

    useEffect(() => {
        console.log("", isSelectSize);
    }, [isSelectSize])

    useEffect(() => {
        console.log("", isSelectColor);
    }, [isSelectColor])




    return (
        <div className=' dark:bg-black  p-0 mt-0' >
            <div className='mt-0 p-0'>
                <Header />
            </div>

            <div className='flex p-20  m-20 bg-[#F4F4DC]  max-lg:flex-col max-md:p-3 max-md:m-7  mb-20  dark:bg-[#18191b] dark:text-white rounded-xl lg:p-12 '>
                <div className=' w-1/3 max-lg:w-2/3 max-lg:p-5 max-lg:ml-16    max-md:ml-10 lg:w-2/3 flex '>
                    <motion.img whileHover={{ scale: 1.15 }} className=' h-[100%]  object-cover  ' src={product} alt="selected product image" />
                </div>
                <div className=' max-xl:ml-14 flex flex-col w-2/3  ml-16 max-lg:w-full max-lg:ml-0 max-lg:mt-5 max-md:p-2   '>
                    <h1 className=' max-xl:text-xl text-4xl text-black  font-mulish font-extrabold tracking-widest  max-lg:text-2xl max-lg:mt-3  max-md:text-lg max-lg:ml-[20%] dark:text-white'>Yellow SweatShirt</h1>
                    <p className=' max-xl:text-xs mt-5 text-base font-mulish p-5  max-lg:text-xs max-md:text-[8px]'>THIS PRODUCT OFFERS LUXURIOUS, BRUSHED SURFACE WITH AN ADDED SILICONE WASH AND GIVES A PLUSH AND VELVETY HAND FEEL. ITS MADE WITH 100% FRENCH TERRY AND WAS CREATED FOR ALL THE OUTGOING PERSONALITIES OUT THERE!</p>
                    <h3 className='mb-0 max-xl:text-[20px]  text-2xl m-10 tracking-wider font-extralight max-lg:text-lg max-md:text-base max-md:m-5 max-md:mb-0'>LKR 3250.00</h3>
                    <h5 className=' text-sm text-gray-300 ml-5 max-lg:text-xs max-lg:ml-6 max-md:text-[10px] max-md:m-3 max-md:mt-0' >(Shipping calculated at checkout)</h5>
                    <h3 className=' max-xl:text-base text-lg ml-4 mt-5 max-lg:text max-lg:text-sm max-lg:ml-10 max-md:text-xs max-md:ml-3'>Size </h3>

                    <div className=' max-md:ml-3  flex gap-4 mt-5 ml-1 max-md:gap-2 '>
                        <motion.button whileHover={{ scale: 1.15 }} className={` max-sm:w-[20%]  max-md:border max-md:rounded-none hover:text-white border-gray-300 focus:outline-none hover:bg-black  font-medium rounded-lg text-sm w-[10%] py-2.5 me-2 mb-2 ${isSelectSize === "button1" ? "  bg-black border 2 border-white text-white" : " bg-slate-50 text-slate-950"}`} onClick={() => toggleSize("button1")}>XS</motion.button>
                        <motion.button whileHover={{ scale: 1.15 }} className={`max-lg:w-[12%] max-sm:w-[20%]  max-md:border max-md:rounded-none  hover:text-white border-gray-300 focus:outline-none hover:bg-black  font-medium rounded-lg text-sm w-[10%] py-2.5 me-2 mb-2 ${isSelectSize === "button2" ? "  bg-black border 2 border-white text-white" : " bg-slate-50 text-slate-950"}`} onClick={() => toggleSize("button2")}>S</motion.button>
                        <motion.button whileHover={{ scale: 1.15 }} className={`max-lg:w-[12%] max-sm:w-[20%]  max-md:border max-md:rounded-none hover:text-white border-gray-300 focus:outline-none hover:bg-black  font-medium rounded-lg text-sm w-[10%] py-2.5 me-2 mb-2 ${isSelectSize === "button3" ? "  bg-black border 2 border-white text-white" : " bg-slate-50 text-slate-950"}`} onClick={() => toggleSize("button3")}>M</motion.button>
                        <motion.button whileHover={{ scale: 1.15 }} className={`max-lg:w-[12%] max-sm:w-[20%]  max-md:border max-md:rounded-none  hover:text-white border-gray-300 focus:outline-none hover:bg-black  font-medium rounded-lg text-sm w-[10%] py-2.5 me-2 mb-2 ${isSelectSize === "button4" ? "  bg-black border 2 border-white text-white" : " bg-slate-50 text-slate-950"}`} onClick={() => toggleSize("button4")}>L</motion.button>
                        <motion.button whileHover={{ scale: 1.15 }} className={`max-lg:w-[12%]  max-sm:w-[20%]  max-md:border max-md:rounded-none hover:text-white border-gray-300 focus:outline-none hover:bg-black  font-medium rounded-lg text-sm w-[10%] py-2.5 me-2 mb-2 ${isSelectSize === "button5" ? "  bg-black border 2 border-white text-white" : " bg-slate-50 text-slate-950"}`} onClick={() => toggleSize("button5")}>XL</motion.button>
                    </div>

                    <span className=' max-xl:text-base text-lg ml-4 mt-5 max-md:text-xs max-md:ml-3'>Color</span>
                    <div className='flex gap-5 mt-5 ml-10 '>
                        <motion.img whileHover={{ scale: 1.15 }} src={primary} alt="color palate first color" className={` size-10 max-md:size-7  hover:border  hover:ring-4 ring-black   rounded-full border-white ${isSelectColor === "primary" ? "border ring-4 ring-slate-950 rounded-full" : ""}`} onClick={() => toggleColor("primary")} />
                        <motion.img whileHover={{ scale: 1.15 }} src={secondary} alt="color palate first color" className={` size-10 max-md:size-7 hover:border  hover:ring-4 ring-green-500   rounded-full border-white   ${isSelectColor === "secondary" ? " border-2 ring-4  ring-green-500 rounded-full" : ""}`} onClick={() => toggleColor("secondary")} />
                        <motion.img whileHover={{ scale: 1.15 }} src={alter} alt="color palate first color" className={` size-10 max-md:size-7  hover:border  hover:ring-4 ring-amber-500   rounded-full border-white   ${isSelectColor === "alter" ? "border-2 ring-4  ring-amber-500 rounded-full" : ""}`} onClick={() => toggleColor("alter")} />
                        <motion.img whileHover={{ scale: 1.15 }} src={alter_1} alt="color palate first color" className={` size-10 max-md:size-7  hover:border  hover:ring-4  ring-red-500  rounded-full border-white   ${isSelectColor === "alter_1" ? "border-2 ring-4  ring-red-500 rounded-full" : ""}`} onClick={() => toggleColor("alter_1")} />

                    </div>


                    <div className='flex' >
                        <span className=' mt-10 ml-4 max-md:text-xs max-md:ml-3'>In Stock (*)</span>
                        {errorMessage && <h3 className='mx-12 mb-3  flex justify-center py-3 text-red-800 bg-red-100 rounded-md w-[55%] max-xl:hidden mt-10 ml-[20%] text-sm'>{errorMessage}</h3>}
                    </div>
                    {errorMessage && <h3 className='px-3  truncate  flex justify-center py-3 text-red-800 bg-red-100 rounded-md  mt-10 ml-[8%] text-xs xl:hidden'>{errorMessage}</h3>}


                    <div className='flex  p-5 justify-center max-md:gap-3 gap-2 max-md:hidden '>

                        <motion.img whileHover={{ scale: 1.15 }} className=' size-10  hover:size-11 border-none  dark:hidden' onClick={add} src={plus} alt="" />
                        <motion.img whileHover={{ scale: 1.15 }} className=' size-10  hover:size-11 border-none hidden dark:flex' onClick={add} src={addDark} alt="" />
                        <span className='size-10  w-14 text-lg  p-2 ml-1  bg-white pl-5 pb-9 dark:text-white dark:bg-black'>{count}</span>
                        <motion.img whileHover={{ scale: 1.15 }} className=' size-10  hover:size-11 dark:hidden' onClick={sub} src={minus} alt="" />
                        <motion.img whileHover={{ scale: 1.15 }} className=' size-10  hover:size-11 border-none hidden dark:flex' onClick={sub} src={addDarkMinus} alt="" />
                        <motion.button whileHover={{ scale: 1.05 }} className=' ml-4 bg-white text-gray-900  w-[60%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={addCart}>Add Cart</motion.button>
                    </div>
                    <div className='  max-md:gap-3 gap-2 flex mt-5 justify-center  lg:hidden md:hidden 2xl:hidden  ' >
                        <motion.img whileHover={{ scale: 1.15 }} className=' size-8  hover:size-9 border-none  dark:hidden' onClick={add} src={plus} alt="" />
                        <motion.img whileHover={{ scale: 1.15 }} className=' size-8  hover:size-9 border-none hidden dark:flex' onClick={add} src={addDark} alt="" />
                        <span className=' size-2  w-14 text-sm  pt-2  ml-1  bg-white pl-5 pb-6 dark:text-white dark:bg-black'>{count}</span>
                        <motion.img whileHover={{ scale: 1.15 }} className=' size-8  hover:size-9 dark:hidden' onClick={sub} src={minus} alt="" />
                        <motion.img whileHover={{ scale: 1.15 }} className=' size-8  hover:size-9 border-none hidden dark:flex' onClick={sub} src={addDarkMinus} alt="" />
                    </div>
                    <div className='mt-5 ml-5 md:hidden'>
                        <motion.button whileHover={{ scale: 1.05 }} className='  bg-white text-gray-900  w-[90%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={addCart}>Add Cart</motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSelection