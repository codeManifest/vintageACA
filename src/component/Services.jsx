import allData from "../DataArry";
import Button from "./Button";
import ServicesCard from "./ServicesCard";


export default function Services(){
    return(

        <div className=" flex justify-evenly items-center flex-wrap"> 
        <div className="w-2/4 p-5">

        <h5 className="text-[#C930BE] font-semibold">Services</h5>
        <h1 className="text-6xl font-bold ">what we <br /> Provide to you</h1>
        <p className="leading-normal text-slate-400 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta deserunt cumque, nam eaque distinctio. Ducimus deserunt quaerat rem, saepe quos, sed a similique qui odit repellendus et magni sapiente?</p>
        <Button Btn="View all Services"/>


        </div>  
        <div className="flex flex-wrap w-2/5 " >
{/* copy card comp */}
{allData.Services.map((item)=>(<ServicesCard icon={item.icons} title={item.title} desc={item.desc}/>))}



{/* to here */}
        </div>
        </div>
    )
}