export default function SignUp (props){
    return(


    <div className="h-[60vh] bg-slate-50 flex justify-around items-center" >
        <div className="w-1/2 p-2">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et accusantium at eum explicabo magni tempora, perferendis tempore expedita. Facere tenetur sunt nobis exercitationem omnis consectetur dignissimos, cumque architecto distinctio?</p>
        </div>
        <div className="flex flex-col">
            <input type="text" name="" id="" placeholder="Name"  className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 " />
            <input type="text" name="" id="" placeholder="@Username" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 " />
            <input type="email" name="" id="" placeholder="User Email" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 " />
            <input type="password" name="" id="" placeholder="Password" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 " />
            <input type="password" name="" id="" placeholder="Confirm Password" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 " />
            <input type="submit" value="SignUp" className="py-2 px-4 rounded-lg m-1 shadow-lg border-2 text-black" />
            
        </div>


    </div>


    )}