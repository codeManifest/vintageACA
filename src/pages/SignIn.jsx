
// import { IoClose } from "react-icons/io5";
import { delay, motion, spring } from "framer-motion"
import { NavLink } from "react-router-dom"


import SignUp from "./SignUp"


export default function SignIn (props){

    
    
 return(
    


    
    <>


    <motion.div  transition={{duration:1}} initial={{opacity:0}} animate={{opacity:1}} className="h-screen  items-center justify-center backdrop-blur-md  top-0 left-0 z-50 fixed max-sm:block flex   ">

    <motion.div transition={{duration:2, type:"spring"}} initial={{scale:.5}} animate={{scale:1}} className="h-[60vh] w-1/2 bg-[#C930BE] max-sm:bg-transparent flex justify-around items-center rounded-[30px] signup max-sm:block max-sm:h-screen max-sm:w-full  max-sm:px-5 relative" >
        {/* <span className="absolute top-5 right-5 max-sm:top-[-4rem] text-white max-sm:text-black cursor-pointer  " ><IoClose size={40}   /></span> */}
        <div className="w-1/2 p-2 max-sm:w-full max-sm:mt-20 max-sm:py-1 ">
            <h1 className="text-3xl py-3  text-white max-sm:text-black font-normal">Sign In <span  className="bg-red-500 px-5 text-white font-bold">Now</span></h1>
            <p  className=" text-white max-sm:text-black max-sm:text-sm max-sm:py-2 md:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et accusantium at eum explicabo magni tempora, perferendis tempore expedita. Facere tenetur sunt nobis exercitationem omnis consectetur dignissimos, cumque architecto distinctio?</p>
        </div>
        <div className="flex flex-col md:scale-[.7] xl:scale-[1]">
            
            
            <input type="email" name="" id="" placeholder="User Id or Email" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 " required />
            <input type="password" name="" id="" placeholder="Password" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 " required />
            
            <input type="submit" value="Sign in" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2  bg-[#C930Cf] text-white active:scale-[.9] cursor-pointer" />
            <p className="pt-3 text-white">No have an Account ? <span className="text-blue-300"> Sign Up </span> </p>
             
        </div>
        


    </motion.div>
    </motion.div>

    </>

    )}
   