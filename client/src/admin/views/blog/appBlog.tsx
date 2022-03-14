// components
import ElevatorIcon from "@mui/icons-material/Elevator";
// material
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BlogPostCard from "./section/blogPostCard";
import BlogPostsSearch from "./section/blogPostsSearch";
import BlogPostsSort from "./section/blogPostsSort";
//

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

export default function AppBlog() {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="#"
          startIcon={<ElevatorIcon />}
        >
          New Post
        </Button>
      </Stack>

      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <BlogPostsSearch />
        <BlogPostsSort options={SORT_OPTIONS} />
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <BlogPostCard key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
