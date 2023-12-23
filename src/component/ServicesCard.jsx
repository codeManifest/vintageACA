import allData from "../DataArry";
export default function ServicesCard(props){
    const {icon,title,desc} = props;
    return( 
    
        <div className="  h-[25vh]  md:w-[15vw] w-[10vw] max-sm:max-h-max max-sm:w-full bg-white shadow-gray-200 shadow-xl block rounded-lg p-3 m-2  hover:border-violet-400 hover:border-[1px] transition duration-500 ">
        <div className="h-[100px] w-[100px] max-sm:h-[40px] max-sm:w-[40px] md:h-[50px]  md:w-[50px] rounded-[50%] border-[2px]  border-r-purple-600 flex items-center justify-center"> {icon}
        
        </div>
        <h2 className="font-semibold py-2 text-xl md:text-sm">
            {title}
        </h2>
        <p className="pb-2 text-xs text-gray-400 ">{desc}</p>
       
    </div>
    
    )}