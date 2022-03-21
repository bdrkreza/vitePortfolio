import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import img from "../../assets/images/blog/pricing.png";

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: 0.8,
  height: "600px",
  backgroundSize: "cover",
  backgroundPosition: "center 100%",
  backgroundImage: `url(${img})`,
  borderBottom: 2,
  borderColor: "var(--danger)",
  borderBottomStyle: "groove",
  justifyContent: "center",
});
export default function PricingHeader() {
  const content = {
    "header-p1": "Let's build Your",
    "header-p2": " best web application",
    description:
      " Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from",
    "primary-action": "Test My Project",
  };
  return (
    <section>
      <Container
        maxWidth="sm"
        style={{
          minHeight: "200px",
        }}
      >
        <ImageSrc />
        <Button variant="outlined" sx={{ mt: 8 }}>
          <Box>
            <Typography
              variant="h3"
              component="h3"
              color="var(--color-text)"
              gutterBottom={true}
            >
              <Typography color="secondary" variant="h3" component="span">
                {content["header-p1"]}
              </Typography>
              <Typography variant="h3" component="span">
                {content["header-p2"]}
              </Typography>
            </Typography>
            <Container maxWidth="sm" sx={{ color: "var(--color-text)" }}>
              <Typography variant="subtitle1" paragraph={true}>
                {content["description"]}
              </Typography>
            </Container>
            <Link to="/project" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                {content["primary-action"]}
              </Button>
            </Link>
          </Box>
        </Button>
      </Container>
    </section>
  );
}
