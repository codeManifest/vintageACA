import React from "react"
import { useState } from "react";


import allData from "../DataArry"
import Button from "../component/Button"
import SmallCard from "../component/SmallCard"
import { motion, spring } from "framer-motion"
import woman from '../img/woman.png'
import '../component/Additional-CSS.css'
import Achivement from "../component/Achivement"
import CountUp from 'react-countup';


import Services from "../component/Services"
// import svg 
import Mysvg from '../img/Animation.gif'



export default function homepage() {
    
    let small_card_data_split=allData.SmallCardData.slice(0,3)
    
    
    
    return (
        <>
      


            <div className="w-full max-sm:h-screen  flex items-center overflow-hidden  pt-[10vh] max-sm:block  ">
                <div className="w-1/2 py-10 font-bold max-sm:w-full " >
                    <h1 className="text-6xl text-[#FFA800]">Mastering Computers </h1>
                    <h3 className="my-5 text-3xl w-2/3 max-sm:w-full max-sm">Transforming Students <br />for <span className="text-[#FFA800]">Future Success.</span></h3>
                    <p className="font-light text-sm w-2/3">Craft your success journey with <span className="font-bold">Alan Academy</span> flexible career courses—online, offline, and hybrid</p>
                    {/* ---> */}
                    <div className="mt-15 max-sm:pt-10  mb-20 w-[20rem] flex items-center justify-between">

                        <Button Btn="Contact" bg="#C930BE" />
                        <div className=" ">
                            <h1 className="text-4xl text-[#454545] "> <CountUp start={0} end={50} duration={2} delay={1}/>+</h1>
                            <p className="font-light">Courses</p>
                        </div>
                        <div className="" >
                            <h1 className="text-4xl text-[#454545] "> <CountUp start={0} end={20} duration={2} delay={1}/>k+</h1>
                            <p className="font-light">Students</p>
                        </div>

                    </div>
                </div>
                <div className="w-1/2 relative max-sm:w-full  " >
                    <div className="md:hidden w-full flex " >
                        <img src={Mysvg} className=" scale-[2.0] "  alt=""  />
                    </div>
                    <div className="max-sm:hidden xl:px-[10rem] ">

                    <motion.div initial={{ opacity: 0 }}   animate={{ scale: 1.1, opacity: 1 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 5, type: "bounce", stiffness: .12 }} className="h-[584px] w-[584px] bg-[#FAD9F8]  rounded-[50%] flex items-center justify-center">

                        <motion.div initial={{ opacity: 0 }} animate={{ scale: .8, opacity: 1 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 5, type: "bounce", stiffness: .25 }} className="h-[490px] w-[490px] bg-[#F9A7F3]  rounded-[50%] flex items-center justify-center">

                            <motion.div initial={{ opacity: 0 }} animate={{ scale: .6, opacity: 1 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 5, type: "bounce", stiffness: .25 }} className="h-[372px]  w-[372px] bg-[#EE64E4]  rounded-[50%]  "></motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.img initial={{ opacity: 0 }} animate={{ y: -570, opacity: 1 }} transition={{ delay:1, duration: 3, type: "spring" }} width={500} className="scale-75 absolute top-[570px] left-[200px]   " src={woman} alt="" />

                </div>
                </div>

            </div>
            <div className=" w-full" >
                <h2 className="w-1/2 max-sm:w-full text-4xl font-semibold ">Browse Top Essential Career Courses</h2>
                <div className="flex justify-between items-center w-full mt-5  flex-wrap ">
                    {small_card_data_split.map((item) => (
                        <SmallCard icon={item.icon} title={item.title} />
                    ))}
                    {/* arrow SVG */}
                    <div>
                        <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.circle cx="77.5" cy="77.5" r="77.5" fill="#FAD9F8" />
                            <motion.circle cx="77.5" cy="77.5" r="65.5" fill="#F9A7F3" />
                            <motion.circle cx="77.5" cy="76" rx="49.5" ry="50" fill="#EE64E4" />


                            <motion.path animate={{ x: 20 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1, type: "bounce", stiffness: 56 }} d="M84.3182 93.642L80.2841 89.6364L88.6932 81.2273H55V75.3182H88.6932L80.2841 66.9091L84.3182 62.9034L99.6875 78.2727L84.3182 93.642Z" fill="white" />



                        </svg>
                        <h5 className="text-center font-regular text-slate-500" >Explore More</h5>
                    </div>

                </div>

            </div>
            <div className="w-full flex justify-around items-center py-20 ">
                {/* student achievment card was here */}
                        <Services/>
            
            </div>
            <div className="py-10 max-sm:block " >

            <h2 className="text-center text-5xl font-light text-slate-600 p-5">Meet Our Students <span className="text-[#ac3ab6] font-bold">and Alumni</span> </h2>
            <div className="p-4 mt-7 flex justify-around w-full flex-wrap">
                { allData.Stud_Achivements.map((item)=><Achivement name={item.StudentName} position={item.Position} img={item.img} key={item.key} />)}
            </div>
            

    
            
            

           
            </div>

        </>

    )
}