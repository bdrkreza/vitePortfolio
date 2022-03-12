import { Box, Card } from "@mui/material";
import image from "../../assets/images/map.png";

export default function GoogleMap() {
  return (
    <Box sx={classes.map_container}>
      <Box sx={classes.map_section}>
        <Card sx={classes.map_card}>
          <h3>Here is me</h3>
          <h5>Tejgaon-Farmgate, Dhaka, Bangladesh</h5>
          <a
            className="map__card__link"
            href="https://goo.gl/maps/wg1AiwWsheaNBorb6"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </Card>
      </Box>
    </Box>
  );
}

const classes = {
  map_container: {
    backgroundImage: `url(${image})`,
    minHeight: "450px",
  },
  map_section: {
    position: "relative",
    marginTop: "100px",
    minHeight: "400px",
  },
  map_card: {
    position: "absolute",
    right: "20%",
    bottom: "10%",
    padding: "2rem",
    backgroundColor: "var(--background)",
    width: "100%",
    maxWidth: "300px",
    borderRadius: "12px",
    color: "#bbb",
    h3: {
      fontSize: "3rem",
      marginBottom: "1rem",
    },
    a: {
      display: "inline-block",
      fontSize: "1.6rem",
      marginTop: "1rem",
      textDecoration: "underline",
    },
  },
};
