import allData from "../DataArry";
import Button from "./Button";
import ServicesCard from "./ServicesCard";


export default function Services() {
    return (

        <div className=" flex justify-evenly items-center flex-wrap max-sm:block ">
            <div className="w-2/4 max-sm:w-full  p-5">

                <h5 className="text-[#C930BE] font-semibold">Services</h5>
                <h1 className="text-6xl font-bold ">what we <br /> Provide to you</h1>
                <p className="leading-normal text-slate-400 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta deserunt cumque, nam eaque distinctio. Ducimus deserunt quaerat rem, saepe quos, sed a similique qui odit repellendus et magni sapiente?</p>
                <Button Btn="View all Services" bg="#C930BE" />


            </div>
            <div className="flex flex-wrap w-2/5 max-sm:w-full max-sm: min-h-min max-sm:block" >
                {/* copy card comp */}
                {allData.Services.map((item) => (<ServicesCard icon={item.icons} title={item.title} desc={item.desc} />))}



                {/* to here */}
            </div>
        </div>
    )
}