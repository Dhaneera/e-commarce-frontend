import React from 'react'
import product from '../assets/product.png'
import primary from '../assets/Ellipse-1.png'
import secondary from '../assets/Ellipse-2.png'
import alter from '../assets/Ellipse-3.png'
import alter_1 from '../assets/Ellipse-4.png'
import Header from './components/Header'
import plus from '../assets/plus.png'
import minus from '../assets/Minus.png'


const ProductSelection = () => {
        const [count,setCount] = React.useState(1)


        function add(params) {
                setCount(prevCount=> prevCount+1)
        }
        console.log(count);

        function sub(params) {
            if(count>1){
                setCount(prevCount=> prevCount-1)
            }
        }
        console.log(count);


    return (
        <div>
            <div>
                <Header />
            </div>

            <div className='flex p-10 m-20 bg-[#F4F4DC] mb-0 max-lg:flex-col max-md:p-3 max-md:m-7'>
                <div className='  w-1/3 max-lg:w-2/3 max-lg:p-5 max-lg:ml-16  max-md:w-2/3 max-md:ml-10 '>
                    <img className=' h-[100%]  ' src={product} alt="selected product image" />
                </div>
                <div className=' flex flex-col w-2/3  ml-16 max-lg:w-full max-lg:ml-0 max-lg:mt-5 '>
                    <h1 className=' text-4xl text-black  font-mulish font-extrabold tracking-widest  max-lg:text-2xl max-lg:mt-3  max-md:text-lg max-lg:ml-[20%]'>Yellow SweatShirt</h1>
                    <p className=' mt-5 text-base font-mulish p-5  max-lg:text-xs max-md:text-[8px]'>THIS PRODUCT OFFERS LUXURIOUS, BRUSHED SURFACE WITH AN ADDED SILICONE WASH AND GIVES A PLUSH AND VELVETY HAND FEEL. ITS MADE WITH 100% FRENCH TERRY AND WAS CREATED FOR ALL THE OUTGOING PERSONALITIES OUT THERE!</p>
                    <h3 className='mb-0  text-2xl m-10 tracking-wider font-extralight max-lg:text-lg max-md:text-base max-md:m-5 max-md:mb-0'>LKR 3250.00</h3>
                    <h5 className=' text-sm text-gray-300 ml-5 max-lg:text-xs max-lg:ml-6 max-md:text-[10px] max-md:m-3 max-md:mt-0' >(Shipping calculated at checkout)</h5>
                    <h3 className=' text-lg ml-4 mt-5 max-lg:text max-lg:text-sm max-lg:ml-10 max-md:text-xs max-md:ml-3'>Size </h3>
                    <div className='flex gap-4 mt-5 ml-10 w-[100%] max-lg:w-[100%] max-md:gap-2 max-md:ml-6'>
                        <button className='max-lg:w-[12%] bg-white  text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>XS</button>
                        <button className='max-lg:w-[12%] bg-white  text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600  dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>S</button>
                        <button className='max-lg:w-[12%] bg-white text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>M</button>
                        <button className=' max-lg:w-[12%] bg-white   text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>L</button>
                        <button className='max-lg:w-[12%] bg-white  text-gray-900  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm w-[7%] py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700'>XL</button>
                    </div>

                    <span className=' text-lg ml-4 mt-5 max-md:text-xs max-md:ml-3'>Color</span>
                    <div className='flex gap-5 mt-5 ml-10 '>
                        <img src={primary} alt="color palate first color" className=' size-10 max-md:size-7  hover:border  hover:ring-4 ring-black   rounded-full border-white' />
                        <img src={secondary} alt="color palate second color"className= 'size-10 max-md:size-7 hover:border  hover:ring-4  ring-green-500   rounded-full border-white' />
                        <img src={alter} alt="color palate third color" className=' size-10 max-md:size-7 hover:border  hover:ring-4  ring-yellow-500  rounded-full border-white' />
                        <img src={alter_1} alt="color palate fourth color" className=' size-10 max-md:size-7 hover:border  hover:ring-4  ring-red-500   rounded-full border-white' />
                    </div>

                    <span className=' mt-10 ml-4 max-md:text-xs max-md:ml-3'>In Stock (*)</span>
                    <div className='flex gap-1 p-5 justify-center max-md:gap-3  '>
                        <img className=' size-10 hover:ring-2 ring-black border hover:size-11' onClick={add} src={plus} alt="" />
                        <span className='size-10 text-lg  p-2 bg-white pl-4'>{count}</span>
                        <img className=' size-10 hover:ring-2 ring-black border hover:size-11' onClick={sub}src={minus} alt="" />
                        <button className=' ml-4 bg-white text-gray-900  w-[60%] hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700' >Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSelection