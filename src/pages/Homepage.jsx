
import allData from "../DataArry"
import Button from "../component/Button"
import SmallCard from "../component/SmallCard"
import { motion, spring } from "framer-motion"
import woman from '../img/woman.png'
import '../component/Additional-CSS.css'
import Achivement from "../component/Achivement"

export default function homepage() {

    return (
        <>


            <div className="w-full h-[100vh] flex items-center overflow-hidden">
                <div className="w-1/2 font-bold " >
                    <h1 className="text-6xl text-[#FFA800]">Mastering Computers </h1>
                    <h3 className="my-5 text-3xl w-2/3">Transforming Students <br />for <span className="text-[#FFA800]">Future Success.</span></h3>
                    <p className="font-light text-sm w-2/3">Craft your success journey with <span className="font-bold">Vintage IT Academy's</span>  flexible career courses—online, offline, and hybrid</p>
                    {/* ---> */}
                    <div className="mt-8 mb-6 w-[20rem] flex items-center justify-between">

                        <Button Btn="Contact" />
                        <div className=" ">
                            <h1 className="text-4xl text-[#454545] ">50+</h1>
                            <p className="font-light">Courses</p>
                        </div>
                        <div className="" >
                            <h1 className="text-4xl text-[#454545] ">20k+</h1>
                            <p className="font-light">Students</p>
                        </div>

                    </div>
                </div>
                <div className="w-1/2 relative   " >

                    <motion.div animate={{ scale: 1.1 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 5, type: "bounce", stiffness: .12 }} className="h-[584px] w-[584px] bg-[#FAD9F8]  rounded-[50%] flex items-center justify-center">

                        <motion.div animate={{ scale: .8 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 5, type: "bounce", stiffness: .25 }} className="h-[490px] w-[490px] bg-[#F9A7F3]  rounded-[50%] flex items-center justify-center">

                            <motion.div animate={{ scale: .6 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 5, type: "bounce", stiffness: .25 }} className="h-[372px] w-[372px] bg-[#EE64E4]  rounded-[50%]  "></motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.img animate={{ y: -570 }} transition={{ delay:1, duration: 3, type: "spring" }} width={500} className="absolute top-[570px] left-[35px]   " src={woman} alt="" />

                </div>

            </div>
            <div className=" h-fit w-full" >
                <h2 className="w-1/2 text-4xl font-semibold ">Browse Top Essential Career Courses</h2>
                <div className="flex justify-between items-center w-full mt-5  flex-wrap ">
                    {allData.SmallCardData.map((item) => (
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
            <div className=" h-[60vh] w-full flex justify-between items-center">
                <div className="w-1/2" >

                    <h1 className=" text-center text-4xl text-[#ac3ab6] font-bold">{allData.whyWeAre[0].title}</h1>
                </div>
                
                <div className=" w-1/2 p-4 flex items-center  " >
                    <p  className="text-slate-700 shadow-lg bg-slate-50 p-5 rounded-lg ">
                    {allData.whyWeAre[0].desc}
                    </p>
                </div>
            
            </div>
            <div className="p-4">

                <Achivement/>
            </div>

        </>

    )

}