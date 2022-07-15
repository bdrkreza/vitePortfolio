import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TAuth } from "../../types/types";

interface FeaturedPostProps {
  admin: TAuth | undefined;
  user: TAuth | undefined;
}

export default function ProjectDetailsCard({ admin, user }: FeaturedPostProps) {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid item md={6}>
        <Paper>
          <CardActionArea component="a" href="#">
            <Card sx={classes.card}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      Admin Feature
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{ color: "var(--gray)" }}
                      paragraph
                    >
                      <ul>
                        {admin?.tags.map((tags: string) => (
                          <li>{tags}</li>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    image={admin?.image}
                    alt={admin?.image}
                  />
                </Grid>
              </Grid>
            </Card>
          </CardActionArea>
        </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper>
          <CardActionArea component="a" href="#">
            <Card sx={classes.card}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      User feature
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{ color: "var(--gray)" }}
                      paragraph
                    >
                      <ul>
                        {user?.tags.map((tags: string) => (
                          <li>{tags}</li>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    image={user?.image}
                    alt={user?.image}
                  />
                </Grid>
              </Grid>
            </Card>
          </CardActionArea>
        </Paper>
      </Grid>
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
