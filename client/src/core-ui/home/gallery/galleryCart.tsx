import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function GalleryCart({ item }: any) {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to={item.link} style={{ textDecoration: "none" }}>
        <Paper sx={classes.rootBox}>
          <img src={item.img} alt="" />
        </Paper>
        <Button sx={{ mt: 2, mb: 2 }} variant="outlined">
          {item.title}
        </Button>
      </Link>
    </div>
  );
}

const classes = {
  rootBox: {
    backgroundColor: "var(--teal)",
    img: {
      width: "100%",
      objectFit: "cover",
      objectPosition: "top",
      height: "270px",
      transition: "4s all ease",
      cursor: "nResize",
      "&:hover": {
        objectPosition: "bottom",
      },
    },
  },
};
