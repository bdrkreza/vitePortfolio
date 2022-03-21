import { Grid, Typography } from "@mui/material";
export default function ProjectMain({ project }: any) {
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
      <img src={project.imageLevel} style={{ width: "100%" }} alt="" />
    </Grid>
  );
}
