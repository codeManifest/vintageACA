export default function Achivement(props) {
    const {name,position,img}= props
    return (
        <>

            <div className="h-[40vh] w-[20vw] rounded-lg bg-gray-100 shadow-lg p-3 "> 
            <div className="h-[150px] w-[150px] bg-slate-300 rounded-[50%] mx-auto  " >
                <img src={img} alt="" className="rounded-[50%] h-full object-cover overflow-hidden" />
            </div>
            <div className="text-center p-5">

            <h2 className="text-2xl ">{name}</h2>
            <p className="text-[#ac3ab6]">{position}</p>
            </div>
            
            
             </div>

        </>
    )

}