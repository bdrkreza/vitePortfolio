import { Grid, Typography } from "@mui/material";
import image from "../../assets/images/portfolio/gallery/projectScreen.png";
export default function ProjectMain() {
  return (
    <Grid item xs={12} md={8}>
      <Typography
        variant="h6"
        sx={{ color: "var(--color-text)", fontSize: 30 }}
        gutterBottom
      >
        From the firehose
      </Typography>
      <hr />
      <img src={image} style={{ width: "100%" }} alt="" />
    </Grid>
  );
}
