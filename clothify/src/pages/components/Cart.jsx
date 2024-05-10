import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItem from './CartItem'

const Cart = () => {


    return (
        <div className={'flex-col ml-[58%] max-lg:hidden lg:ml-[39%] lg:mt-10  lg:w-[58%] max-xl:w-[40%]   items-end  '}>
            <div className='flex flex-col border-b  rounded-t-xl  border-t-2 border-l-2 border-r-2 justify-end items-start  pt-2 bg-[#FFFFF5] pb-6 w-[80%] dark:border-black dark:bg-[#18191b] dark:text-white'>
                <h1 className='font-mulish font-extrabold text-xl pt-3 pl-6 pb-6 '>SHOPPING CART </h1>
                <div className='  scrollbar-thin overflow-scroll p-2 bg-[#FFFFF5] h-[15rem] dark:bg-[#18191b]'>
                    <CartItem/>
                    <CartItem/>
                </div>
            </div>
            <div className=' mt[10%] flex flex-col bg-[#E5E5B6] w-[80%]  rounded-b-xl border-b-2  border-l-2 border-r-2 dark:bg-[#18191b] dark:border-black dark:text-white'>
                <div className='flex p-6 mb-0 '>
                    <span>Total</span>
                    <span className='ml-auto'>LKR 10500.00</span>
                </div>

                <button className="text-gray-900 bg-white hover:text-white  focus:outline-none hover:bg-black  focus:ring-gray-100 font-medium rounded-lg text-sm  py-2.5 me-12 mb-12 ml-12 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white mt-6 dark:hover:border border-white " type="button" >CHECK OUT</button>
                <span className='pl-15  ml-[17%] mt-[-8%] pb-3 text-sm text-slate-500'>shipping cost and Taxes calculated on checkout</span>
            </div>
        </div>
    )
}
export default Cart