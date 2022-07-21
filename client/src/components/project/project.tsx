import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_FILTER_PROJECT } from "../../services";
import ProjectCard from "./projectCard";
import TabsItems from "./tabsItems";

export default function ProjectSection() {
  const [filter, setFilter] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { loading, error, data, refetch } = useQuery(GET_FILTER_PROJECT, {
    variables: {
      filter: filter,
      skip: 1,
      take: 6,
    },
  });
  console.log(data);
  // console.log(" fetch filter", filter);
  // console.log("fetch data", data);
  useEffect(() => {
    setFilter(category);
  }, [category]);

  return (
    <>
      <div style={{ marginTop: "70px" }}>
        <h1 className="section_heading" data-outline="project">
          Project
          <hr style={{ border: "solid 2px var(--danger)", width: "250px" }} />
        </h1>
      </div>
      <TabsItems setCategory={setCategory} category={category} />
      <Grid pt={5} container spacing={3}>
        {data?.filterProject.map((item: any) => (
          <Grid item md={12} key={item._id}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
