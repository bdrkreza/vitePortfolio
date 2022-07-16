import { Container, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import url from "../../../assets/icons/brandLogo.webp";
import ButtonHeader from "../../button/aboutButton";
import HeroCard from "./heroCard";
import MediaLink from "./mediaLink";
type Props = {};

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center 40%",
});

export default function HeroSection({}: Props) {
  return (
    <>
      <Container
        sx={{
          color: "black",
          backgroundColor: "var(--background)",
          height: "730px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${url})` }} />
        <motion.div initial={{ x: "100%" }} animate={{ x: "calc(0vw - 10%)" }}>
          <Typography
            sx={{
              color: "var(--color-title)",
              marginBottom: "30px",
              fontSize: "100px",
              fontFamily:
                "LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif",
              fontStyle: "inherit",
              lineHeight: ".9380665066",
            }}
          >
            Rezaul Karim
          </Typography>
          <Typography
            sx={{
              color: "var(--color-text)",
              marginBottom: "30px",
              fontSize: "30px",
              fontFamily:
                "LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif",
              fontStyle: "italic",
              lineHeight: ".9380665066",
            }}
          >
            Interactive Full Stack Developer
          </Typography>
          <ButtonHeader />
        </motion.div>
        <MediaLink />
      </Container>
      <HeroCard />
    </>
  );
}
