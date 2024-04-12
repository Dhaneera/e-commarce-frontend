import cartImg from '../../../public/product.png'
import min from'../../../public/min.png'
import max from'../../../public/max.png'
import bin from'../../../public/bin.png'

const Cart = () => {
    return(
        <div className='  overflow-auto '>
            <div className='fixed ml-[60%] bg-[#FFFFF5] w-[33%] mt-8 h-20 border-t-2 border-l-2 border-r-2 rounded-t-3xl  xl:w-[40%] xl:ml-[48%] lg:w-[40%] lg:ml-[50%] md:w-[60%]  md:ml-[25%] md:mt-[10%] sm:ml-[10%] sm:w-[80%] '  >
                    <h1 className=' m-6 ml-9 font-mulish font-extrabold tracking-widest text-2xl'>SHOPPING CART </h1>
            </div>
            <div className=' border-l-2 border-r-2  scrollbar-thin  flex-inline mt-[4rem]  bg-[#FFFFF5] w-[33%]  ml-[60%] p-8  h-[30vh]  overflow-scroll xl:w-[40%] xl:ml-[48%] lg:ml-[50%] lg:w-[40%]  md:w-[60%] md:ml-[25%] md:mt-[13%] md:h-[650px] sm:ml-[10%] sm:w-[80%] sm:h-[650px]' >
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3   '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[14.3rem] lg:ml-[11.2rem] md:ml-[12.8rem] sm:ml-8 '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem] xl:ml-[11.2rem] md:text-base sm:ml-[8rem]' > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-17.9rem] lg:ml-[-12.7rem] md:ml-[-12.7rem] sm:ml-[-14.8rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='   bg-[#E5E5B6] w-[33%]  ml-[60%]  p-10 rounded-b-2xl  xl:w-[40%] xl:ml-[48%] lg:ml-[50%] lg:w-[40%]  md:w-[60%] md:ml-[25%] sm:ml-[10%] sm:w-[80%]'>
                <span className=' font-mulish text-xl font-thin ml-12 2xl:ml-[3%] xl:ml-4 lg:ml-[2%] md:ml-0'>Total</span>
                <span className='ml-[50%] text-base font-bold 2xl:ml-[22rem] xl:ml-[16.3rem] lg:ml-[10.58rem] md:ml-[14rem]'>LKR 10500.00</span>
                <button  type="button " className="   flex pl-[22%] w-[220px] mt-[10%] text-gray-900 bg-white  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-[20%]  2xl:ml-[22%] lg:ml-[6.5rem] lg:pl-[4.8rem] xl:ml-[6.5rem] xl:pl-[4.8rem] md:w-[15rem] sm:w-[17rem]" >CHECK OUT</button>
                <span className='text font-mulish  font-extralight text-xs ml-[18%] text-slate-400 2xl:ml-[22%] lg:ml-[3rem] xl:ml-[5.5rem] sm:ml-[5.7rem] '>shipping cost and Taxes calculated on checkout</span>
            </div>
        </div>

    )
}
export default Cart