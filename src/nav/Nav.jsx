
import { NavLink } from "react-router-dom"
import allData from "../DataArry"
import Button from "../component/Button"

export default function Nav() {
   

   
    
    
    return(
        <>
<header className="w-full h-[10vh] flex justify-between items-center font-light">
    <div className="logo">Vintage Academy</div>
    <nav className="">
    {allData.Menulist.map((item) => (
                      <NavLink to={item.to} className={"mx-4 "}>
                        {item.menu}
                        
                        
                      </NavLink>
                    ))}
                    

    </nav>
        <Button Btn="SignUp"/>

</header>

        </>
    )
}
