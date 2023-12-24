import allData from "../DataArry"
import SmallCard from "../component/SmallCard"
export default function Courses(props){
    


    return(
         <div className="">
            <div className="pt-[10rem] flex flex-wrap items-center">
                
{allData.SmallCardData.map((item)=>(<SmallCard m="m-8"  icon={item.icon} title={item.title} />))}
            </div>
         </div>
         )}