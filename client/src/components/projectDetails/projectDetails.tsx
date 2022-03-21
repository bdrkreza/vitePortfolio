import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { data } from "../../services/data/projectdata";
import ProjectDetailsCard from "./projectDetailsCard";
import ProjectHeader from "./projectHeader";
import ProjectMain from "./projectMain";
import ProjectSidebar from "./projectSidebar";

export default function ProjectDetailsSection() {
  let { projectId } = useParams();
  const project = data.filter((id) => id._id === projectId);
  console.log(project);
  return (
    <div>
      <ProjectHeader screenshots={project[0]} />
      <Grid container spacing={4} pt={5}>
        {project[0].auth.map((post) => (
          <ProjectDetailsCard key={post.title} post={post} />
        ))}
      </Grid>

      <Grid container spacing={5} sx={{ mt: 3 }}>
        <ProjectMain project={project[0]} />
        <ProjectSidebar project={project[0].about} />
      </Grid>
    </div>
  );
}
