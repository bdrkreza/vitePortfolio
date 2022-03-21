import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface FeaturedPostProps {
  post: {
    title: string;
    image: string;
    tags: string[];
  };
}

export default function ProjectDetailsCard(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={classes.card}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
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
                    {post.tags.map((tags) => (
                      <li>{tags}</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4}>
              <CardMedia component="img" image={post.image} alt={post.image} />
            </Grid>
          </Grid>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

const classes = {
  card: {
    display: "flex",
    backgroundColor: "var(--darker)",
    border: 1,
    h2: {
      color: "var(--color-text)",
      textTransform: "uppercase",
    },
    img: {
      width: "100%",
      height: "100%",
      display: { xs: "none", sm: "block" },
    },
  },
};
