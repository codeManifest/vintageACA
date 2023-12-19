import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
// icons import
import { HiOutlineComputerDesktop } from "react-icons/hi2"; //use in small card (Desktop icon)
import { HiChartBar } from "react-icons/hi"; //use in small card (Chart icon)
import { MdDesignServices } from "react-icons/md"; //use in small card (Design icon)
import stud1 from './img/stud (1).jpg'
import stud2 from './img/stud (2).jpg'
import stud3 from './img/stud (3).jpg'


const Menulist = [
  {key: 1, menu: "Home", to: "/", path: <Homepage /> },
  {key: 2, menu: "About", to: "/about", path: "<About/> " },
  {key: 3, menu: "Courses", to: "/courses", path: "<Courses/>" },
  {key: 4,menu: "Events", to: "/Events", path: <Events /> },
];

const SmallCardData = [
  { 
    key:1,
    icon: <HiOutlineComputerDesktop size={50} color="white" />,
    title: "Computer Literacy",
    bg: "#FA6C9C",
  },
  {
    key:2,
    icon: <HiChartBar size={50} color="white" />,
    title: "Accounting & Tally",
    bg: "#EE64E4",
  },
  {
    key:3,
    icon: <MdDesignServices size={50} color="white" />,
    title: "Design & Marketing",
    bg: "#EEAF32",
  },
];

const whyWeAre = [
  {
    key:1,
    title: "Who we are ?",
    desc: "Vintage Academy is your gateway to comprehensive computer education, specializing in accounting and design. Our courses blend cutting-edge theory with hands-on skills, ensuring that students are well-equipped for the ever-evolving tech landscape. What sets us apart is a commitment to bridging theory with practical application, facilitated by a team of experienced instructors and state-of-the-art facilities. At Vintage Academy, we empower individuals to thrive in the dynamic world of computing, shaping them into well-rounded professionals ready to meet industry demands. Choose Vintage Academy for a transformative education that goes beyond the ordinary, opening doors to a future of innovation and success.",
  },
];

const Stud_Achivements = [
  {
    key: 1,
    img: stud1,
    StudentName: "Lucy",
    Position: "Web Designer",
  },
  {
    key: 2,
    img: stud2,
    StudentName: "Rakesh Kumar",
    Position: "Graphics Designer",
  },
  {
    key: 3,
    img: stud3,

    StudentName: "Pritam",
    Position: "UI/UX Designer",
  },
];

const allData = {
  Menulist,
  SmallCardData,
  whyWeAre,
  Stud_Achivements
};
export default allData;
