import cartImg from '../../../public/product.png'
import min from'../../../public/min.png'
import max from'../../../public/max.png'
import bin from'../../../public/bin.png'

const Cart = () => {
    return(
        // <div className='font font-mulish  ml-[5%] bg-[#FFFFF5] pl-[40%]' >
        //     <h1 className=' font-mulish m-[4%] ml-[5%] font-extrabold tracking-widest text-3xl mt-19'>SHOPPING CART </h1>
        //     <div className='flex'>
        //     <div className="left-side flex">
        //         <img src={cartImg} alt="product" className='ml-[10%]' />
        //     </div>
        //     <div className="right-side ml-[8%]">
        //     <span className=' font-mulish text-lg  font-extralight from-neutral-400 '>CLOTHIFY</span>
        //     <div className='flex'>
        //         <h2 className='text text-base l mt-3 tracking-wid'>Yellow Sweat shirt</h2>
        //         <span className='ml-12 mt-3 font-mulish font-bold'>LKR 3500.00</span>
        //     </div>
            
        //     <div className='inline-flex mt-7 justify-center'>
        //        
        //     </div>
            
        //     </div>
        //     </div>
        //         <div className='mt-[30%] ml-[2%] bg-[#E5E5B6]'>
                
        //         <button  type="button " className="flex ml-[10%] w-[200px] text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 " >CHECK OUT</button>
        //     </div>
        // </div>
        <div className=' ov overflow-auto'>
            <div className='border  scrollbar scrollbar-thumb-red-500 flex-inline mt-[2%]  bg-[#FFFFF5] w-[33%]  ml-[60%] p-8 rounded-t-3xl h-[100vh]  overflow-scroll' >
                <h1 className=' ml-2 font-mulish font-extrabold tracking-widest text-2xl'>SHOPPING CART </h1>
                <div className='flex '>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20'>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20 '>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20 '>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20 '>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20 '>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20 '>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20 '>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className=' mt-[5%] ml-3'>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[28%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex'>
                        <div className='flex'>
                            <h2 className=' mt-3   tracking-wide font-mulish text-l size 20 '>Yellow Sweatshirt</h2>
                            <span className='ml-[50%] mt-4 font-mulish font-bold'> 3500.00</span>
                            <span className='mt-[20%] ml-[-127%] font-mulish font-light text-sm'>xs/Black</span>
                        </div>
                        
                        <div className='flex  mt-[43%] ml-[-106%]'>
                            <img src={min} alt="" className='size-[38%] items-center' />
                            <input type="number" name="number_cloths "className="h-[14px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[38%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[50%] mt-[-2%]' />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className='   bg-[#E5E5B6] w-[33%]  ml-[60%]  p-10 rounded-b-2xl '>
                <span className=' font-mulish text-3xl font-thin ml-12'>Total</span>
                <span className='ml-[50%] text-l font-bold'>LKR 10500.00</span>
                <button  type="button " className=" mb-8  flex pl-[22%] w-[280px] mt-[10%] text-gray-900 bg-white  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-[20%] " >CHECK OUT</button>
                <span className='text font-mulish  font-extralight text-sm ml-[18%] text-slate-400'>shipping cost and Taxes calculated on checkout</span>
            </div>
        </div>
        
    )
}
export default Cart