import bin from '../../../public/bin.png'
import max from '../../../public/max.png'
import min from '../../../public/min.png'
import cartImg from '../../assets/product.png'

function CartItem(params) {
    return(
        <div className='flex mb-3 dark:bg-[#18191b] dark:text-white '>
        <div className='ml-4  w-[30%] dark:dark:bg-[#18191b] dark:text-white' >
            <img src={cartImg} alt="" />
        </div>
        <div className='flex flex-col pr-[20%] dark:bg-[#18191b] dark:text-white '>
            <div className='  flex'>
                <h2 className='ml-3'>Yellow Sweatshirt</h2>
                <span className=' pr-5 mr-0 ml-[65%]'> 3500.00</span>
            </div>
            <span className='ml-[10%] mt-3'>xs/Black</span>
            <div className='flex flex-row size-[9%] ml-[10%] mt-4'>
                <img src={min} alt="" />
                <input className='w-[4rem] pl-[2]  bg-black text-white ' type="number" />
                <img src={max} />
                <img className='w-[100%] h-[24px] pb-1' src={bin} />
            </div>
        </div>
    </div>
    )
}

export default CartItem