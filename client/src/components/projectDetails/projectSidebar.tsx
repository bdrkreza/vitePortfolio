import { Grid, Paper, Typography } from "@mui/material";

export default function ProjectSidebar() {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {content.name}
        </Typography>
        <Typography>{content.title}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        {content.archive}
      </Typography>
    </Grid>
  );
}

const content = {
  name: "About",
  title: `Etiam porta sem malesuada magna mollis euismod. Cras mattis
  consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
  sed consectetur.',`,
  archive: "Archives",
};
