
import { NavLink } from "react-router-dom"
import SignIn from "../pages/SignIn";
import { useState } from "react";
import { motion, spring } from "framer-motion"

import allData from "../DataArry"
import Button from "../component/Button"
// import SignUp from "../pages/SignUp"

export default function Nav() {
    
        const [isVisible,SetisVisible]=useState(false)
        const ToggleVisibility = () =>{
            SetisVisible(!isVisible)
        }
        
        
    
    
    
    
    return(
        <>
<header className=" h-[10vh] w-[100vw] z-20 bg-white  flex justify-around items-center font-light fixed left-0">
    <div className="logo font-bold text-xl text-[#C930BE] ">Alen <span className="font-normal text-black ">Academy</span> </div>
    <nav className="max-sm:hidden ">
    {allData.Menulist.map((item) => (
                      <NavLink  to={item.to} className={"mx-4"}>
                        {item.menu}
                        
                        
                      </NavLink>
                    ))}
                    

        <span className=" relative z-[200]"  onClick={ToggleVisibility} >{isVisible ? <Button Btn="Close" bg="#C930BE"/>   : <Button Btn="Sign in" bg="#C930BE"/>} </span>
        {isVisible && <SignIn/>}
        
    </nav>

</header>

        </>
    )
}
