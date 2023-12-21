import allData from "../DataArry"
export default function StudentAchivementCard(props){
    return( 

        
   <>
   
   <div className="w-1/2" >

                    <h1 className=" text-center text-6xl text-[#ac3ab6] font-bold">{allData.whyWeAre[0].title}</h1>
                </div>
                
                <div className=" w-1/2 p-4 flex items-center  " >
                    <p  className="text-slate-700 shadow-lg bg-slate-50 p-5 rounded-lg ">
                    {allData.whyWeAre[0].desc}
                    </p>

            </div>

   </>
    
    
    )}