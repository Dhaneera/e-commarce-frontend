import React from "react";
import color from "../../public/Ellipse-1.png"
import color1 from "../../public/Ellipse-2.png"
import color2 from "../../public/Ellipse-3.png"
import color3 from "../../public/Ellipse-4.png"
import productImg from "../../public/Yellow Sweatshirt.png"
import Header from "./components/Header";

const ProductSelectionPage = () => {
  return (
  
    <div className="w-full h-full bg-[#E5E5B6] font-mulish">
      <Header/>
      <div className="flex ml-[6%] h-full bg-[#E5E5B6] ">
          <div className="product-left flex mt-[2%]">
            <img src={productImg} className="w-[100%] h-[78%] m-[5%]" alt=""/>
          </div>
          <div className="product-right m-10 ml-[6%] ">
          <h2 className=' letter space-x- w-[100%]  ml-[20%] text-3xl font-semibold font-mulish  ' >Yellow Sweat shirt  </h2>
          <div className="production-description  mt-0">
          <h2 className="mt-[10%] mb-9 ml-[10%] font-semibold underline italic text-xl">Product Description</h2>
          <p className="ml-[10%] font-mulish">THIS PRODUCT OFFERS LUXURIOUS, BRUSHED SURFACE  <br></br>
          SILICONE WASH AND GIVES A PLUSH,<br></br> AND VELVETY HAND FEEL.
          ITS MADE WITH 100% FRENCH TERRY AND WAS CREATED</p>
        </div>
          <div className="pricing w-[100%] ml-[10%] mt-[7%] font-mulish text-xl">
            <span>LKR 3500.00</span>
            <span className="flex mt-[2%] font-extralight">(Shipping calculated at checkout)</span>
          </div>
            <div className="product-size w-[100%] mt-[5%] ml-[10%]">
              <span className="flex font-mulish font-semibold text-xl "> Size</span>
              <div className="button-size space-x-7">
                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 "  >XS</button>
                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 " >S</button>
                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 " >M</button>
                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 " >L</button>
                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 " >XL</button>
              </div>
              
            </div>
            <div className="product-color mt-[5%] ml-[10%] mb-5 ">
              <span className="flex font-mulish font-semibold text-xl">Color </span>
              <div className="inline-flex mt-[5%] space-x-7 h-9">
                <img src={color} alt="black"  />
                <img src={color1} alt="green" />
                <img src={color2} alt="yellow" />
                <img src={color3} alt="red" />
              </div>
              
            </div>
            <span className=" m-[10%] ">In Stock (17)</span>
            <div className="product-add  ml-[9%]  mt-5 w-[60%]" >
              <input type="number" name="number_cloths "className="h-[40px] w-[20%] pl-7 " />
              <button  type="button" className="ml-[10%] w-[67%] text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 "  >ADD TO CART</button>
            </div>
          </div>
        </div>
         
    </div>
  )
}

export default ProductSelectionPage