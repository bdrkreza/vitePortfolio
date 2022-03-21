import { Grid } from "@mui/material";
import { data } from "../../services/data/projectdata";
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
        {data.map((item) => (
          <Grid item md={12} key={item._id}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
