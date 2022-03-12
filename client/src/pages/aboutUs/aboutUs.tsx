import { AboutSection, Education, MySkill, Work } from "../../components";
import { my_skill } from "../../services/data/data";

const content = {
  title: "Hello, I'm",
  name: "Md Rezaul Karim",
  paragraph: ` I am from Dhaka, Bangladesh. A place of beauty and nature. Since
  my childhood, i love art and design. I always try to design stuff
  with my unique point of view. I also love to create things that
  can be use full to others. I started coding since I was in high
  school. Coding is also an art for me. I love it and now I have the
  opportunity to design along with the coding. I find it really
  interesting and I enjoyed the process a lot. My vision is to make
  the world a better place. Now almost everything is becoming better
  than ever. It is time for us to create more good stuff that helps
  the world to become a better place.`,
  action: "Download Cv",
};

export const educationData = [
  {
    varsityName: "Dhaka International University",
    subject: "Bachelor of Science in Computer Science Engineer.",
    date: "January 2015-2018",
  },
  {
    varsityName: "National Polytechnic Institute",
    subject: "Diploma in Computer Science and Engineer",
    date: "April 2009-10 - January 2014",
  },
  {
    varsityName: "Kashiani G.C Pilot High School ",
    subject: "Science",
    date: "January 2009-10",
  },
];

export default function AboutUs() {
  return (
    <div>
      <AboutSection content={content} />
      <Education education={educationData} />
      <Work />
      <MySkill skill={my_skill} />
    </div>
  );
}
