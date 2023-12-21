import allData from "../DataArry";
import '../component/Additional-CSS.css'


export default function SmallCard(props) {
    const {icon,title}=props
    return(
        <>
        <div className={`h-[230px] w-[230px] p-6  smallcard-bg  m-2 rounded-[20px] hover:shadow-black`}>
        <span className="">{icon}</span>
        <h2 className="text-slate-100 font-bold text-3xl pt-2">{title}</h2>
        <hr className="px-[10px] mt-[20px]" />

        </div>
        
        </>
    )
    
}