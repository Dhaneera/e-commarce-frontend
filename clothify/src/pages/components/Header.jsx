import { useState } from 'react'
import Image from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import CartImage from "../../assets/cart.png"
import Menu from '../../assets/Menu.png'
import {motion} from 'framer-motion'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(e) {
        setIsOpen(prevState => !prevState)
    }

    return (
        <motion.div animate={{y:0}} initial={{y:20}} >
            <header className="flex sticky  bg-[#fbfcf0] font-mulish dark:bg-black">
                <motion.div animate={{x:100}} initial={{x:-100}} className="w-1/3 justify-center items-center p-5 ssm:hidden sm:hidden md:hidden ">
                    <ul className="flex gap-7 p-5 dark:text-white">
                        <li className="ml-5 hover:underline"><Link to='/home'>Home</Link></li>
                        <li className="hover:underline"><Link>Mens</Link></li>
                        <li className="hover:underline"><Link>Women</Link></li>
                        <li className="hover:underline"><Link>Kids</Link></li>
                    </ul>
                </motion.div>
                <motion.div animate={{x:100}} transition={{delay:0.2, type:'tween',stiffness:5}} initial={{x:-100}} className="w-1/3 flex justify-center items-center ssm:hidden sm:hidden md:hidden ">
                    <img src={Image} className="w-40" alt="logo" />
                </motion.div>
                <motion.div animate={{x:-100}} initial={{x:100}} className="flex w-1/3 justify-end items-center p-5 gap-7 ssm:hidden sm:hidden md:hidden dark:text-white">
                    <img src={CartImage} className='h-6 mr-4' alt='cart' />
                    <p className='mr-4 hover:underline'><Link to='/'>Sign in</Link></p>
                </motion.div>
                <div className='lg:hidden xl:hidden 2xl:hidden p-5'>
                    <img src={Image} className='w-40' alt='logo' />
                </div>
                <div className=' 2xl:hidden xl:hidden lg:hidden    ml-auto p-5 pt-8 '>
                    <img src={Menu} onClick={handleClick} className={`w-8 cursor-pointer ${isOpen === true ? `hidden` : ``}`} alt='menu'></img>
                </div>
            </header>
            <div className={`lg:hidden 2xl:hidden xl:hidden  w-screen fixed bg-white h-[50%] mt-[17%] dark:bg-white bg-opacity-100 ${isOpen !== true ? ` ssm:hidden sm:hidden md:hidden` : ``}`}>
                <p>hello this is the new menu</p>
                <button onClick={handleClick} className='bg-white'>close menu</button>
            </div>
        </motion.div>
        )
}

export default Header