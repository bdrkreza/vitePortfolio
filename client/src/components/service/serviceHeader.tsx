import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import img from "../../assets/images/blog/service.jpg";

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: 0.6,
  height: "600px",
  backgroundSize: "cover",
  backgroundPosition: "center 100%",
  backgroundImage: `url(${img})`,
  border: "solid red",
  borderBottomStyle: "groove",
  justifyContent: "center",
});
export default function ServiceHeader({ content }: any) {
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
            <Box mt={3}>
              <Button variant="contained" color="secondary">
                {content["primary-action"]}
              </Button>
            </Box>
          </Box>
        </Button>
      </Container>
    </section>
  );
}
