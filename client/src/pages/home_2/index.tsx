import { Testimonials } from "../../components";
import {
  FieldOfExperience,
  HeroSection,
  Project,
  Technology,
} from "../../core-ui";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <HeroSection />
      <FieldOfExperience />
      <Project />
      <Technology />
      <Testimonials />
    </div>
  );
}
