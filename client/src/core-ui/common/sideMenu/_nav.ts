import about from "../../../assets/screenshot/aboutScreenshot.png";
import contact from "../../../assets/screenshot/constactScreenshot.png";
import home from "../../../assets/screenshot/dark/homedark.png";
import aboutlight from "../../../assets/screenshot/light/about.png";
import homelight from "../../../assets/screenshot/light/home.png";
import pricing from "../../../assets/screenshot/pricingScreenshot.png";
import project from "../../../assets/screenshot/projectScreenshot.png";
import service from "../../../assets/screenshot/serviceScreenshot.png";

export const nav_item = [
  {
    path: "/",
    label: "Home",
    screen: home,
  },
  {
    path: "project",
    label: "Project",
    screen: project,
  },
  {
    path: "about",
    label: "About",
    screen: about,
  },
  {
    path: "service",
    label: "Service",
    screen: service,
  },
  {
    path: "pricing",
    label: "Pricing",
    screen: pricing,
  },

  {
    path: "contact",
    label: "Contact",
    screen: contact,
  },
];

export const nav = [
  {
    path: "/",
    label: "Home",
    screen: homelight,
  },
  {
    path: "project",
    label: "Project",
    screen: project,
  },
  {
    path: "about",
    label: "About",
    screen: aboutlight,
  },
  {
    path: "service",
    label: "Service",
    screen: service,
  },
  {
    path: "pricing",
    label: "Pricing",
    screen: pricing,
  },

  {
    path: "contact",
    label: "Contact",
    screen: contact,
  },
];
