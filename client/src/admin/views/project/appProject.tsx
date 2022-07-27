import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { data } from "../../../core-ui/home_two/project/project";

import AppProjectCard from "./project/appProjectCard";
import ProjectSearch from "./project/projectSearch";
import ProjectSort from "./project/projectSort";
const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];
export default function AppProject() {
  return (
    <Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Project
        </Typography>
        <Link style={{ textDecoration: "none" }} to="/dashboard/add-project">
          <Button variant="contained" startIcon={<AddIcon />}>
            New Project
          </Button>
        </Link>
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
        {data.map((data, index) => (
          <Grid item xs={2} sm={4} md={4} sx={{ mt: 5 }} key={index}>
            <AppProjectCard key={index} data={data} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
