import { Testimonials } from "../../components";
import { FieldOfExperience, HeroSection, Project } from "../../core-ui";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <HeroSection />
      <Project />
      <FieldOfExperience />
      <Testimonials />
    </div>
  );
}
