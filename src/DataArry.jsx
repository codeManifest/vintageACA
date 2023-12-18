import Homepage from './pages/Homepage'
import Events from './pages/Events'
// icons import
import { HiOutlineComputerDesktop } from "react-icons/hi2"; //use in small card (Desktop icon)
import { HiChartBar } from "react-icons/hi"; //use in small card (Chart icon)
import { MdDesignServices } from "react-icons/md"; //use in small card (Design icon)







const Menulist=[
    { menu:"Home",to:"/",path:<Homepage/>,  },
    { menu:"About",to:"/about",path:"<About/> " },
    { menu:"Courses",to:"/courses",path:"<Courses/>"   },
    { menu:"Events",to:"/Events", path:<Events/>  },

]

const SmallCardData=[
    {
        icon:<HiOutlineComputerDesktop size={50} color="white" />,
        title:'Computer Literacy',
        bg:'#FA6C9C'

    },
    {
        icon:<HiChartBar size={50} color="white" />,
        title:'Accounting & Tally',
        bg:'#EE64E4'
        
    },
    {
        icon:<MdDesignServices size={50} color="white" />,
        title:'Design & Marketing',
        bg:'#EEAF32'


    }
]

const whyWeAre=[{
    title : "Who we are ?",
    desc: "Vintage Academy is your gateway to comprehensive computer education, specializing in accounting and design. Our courses blend cutting-edge theory with hands-on skills, ensuring that students are well-equipped for the ever-evolving tech landscape. What sets us apart is a commitment to bridging theory with practical application, facilitated by a team of experienced instructors and state-of-the-art facilities. At Vintage Academy, we empower individuals to thrive in the dynamic world of computing, shaping them into well-rounded professionals ready to meet industry demands. Choose Vintage Academy for a transformative education that goes beyond the ordinary, opening doors to a future of innovation and success."
}]


const allData={
    Menulist,
    SmallCardData,
    whyWeAre
}
export default allData;