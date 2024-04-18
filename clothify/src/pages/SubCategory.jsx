import t_shirts from '../assets/collection-T-shirt.png'
import shirts from '../assets/collection-shirt.png'
import frocks from '../assets/collection-frock.png'
import denims from '../assets/collection-denim.png'
import blouses from '../assets/collection-blouses.png'
import perfumes from '../assets/collection-perfumes.png'

export default function SubCategory() {
    return(
        <main className=' h-screen pt-8 '>
            <div className='  gap-3 p- h-screen  grid grid-cols-2  p-10 md:hidden sm:hidden ssm:hidden '>
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
            </div>
            <div className=' 2xl:hidden xl:hidden lg:hidden p-5 gap-4 flex flex-col mt-3'>
            <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                <img className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
            </div>
        </main>
    )
}