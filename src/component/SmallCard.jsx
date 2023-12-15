import { HiOutlineComputerDesktop } from "react-icons/hi2";
import allData from "../DataArry";


export default function SmallCard(props) {
    const {icon,title,bg}=props
    return(
        <>
        <div className={`h-[150px] w-[150px] p-3 bg-[${bg}] rounded-[41px] mx-3`}>
        <span className="mt-">{icon}</span>
        <h5 className="text-slate-100 font-semibold">{title}</h5>

        </div>
        
        </>
    )
    
}