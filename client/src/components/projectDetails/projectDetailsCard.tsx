import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../../assets/images/portfolio/gallery/project.png";
interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function ProjectDetailsCard(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={classes.card}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ color: "var(--gray)" }}
              paragraph
            >
              <ul>
                <li>Portfolio theme for modern creative websites</li>
                <li>set of agency designer and artist templates</li>
                <li>Elementor page builder compatibility</li>
              </ul>
            </Typography>
          </CardContent>
          <CardMedia component="img" image={image} alt={post.imageLabel} />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

const classes = {
  card: {
    display: "flex",
    backgroundColor: "var(--darker)",
    h2: {
      color: "var(--color-text)",
      textTransform: "uppercase",
    },
    img: {
      width: 160,
      display: { xs: "none", sm: "block" },
    },
  },
};
