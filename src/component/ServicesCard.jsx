import allData from "../DataArry";
export default function ServicesCard(props){
    const {icon,title,desc} = props;
    return( 
    
        <div className=" h-[25vh] w-[10vw] bg-white shadow-gray-300 shadow-xl block rounded-lg p-3 m-2 hover:invert hover:drop-shadow-xl transition duration-500 ">
        <div className="h-[100px] w-[100px] rounded-[50%] border-[2px]  border-r-purple-600    flex items-center justify-center "> {icon}
        
        </div>
        <h2 className="font-semibold py-2 text-xl">
            {title}
        </h2>
        <p className="pb-2 text-xs text-gray-400 ">{desc}</p>
       
    </div>
    
    )}