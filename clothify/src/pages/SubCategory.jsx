import t_shirts from '../assets/collection-T-shirt.png'
import shirts from '../assets/collection-shirt.png'
import frocks from '../assets/collection-frock.png'
import denims from '../assets/collection-denim.png'
import blouses from '../assets/collection-blouses.png'
import perfumes from '../assets/collection-perfumes.png'
import Header from '../pages/components/Header'
import { motion } from 'framer-motion'

export default function SubCategory() {
    return (

        <main className=' h-screen pt-8 '>
            <div>
                <Header />
            </div>
            <div className='  gap-3 p- h-screen  grid grid-cols-2  p-20   max-lg:hidden '>
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
            </div>
            <div className=' p-16 gap-4 flex flex-col mt-3 lg:hidden'>
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                <motion.img whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
            </div>
        </main>
    )
}