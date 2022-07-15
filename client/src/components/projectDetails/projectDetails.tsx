import { Grid } from "@mui/material";
import { IProjects } from "../../types/types";
import ProjectAside from "./projectAside";
import ProjectDetailsCard from "./projectDetailsCard";
import ProjectHeader from "./projectHeader";
import ProjectMain from "./projectMain";

interface IProps {
  project: IProjects | null;
}

export default function ProjectDetailsSection({ project }: IProps) {
  console.log(project);
  return (
    <>
      <Grid>
        <ProjectHeader
          screenshots={project?.screenshots}
          liveLink={project?.liveLink}
        />
      </Grid>
      <Grid spacing={4} pt={5}>
        <ProjectDetailsCard
          admin={project?.adminFeature}
          user={project?.userFeature}
        />
      </Grid>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} md={8}>
          <ProjectMain image={project?.imagelevel} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProjectAside about={project?.about} />
        </Grid>
      </Grid>
    </>
  );
}
