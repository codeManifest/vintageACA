
import { NavLink } from "react-router-dom"
import allData from "../DataArry"
import Button from "../component/Button"

export default function Nav() {
   

   
    
    
    return(
        <>
<header className=" h-[10vh] w-[100vw] z-20 bg-white  flex justify-around items-center font-light fixed ">
    <div className="logo">Vintage Academy</div>
    <nav className="max-sm:hidden ">
    {allData.Menulist.map((item) => (
                      <NavLink to={item.to} className={"mx-4 "}>
                        {item.menu}
                        
                        
                      </NavLink>
                    ))}
                    

        <Button Btn="SignUp"/>
    </nav>

</header>

        </>
    )
}
