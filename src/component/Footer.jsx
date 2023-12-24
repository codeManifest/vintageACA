import GoogleMap from "./GoogleMap";
import { FaInstagram, FaLocationDot, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Button from "./Button"



export default function Footer() {
  return (
    <>
      <footer className="relative w-full  ">
        <hr />

        <div className="  flex justify-around flex-wrap items-center h-[40rem] max-sm:block   ">
          <div className="w-1/4  m-1 p-2 max-sm:w-full">
            <h2 className="text-2xl font-bold py-1">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus rerum iste similique velit. Recusandae fuga sed
              voluptates nam? Similique, architecto.
            </p>
          </div>
          <div className="w-1/4  m-1 p-2 max-sm:w-full ">

            <div className="w-full">

              <h2 className="text-2xl font-bold ">Location</h2>
              <p className="flex items-center py-2">
                <span className="pr-1">
                  
                  <FaLocationDot />
                </span>
                Guwahati, RGB road MX plaza, 2nd Floor.
              </p>
              
                <label className="">Newsletter :</label>
              <div className=" py-2 rounded-xl x-auto w-full flex   ">
                

                <input type="email" name="" id="" className=" px-5 py-2 rounded-md mr-2 m border " placeholder="example@gmail.com" />
                <button className="px-5 py-2 bg-fuchsia-500 rounded-1xl ">{<IoIosSend color="white" size={30}/>}  </button>
              </div>
                
              


            </div>
            


            


          </div>
          <div className="w-1/4 m-1 p-2 max-sm:w-full">
            <h2 className="text-2xl font-bold">Social Icons</h2>
            <div className="flex mt-2 w-1/2" > 

                <span className="  cursor-pointer hover:scale-[1.2] transition-all " > <FaFacebook  color="blue" size={25}/></span>
                <span className="ml-4 cursor-pointer hover:scale-[1.2] transition-all" > <FaInstagram color="red" size={25}/></span>
                <span className="ml-4 cursor-pointer hover:scale-[1.2] transition-all" > <FaYoutube color="red" size={25}/></span>
                <span className="ml-4 cursor-pointer hover:scale-[1.2] transition-all" > <FaTwitter color="blue" size={25}/></span>
            
            </div>
            
            
          </div>
        </div>
        <div className="max-sm:mt-[-10rem]">

        <hr className=" absolute bottom-20 h-[1px] w-full "/>
        <p className="text-center pb-10">All rights are reserved By <span className="font-bold">Alen Academy</span> </p>
        </div>
      </footer>
    </>
  );
}
