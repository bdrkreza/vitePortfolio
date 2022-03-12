import { BiCodeBlock, BiCodeCurly } from "react-icons/bi";
import { BsJournalCode } from "react-icons/bs";
import {
  FaBootstrap,
  FaCss3,
  FaDev,
  FaHtml5,
  FaLaptopCode,
  FaNode,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { FcDataConfiguration, FcMultipleDevices } from "react-icons/fc";
import { MdDevices } from "react-icons/md";
import {
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGraphql,
  SiHeroku,
  SiIcloud,
  SiJavascript,
  SiLaravel,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import img1 from "../../assets/images/portfolio/gallery/aboutScreen.png";
import img4 from "../../assets/images/portfolio/gallery/blogScreen.png";
import img6 from "../../assets/images/portfolio/gallery/dashScreen.png";
import img5 from "../../assets/images/portfolio/gallery/landingScreen.png";
import img2 from "../../assets/images/portfolio/gallery/projectScreen.png";
import img3 from "../../assets/images/portfolio/gallery/seviceScreen.png";
export const serviceData = [
  {
    name: "Web Design",
    icons: FaLaptopCode,
    describe:
      "rkreza is a person of commitment. He is really good at what he is doing. I really like his work. Especially the unique point of view of designing.",
  },
  {
    name: "Web development",
    icons: BiCodeBlock,
    describe:
      "Really amazing communication skills. Always understand what I am trying to achieve. Also, his work is really amazing.  Do really high-quality work.",
  },
  {
    name: "app Development",
    icons: MdDevices,
    describe:
      "Really hard-working person. Deliver the work as promised. Planning to work more with this person.",
  },
  {
    name: "Web Responsive",
    icons: FcMultipleDevices,
    describe:
      "Responsive Design which will be working almost all browsers and screens, Mobile, TaB, PC etc.",
  },
];

export const projectIm = [
  {
    id: 1,
    img: img1,
    altText: "Slide 1",
    link: "about",
    title: "VIEW ABOUT PAGE",
  },
  {
    id: 2,
    img: img2,
    altText: "Slide 2",
    title: "VIEW PROJECT PAGE",
    link: "project",
  },
  {
    id: 3,
    img: img3,
    altText: "Slide 3",
    title: "VIEW SERVICE PAGE",
    link: "service",
  },
  {
    id: 4,
    img: img4,
    altText: "Slide 3",
    title: "VIEW BLOG PAGE",
    link: "blog",
  },
  {
    id: 5,
    img: img5,
    altText: "Slide 3",
    title: "VIEW LANDING PAGE",
    link: "landing-page",
  },
  {
    id: 6,
    img: img6,
    altText: "Slide 3",
    title: "VIEW DASHBOARD PAGE",
    link: "/",
  },
];

export const cart_pricing = [
  {
    name: "free plan",
    price: 400,
    suffix: "month",
    title: "Basic",
    benefit1: "Web Design",
    benefit2: "Web Development",
    benefit3: "Responsive Design",
    benefit4: "Fully editable files",
  },
  {
    name: "free plan",
    price: 400,
    suffix: "month",
    title: "Standard",
    benefit1: "Web Design",
    benefit2: "Web Development",
    benefit3: "Responsive Design",
    benefit4: "Fully editable files",
  },
  {
    name: "free plan",
    title: "Premium",
    price: 400,
    suffix: "month",
    benefit1: "Web Design",
    benefit2: "Web Development",
    benefit3: "Responsive Design",
    benefit4: "Fully editable files",
  },
];
export const my_skill = [
  {
    name: "Expertise",
    expertise: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#E9D44D",
      },

      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#2F74C0",
      },
      {
        name: "ReactJs",
        icon: FaReact,
        color: "#61DBFB",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#4CAB3D",
      },
      {
        name: "HTML",
        icon: FaHtml5,
        color: "#f06529",
      },
      {
        name: "CSS",
        icon: FaCss3,
        color: "#2965f1",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "#7C47C5",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#1AB0B5",
      },
      {
        name: "MaterialUI",
        icon: SiMaterialui,
        color: "#007FFF",
      },
    ],
  },

  {
    name: "Comfortable",
    comfortable: [
      {
        name: "firebase",
        icon: SiFirebase,
        color: "#F7C630",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "#7248B6",
      },
      {
        name: "nodeJS",
        icon: FaNode,
        color: "#659B60",
      },
      {
        name: "ExpressJS",
        icon: SiExpress,
        color: "F7F7F7",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        color: "#DE33A6",
      },
      {
        name: "TypeORM",
        icon: BiCodeCurly,
        color: "#E93524",
      },
      {
        name: "Mongoose",
        icon: FcDataConfiguration,
        color: "#880000",
      },
    ],
  },
  {
    name: "Familiar",
    familiar: [
      {
        name: "React Native",
        icon: FaReact,
        color: "#61DBFB",
      },
      {
        name: "VueJS",
        icon: FaVuejs,
        color: "#40B27F",
      },
      {
        name: "php",
        icon: SiPhp,
        color: "#647CB9",
      },
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#EB4E43",
      },
      {
        name: "Oracle",
        icon: SiOracle,
        color: "#E51B23",
      },
      {
        name: "SQL",
        icon: SiMysql,
        color: "#00718B",
      },
      {
        name: "postgresql",
        icon: SiPostgresql,
        color: "#31648C",
      },
    ],
  },
  {
    name: "Deploy",
    deploy: [
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#161414",
      },
      {
        name: "firebase",
        icon: SiFirebase,
        color: "#F7C630",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#24C1B1",
      },
      {
        name: "Heroku",
        icon: SiHeroku,
        color: "#645FA1",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#000000",
      },
      {
        name: "Cloudinary",
        icon: SiIcloud,
        color: "#006DC8",
      },
    ],
  },

  {
    name: "Tools",
    tools: [
      {
        name: "DevTool",
        icon: FaDev,
        color: "#169A5A",
      },
      {
        name: "VSCode",
        icon: SiVisualstudiocode,
        color: "#0074D0",
      },
      {
        name: "NodePad++",
        icon: BsJournalCode,
        color: "#DE33A6",
      },
    ],
  },
];
