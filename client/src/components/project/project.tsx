import { Grid } from "@mui/material";
import { projectIm } from "../../services/data/data";
import ProjectCard from "./projectCard";
import TabsItems from "./tabsItems";

export default function ProjectSection() {
  return (
    <div>
      <div>
        <h1 className="section_heading" data-outline="project">
          Project
          <hr style={{ border: "solid 2px var(--danger)", width: "250px" }} />
        </h1>
      </div>
      <TabsItems />
      <Grid pt={5} container spacing={3}>
        {projectIm.map((item) => (
          <Grid item md={12} key={item.id}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}