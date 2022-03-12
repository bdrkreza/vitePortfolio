import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { AiOutlineLayout } from "react-icons/ai";
import ProjectCarousel from "./carousel";
const post = [
  {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Continue reading…",
  },
  {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Continue reading…",
  },
  {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Continue reading…",
  },
];

function ProjectHeader() {
  return (
    <Paper sx={{ background: "var(--darker)" }}>
      <ProjectCarousel post={post} />
      <Box sx={classes.rootBox}>
        <a href="" target="_blank" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ mb: 2 }}>
            <Button sx={classes.button}>
              Live Preview
              <AiOutlineLayout />
            </Button>
          </Button>
        </a>
      </Box>
    </Paper>
  );
}

// MainFeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageText: PropTypes.string.isRequired,
//     linkText: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ProjectHeader;

const classes = {
  rootBox: {
    textAlign: "center",
    margin: "0 auto",
  },
  button: {
    color: "var(--color-text)",
    "& svg": {
      ml: 1,
      fontSize: 20,
    },
  },
};
