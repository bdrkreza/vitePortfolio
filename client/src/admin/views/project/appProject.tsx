import { Grid } from "@mui/material";
import AppProjectCard from "./section/appProjectCard";

export default function AppProject() {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[1, 2, 3].map((_, index) => (
          <Grid item xs={2} sm={4} md={4} sx={{ mt: 5 }} key={index}>
            <AppProjectCard key={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
