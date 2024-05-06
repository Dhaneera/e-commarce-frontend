import { useState } from 'react'
import Image from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CartImage from "../../assets/cart.png"
import Menu from '../../assets/Menu.png'
import cart from '../../assets/Light Shopping Bag.png'
import { color } from 'framer-motion'
import { motion } from 'framer-motion'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    

    function handleClick(e) {
        console.log(e.target)
        props.action();
    }


    
    return (
        <div className=' p-10 w-[90%]  z-50 scroll-y ' >
        <header className="flex fixed w-[88%]  ml-16  bg-[#F4F4DC] font-mulish dark:bg-[#18191b]  rounded-xl h-[6rem] mb-12   ">
            <div className="w-1/3 justify-center items-center p-7 max-lg:hidden ">
                <ul className="flex gap-7 p-2 dark:text-white tracking-wider lg:tracking-wide lg:text-xs  text-sm">
                <motion.li className="ml-5 hover:underline" whileHover={{scale:1.2}}><Link to='/mens'>Mens</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className="hover:underline"><Link to='/women'>Womens</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className="hover:underline"><Link to='/teens'>Teens</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className="hover:underline"><Link to='/kids'>Kids</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className="hover:underline"><Link to='/subCategories'>SubCategories</Link></motion.li>
                </ul>
            </div>
            <div className="w-1/3 flex justify-center items-center max-lg:hidden p-5 lg:ml-10">
                <Link className='ml-0' to='/home'><motion.img whileHover={{scale:1.2}} src={Image} className="w-40 p-3" alt="logo" /></Link>
            </div>
            <div className="flex w-1/3 justify-end items-center p-5 gap-5 max-lg:hidden dark:text-white mr-5 text " >
                <motion.img whileHover={{scale:1.5}}   src={cart} className={` size-5 hidden dark:flex `} onClick={(e)=>handleClick(e)}  alt="" />
                <motion.img whileHover={{scale:1.5}} src={CartImage} className='h-6 mr-4 dark:hidden' onClick={(e)=>handleClick(e)}  alt='cart' />
                <motion.p whileHover={{scale:1.2}} className='mr-4 hover:underline'><Link to='/'>Sign in</Link></motion.p>
                
            </div>
            <div className='lg:hidden p-5  '>
                <img src={Image} className=' size-12  w-28' alt='logo' />
            </div>
            <div className='lg:hidden ml-auto p-5 pt-6'>
                <img src={Menu} onClick={handleClick} className={`w-8 cursor-pointer ${isOpen===true?`hidden`:``}`} alt='menu'></img>
            </div>
        </header>
        <div className={`lg:hidden w-screen fixed bg-black h-[50%] mt-[17%] dark:bg-white bg-opacity-100 ${isOpen!==true?`max-lg:hidden`:``}`}>
            <p>hello this is the new menu</p>
            <button onClick={handleClick} className='bg-white'>close menu</button>
        </div>
        <div>
            <header className=' fixed ml-[35%] justify-around w-[45.8%] mr-0 flex  rounded-full dark:bg-[#18191b]  '>
            <div className=" mt-3 mb-3  mr-0 ">
                <ul className="flex  dark:text-white tracking-wider lg:tracking-wide lg:text-xs  text-sm mr-0 ">
                <motion.li className="ml-6 hover:border rounded-3xl   p-3 pl-5 pr-5  " whileHover={{scale:1.2}}><Link to='/mens'>Mens</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className=" hover:border rounded-3xl p-3 "><Link to='/women'>Womens</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className="hover:border rounded-3xl   p-3 pl-5 pr-5 "><Link to='/teens'>Teens</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className="hover:border rounded-3xl   p-3 pl-6 pr-6"><Link to='/kids'>Kids</Link></motion.li>
                    <motion.li whileHover={{scale:1.2}} className="hover:border rounded-3xl   p-3 pl-5 pr-5"><Link to='/subCategories'>SubCategories</Link></motion.li>
                    <motion.img whileHover={{scale:1.5}}   src={cart} className={` h-12 p-2 hidden dark:flex `} onClick={(e)=>handleClick(e)}  alt="" />
                    <motion.img whileHover={{scale:1.5}} src={CartImage} className='h-12 p-2 dark:hidden' onClick={(e)=>handleClick(e)}  alt='cart' />
                    <motion.p whileHover={{scale:1.2}} className="hover:border rounded-3xl   p-3 pl-4 pr-5 ml-2  "><Link to='/'>Sign in</Link></motion.p>
                </ul>
            </div>
            <div className="flex  justify-end items-center p-5 gap-5 max-lg:hidden dark:text-white mr-5 text " >
                
                
            </div>
            </header>
        </div>
        </div>
    )
}

export default Header