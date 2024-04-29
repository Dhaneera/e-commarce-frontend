import React from 'react'
import product from '../assets/product.png'
import primary from '../assets/Ellipse-1.png'
import secondary from '../assets/Ellipse-2.png'
import alter from '../assets/Ellipse-3.png'
import alter_1 from '../assets/Ellipse-4.png'
import Header from './components/Header'

const ProductSelection = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className='flex p-10 m-20 bg-[#F4F4DC] mb-0 max-lg:flex-col max-md:p-3 max-md:m-7'>
                <div className='  w-1/3 max-lg:w-2/3 max-lg:p-5 max-lg:ml-16  max-md:w-2/3 max-md:ml-10 '>
                    <img className=' h-[100%]  ' src={product} alt="" />
                </div>
                <div className=' flex flex-col w-2/3  ml-16 max-lg:w-full max-lg:ml-0 max-lg:mt-5 '>
                    <h1 className=' text-4xl text-black  font-mulish font-extrabold tracking-widest  max-lg:text-2xl max-lg:mt-3  max-md:text-lg max-lg:ml-[20%]'>Yellow SweatShirt</h1>
                    <p className=' mt-5 text-base font-mulish p-5  max-lg:text-xs max-md:text-[8px]'>THIS PRODUCT OFFERS LUXURIOUS, BRUSHED SURFACE WITH AN ADDED SILICONE WASH AND GIVES A PLUSH AND VELVETY HAND FEEL. ITS MADE WITH 100% FRENCH TERRY AND WAS CREATED FOR ALL THE OUTGOING PERSONALITIES OUT THERE!</p>
                    <h3 className='mb-0  text-2xl m-10 tracking-wider font-extralight max-lg:text-lg max-md:text-base max-md:m-5 max-md:mb-0'>LKR 3250.00</h3>
                    <h5 className=' text-sm text-gray-300 ml-5 max-lg:text-xs max-lg:ml-6 max-md:text-[10px] max-md:m-3 max-md:mt-0' >(Shipping calculated at checkout)</h5>
                    <h3 className=' text-lg ml-4 mt-5 max-lg:text max-lg:text-sm max-lg:ml-10 max-md:text-xs max-md:ml-3'>Size  XL</h3>
                    <div className='flex gap-4 mt-5 ml-10 w-[100%] max-lg:w-[100%] max-md:gap-2 max-md:ml-6'>
                        <button className='max-lg:w-[12%] bg-white  text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>XS</button>
                        <button className='max-lg:w-[12%] bg-white  text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600  dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>S</button>
                        <button className='max-lg:w-[12%] bg-white text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>M</button>
                        <button className=' max-lg:w-[12%] bg-white   text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>L</button>
                        <button className='max-lg:w-[12%] bg-white  text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>XL</button>
                    </div>

                    <span className=' text-lg ml-4 mt-5 max-md:text-xs max-md:ml-3'>Color</span>
                    <div className='flex gap-5 mt-5 ml-10 '>
                        <img src={primary} alt="" className=' size-10 max-md:size-7' />
                        <button><img src={secondary} alt="" className=' size-10 max-md:size-7' /></button>
                        <button><img src={alter} alt="" className=' size-10 max-md:size-7' /></button>
                        <button><img src={alter_1} alt="" className=' size-10 max-md:size-7' /></button>
                    </div>

                    <span className=' mt-10 ml-4 max-md:text-xs max-md:ml-3'>In Stock (17)</span>
                    <div className='flex gap-5 p-5 justify-center max-md:gap-3 '>
                        <input className=' size-10  w-24 pl-10' type="number" name="" id="" />
                        <button className=' bg-white text-gray-900  w-[60%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>Add Cart</button>
                    </div>
                </div>
            </div>
            {/* <div className='p-10 m-20 mt-0 border 8 border-red-600 bg-[#F4F4DC] '>
                <h2 className=' font-mulish text-lg ml-5 tracking-widest'>Description</h2>
                <p className=' mt-5 text-sm tracking-wider font-mulish p-5  '>THIS PRODUCT OFFERS LUXURIOUS, BRUSHED SURFACE WITH AN ADDED SILICONE WASH AND GIVES A PLUSH AND VELVETY HAND FEEL. ITS MADE WITH 100% FRENCH TERRY AND WAS CREATED FOR ALL THE OUTGOING PERSONALITIES OUT THERE!</p>
            </div> */}
        </div>
    )
}

export default ProductSelection