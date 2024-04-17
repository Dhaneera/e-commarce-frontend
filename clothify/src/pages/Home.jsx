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
import summer from '../assets/summer.png'
import winter from '../assets/winter.png'
import autumn from '../assets/autumn.png'
import spring from '../assets/spring.png'
import visit from '../assets/visit.png'
import bento_m1 from '../assets/m1.png'
import bento_m2 from '../assets/m2.png'
import bento_m3 from '../assets/m3.png'
import bento_m4 from '../assets/m4.png'
import bento_m5 from '../assets/m5.png'
import men_m1 from '../assets/c1.png'
import women_m1 from '../assets/c2.png'
import teens_m1 from '../assets/c3.png'
import kids_m1 from '../assets/c4.png'
import summer_m from '../assets/summer-m.png'
import winter_m from '../assets/winter-m.png'
import autumn_m from '../assets/autumn-m.png'
import spring_m from '../assets/spring-m.png'

export default function Home() {
    return (
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            <main className=" p- pl-0  m-5 ">
                <div className=" pl-12   ml-[1%] mr-[0%] pb-8  ssm:w-[118%] ssm:ml-[-12%] ">
                    <img src={start} alt="" className="" />
                </div>
                <div className=" w-screen ">
                    <img className="w w-screen" src={collection} alt="" />
                </div>
                <div className="g grid grid-cols-2 gap-1   ml-[5%]   mt-2 p-5  ssm:hidden">
                    <img className="w-[95%]" src={bento1} alt="" />
                    <img className=" w-[100%] mr-2 pr-6" src={bento2} alt="" />
                    <img className="w-[95%] pt-0 mt-[-80%] md:mt-[-75%] sm:mt-[-74%] " src={bento3} alt="" />
                    <img className="pt-5 w-[97%] lg:w-[95%] md:w-[94.5%] md:h-[99%] sm:w-[93%] sm:h-[99%]  " src={bento4} alt="" />
                </div>

                <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden ssm:mt-5 flex flex-col justify-center items-center ssm:w-[100%] ssm:mr-[4%] pl-6 ">
                    <img className="" src={bento_m1} alt="" />
                    <img className="ssm:mt-[-12%]" src={bento_m2} alt="" />
                    <img className="ssm:mt-[-12%]" src={bento_m3} alt="" />
                    <img className="ssm:mt-[-12%]" src={bento_m4} alt="" />
                    <img className="ssm:mt-[-12%]" src={bento_m5} alt="" />
                </div>

                <div className=" pl-[3%]  pr-3 flex ml-[3%] ssm:hidden">
                    <img className="r rounded-lg w-[98%]" src={bento5} alt="" />
                </div>
                <div className="  w-screen  mt-20   ">
                    <img className="ml-0 p-0 w-screen mr-[-2%]" src={category} alt="" />
                </div>
                <div className="flex mt-7 ml-[2%] mr-[1%] w-[80%]  justify-center gap-5 ssm:hidden">
                    <img className="size-[20%]" src={men} alt="" />
                    <img className="size-[20%] object-cover" src={women} alt="" />
                    <img className="size-[20%]" src={teen} alt="" />
                    <img className="size-[20%]" src={kids} alt="" />
                </div>
                <div className=" flex flex-col items-center 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden ssm:mt-6 pl-5  ">
                    <img className="w-[89%]" src={men_m1} alt="" />
                    <img className="w-[93%] ml-3" src={women_m1} alt="" />
                    <img className="w-[90%]" src={teens_m1} alt="" />
                    <img className="w-[89%]" src={kids_m1} alt="" />
                </div>
                <div className="  w-screen mt-10   ">
                    <img className="ml-0 p-0 w-screen mr-[-2%]" src={season} alt="" />
                </div>
                <div className="grid grid-cols-2 pt-5 pl-8 gap-3 mr-2 ml-2 ssm:hidden">
                    <img src={summer} alt="" />
                    <img className="xl:w-[93%] lg:w-[92%] md:w-[85%] sm:w-[83%]" src={winter} alt="" />
                    <img className="mt-[-14%] xl:mt-[-6%]  xl:h-[82.3%] lg:h-[81%] w-[100%] lg:mt-[-6%] md:h-[72%] md:mt-[-2%] sm:h-[80%] sm:mt-[0] " src={autumn}  alt="" />
                    <img className=" pr-12 sm:mt-[-4%] sm:h-[83%] " src={spring} alt="" />
                </div>
                <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex flex-col items-center mt-5 pl-7">
                    <img className="pl-1" src={summer_m} alt="" />
                    <img className="pl-1" src={winter_m} alt="" />
                    <img className="ml-2 " src={autumn_m} alt="" />
                    <img className="pl-1" src={spring_m} alt="" />
                </div>
                <div className="w-screen mt-10">
                    <img src={visit} alt="" />
                </div>
            </main>
        </div>
    )
}