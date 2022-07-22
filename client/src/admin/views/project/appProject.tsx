import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AddProject from "./section/addProject";
import AppProjectCard from "./section/appProjectCard";
import ProjectSearch from "./section/projectSearch";
import ProjectSort from "./section/projectSort";
const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];
export default function AppProject() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Project
        </Typography>
        <AddProject />
      </Stack>

      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <ProjectSearch />
        <ProjectSort options={SORT_OPTIONS} />
      </Stack>

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
    </React.Fragment>
  );
}
