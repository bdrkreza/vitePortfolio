import { Divider, Grid, Typography } from "@mui/material";
import alibg from "../../../assets/images/home/analizybg.webp";
import bookbg from "../../../assets/images/home/bookingb.webp";
import elebg from "../../../assets/images/home/elebg.webp";
import estbg from "../../../assets/images/home/estibg.webp";
import ltcbg from "../../../assets/images/home/ltcbg.webp";
import oxbg from "../../../assets/images/home/oxbg.webp";
import ox from "../../../assets/images/home/phone1.webp";
import book from "../../../assets/images/home/phone2.png";
import lite from "../../../assets/images/home/phone3.webp";
import prnbg from "../../../assets/images/home/prown.webp";
import px from "../../../assets/images/home/px.png";
import prn from "../../../assets/images/home/tablet.png";
import dev from "../../../assets/images/home/tablet1.png";
import est from "../../../assets/images/home/tablet2.png";
import ali from "../../../assets/images/home/tablet3.png";
import ProjectCard from "./projectCard";
type Props = {};

export default function Project({}: Props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className="section_heading" data-outline="Projects showcase">
          Projects showcase
          <Divider />
        </h1>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "sans-serif",
            color: "var(--color-text)",
          }}
        >
          Take a look at the products we’ve recently finished and see case
          studies <br /> for the full story on how we’ve helped our clients
          achieve success in the digital world.
        </Typography>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        pt={5}
      >
        {data.reverse().map((item, index) => (
          <Grid item xs={2} sm={6} md={6} key={index}>
            <ProjectCard data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export const data = [
  {
    title: "Elevato",
    description:
      "Elevato went through a radical, but necessary redesign process. It resulted in a modern, engaging and beautful visual refreshment.",
    image: dev,
    url: elebg,
  },
  {
    title: "Oxstreet",
    description:
      "We did a complete redesign of Oxstreet online shop mobile experience: products exposure, catalogue, checkout and payment process.",
    image: ox,
    url: oxbg,
    img: px,
  },
  {
    title: "Analizy.pl",
    description:
      "We designed and coded the largest financial analytics platform in Central Europe , including news feeds, fund catalogues, graphs and more.",
    image: ali,
    url: alibg,
  },
  {
    title: "Litecoin",
    description:
      "We created a mobile wallet app and designed an entire transition process for the pioneers of the ",
    image: lite,
    url: ltcbg,
  },
  {
    title: "Prown.io",
    description:
      "Prown is a young startup that helps with selling original products and verifying their authenticity through providing digital ownerships.",
    image: prn,
    url: prnbg,
  },
  {
    title: "Booking Holdings",
    description:
      "Booking wanted to see a  of one of their products, strongly inspired by the newest trends  in UI design - modern minimal and glassmorphism",
    image: book,
    url: bookbg,
  },
  {
    title: "Estibits",
    description:
      "We designed and coded a modern, innovative financial platform , that monitors and predicts the cryptocurrency  trends using aritificial intelligence.",
    image: est,
    url: estbg,
  },
];
