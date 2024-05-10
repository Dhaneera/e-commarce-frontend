import { useState, useEffect } from 'react'
import Image from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CartImage from "../../assets/cart.png"
import Menu from '../../assets/Menu.png'
import cart from '../../assets/Light Shopping Bag.png'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()





    function handleClick(e) {
        console.log(e.target)
        props.action();
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous) {
            setHidden(true)
        }else {
            setHidden(false)
        }
    })

        return (
            <motion.header variants={{
                visible: { y: 0 },
                hidden: { y: "-160%" }
            }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className=' fixed  flex w-[88%] items-center  max-xl:ml-20 max-2xl:ml-24 xl:ml-28 max-md:ml-6 max-lg:ml-14   mt-10 bg-[#F4F4DC] font-mulish dark:bg-[#18191b]  rounded-xl h-[5rem]  '>
                <div className="w-1/3 justify-center items-center p-7 max-lg:hidden ">
                    <ul className="flex gap-7 p-2 dark:text-white tracking-wider lg:tracking-wide lg:text-xs  text-sm">
                        <motion.li className="ml-5 hover:underline" whileHover={{ scale: 1.2 }}><Link to='/mens'>Mens</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/women'>Women</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/teens'>Teens</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/kids'>Kids</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/subCategories'>SubCategories</Link></motion.li>
                    </ul>
                </div>
                <div className="w-1/3 flex justify-center items-center max-lg:hidden p-5 lg:ml-10">
                    <Link className='ml-0' to='/home'><motion.img whileHover={{ scale: 1.2 }} src={Image} className="w-40 p-3" alt="logo" /></Link>
                </div>
                <div className="flex w-1/3 justify-end items-center p-5 gap-5 max-lg:hidden dark:text-white mr-5 text " >
                    <motion.img whileHover={{ scale: 1.5 }} src={cart} className={` size-5 hidden dark:flex `} onClick={(e) => handleClick(e)} alt="" />
                    <motion.img whileHover={{ scale: 1.5 }} src={CartImage} className='h-6 mr-4 dark:hidden' onClick={(e) => handleClick(e)} alt='cart' />
                    <motion.p whileHover={{ scale: 1.2 }} className='mr-4 hover:underline'><Link to='/'>Sign in</Link></motion.p>
                </div>
                <div className='lg:hidden p-5  '>
                    <img src={Image} className=' size-12  w-28' alt='logo' />
                </div>
                <div className='lg:hidden ml-auto p-5 pt-6'>
                    <img src={Menu} onClick={handleClick} className={`w-8 cursor-pointer ${isOpen === true ? `hidden` : ``}`} alt='menu'></img>
                </div>
            </motion.header>
    
        )
}

export default Header