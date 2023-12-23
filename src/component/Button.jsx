import React from "react"
export default function Button( props) {
    const {Btn,bg,hover}=props
    return(
        <button className={`py-3 px-5 bg-[${bg}]   hover:bg-[#f561eb] transition shadow-sm text-[#FFFFFF] rounded-[30px] font-[700]`} >{Btn}</button>

    )
     

    
}