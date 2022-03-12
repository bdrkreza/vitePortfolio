import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import ProjectDetailsCard from "./projectDetailsCard";
import ProjectHeader from "./projectHeader";
import ProjectMain from "./projectMain";
import ProjectSidebar from "./projectSidebar";

const featuredPosts = [
  {
    title: "User Featured",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "admin Feature",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

export default function ProjectDetailsSection() {
  let { projectId } = useParams();
  return (
    <div>
      <ProjectHeader />
      <Grid container spacing={4} pt={5}>
        {featuredPosts.map((post) => (
          <ProjectDetailsCard key={post.title} post={post} />
        ))}
      </Grid>

      <Grid container spacing={5} sx={{ mt: 3 }}>
        <ProjectMain />
        <ProjectSidebar />
      </Grid>
    </div>
  );
}
