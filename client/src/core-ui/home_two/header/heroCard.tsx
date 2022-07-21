import { CardMedia, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import book from "../../../assets/images/home/book.png";
import dev from "../../../assets/images/home/dev.png";
import tem from "../../../assets/images/home/tem.png";
import HeroButton from "../../button/heroButton";

export default function HeroCard() {
  return (
    <>
      <Grid container spacing={{ xs: 8, md: 10 }}>
        {data.map(({ title, description, image, link }, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to={link}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Card
                variant="outlined"
                sx={{
                  maxHeight: 250,
                  display: "flex",
                  boxShadow: "-3px 1px 2px rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  maxWidth: "364px",
                  height: "245px",
                  padding: "0 4px 0 35px",
                  transition: "256ms top",
                  backgroundColor: "var(--color-section)",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "var(--color-text)",
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        letterSpacing: "-0.8px",
                        lineHeight: "36px",
                        fontFamily: "serif",
                        marginBottom: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        letterSpacing: "-0.4px",
                        lineHeight: "18px",
                        fontFamily: "serif",
                        marginBottom: "20px",
                        maxWidth: "160px",
                      }}
                    >
                      {description}
                    </Typography>
                    <Link to={link} style={{ textDecoration: "none" }}>
                      <HeroButton />
                    </Link>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image={image}
                    alt="green iguana"
                  />
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const data = [
  {
    title: "Template Design",
    description: "Top notch, tailored design for your product",
    image: tem,
    link: "/project",
  },
  {
    title: "App Development",
    description: "Future proof JamStack Development",
    image: dev,
    link: "/development",
  },
  {
    title: "Education",
    description: "Top notch, tailored design for your product",
    image: book,
    link: "/education",
  },
];
