import { Grid } from "@mui/material";
import { homeScreen } from "../../../services/data/homeScreen";
import GalleryCart from "./galleryCart";

export default function OurGallery() {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={classes.grid}>
        {homeScreen.map((link) => (
          <Grid item xs={12} sm={6} md={6} key={link.id}>
            <GalleryCart page={link} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const classes = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
};
