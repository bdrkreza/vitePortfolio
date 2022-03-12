import { Grid } from "@mui/material";
import { projectIm } from "../../../services/data/data";
import GalleryCart from "./galleryCart";

export default function OurGallery() {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={classes.grid}>
        {projectIm.map((item: any, index: any) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <GalleryCart item={item} />
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
