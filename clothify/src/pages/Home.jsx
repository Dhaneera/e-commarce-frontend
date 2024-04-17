import React from "react";
import Header from "./components/Header";
import start from '../assets/homeStart.png'
import collection from '../assets/collection.png'
import bento1 from '../assets/T-shirtBento.png'
import bento2 from '../assets/bento2.png'
import bento3 from '../assets/bento3.png'
import bento4 from '../assets/bento4.png'
import bento5 from '../assets/bento5.png'
import category from '../assets/category.png'
import men from '../assets/mens.png'
import women from '../assets/women.png'
import teen from '../assets/teens.png'
import kids from '../assets/kids.png'
import season from '../assets/seasonal.png'
export default function Home() {
    return (
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            <main className=" p- pl-0  m-5 ">
                <div className=" pl-12   ml-[1%] mr-[0%] pb-8  ">
                    <img src={start} alt="" className="" />
                </div>
                <div className=" w-screen ">
                    <img className="w w-screen" src={collection} alt="" />
                </div>
                <div className="g grid grid-cols-2 gap-1   ml-[5%]   mt-2 p-5 m">
                    <img className="w-[95%]" src={bento1} alt="" />
                    <img className=" w-[100%] mr-2 pr-6" src={bento2} alt="" />
                    <img className="w-[95%] pt-0 mt-[-80%]  " src={bento3} alt="" />
                    <img className="pt-5 w-[97%] " src={bento4} alt="" />
                </div>
                <div className=" pl-[3%]  pr-3 flex ml-[3%]">
                    <img className="r rounded-lg w-[98%]" src={bento5} alt="" />
                </div>
                <div className="  w-[screen] mt-10  ml-[2%]  ">
                    <img className="ml-0 p-0 w-screen mr-[-2%]" src={category} alt="" />
                </div>
                <div className="flex mt-5 ml-[2%] mr-[1%]  justify-center gap-5 ">
                    <img className="size-[20%]" src={men} alt="" />
                    <img className="size-[20%] object-cover" src={women} alt="" />
                    <img className="size-[20%]" src={teen} alt="" />
                    <img className="size-[20%]" src={kids} alt="" />
                </div>
                <div className="  w-[screen] mt-10  ml-[2%]  ">
                    <img className="ml-0 p-0 w-screen mr-[-2%]" src={season} alt="" />
                </div>
                
            </main>

        </div>
    )
}