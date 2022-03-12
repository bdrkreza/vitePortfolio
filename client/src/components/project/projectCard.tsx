import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  Divider,
  Grid,
  List,
  Paper,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { GrFavorite } from "react-icons/gr";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProjectCard({ item }: any) {
  const classes = useStyles();
  const value = 3.5;
  return (
    <>
      <Grid container className={classes.gird}>
        <Grid item md={5} xs={12}>
          <Tooltip
            title={
              <Typography
                fontSize={15}
                style={{
                  color: "lightblue",
                }}
              >
                Lyndon - Agency & Portfolio Theme
              </Typography>
            }
            followCursor
            placement="right-end"
          >
            <Link to={`/project/${item.id}`}>
              <Paper className={classes.paper1}>
                <img className={classes.image} src={item.img} alt="" />
              </Paper>
            </Link>
          </Tooltip>
        </Grid>
        <Grid item md={5} xs={12}>
          <Tooltip
            title={
              <Typography
                fontSize={15}
                style={{
                  color: "lightblue",
                }}
              >
                Lyndon - Agency & Portfolio Theme
              </Typography>
            }
            followCursor
            placement="right-end"
          >
            <Link to={`/project/${item.id}`} className={classes.link}>
              <Paper className={classes.paper2}>
                <List className={classes.title}>
                  <h1>Lyndon - Agency & Portfolio Theme</h1>
                  <Typography variant="body2">
                    by rkreza - Themes in Portfolio
                  </Typography>
                </List>

                <ul className={classes.list}>
                  <li>Portfolio theme for modern creative websites</li>
                  <li>set of agency designer and artist templates</li>
                  <li>Elementor page builder compatibility</li>
                </ul>
              </Paper>
            </Link>
          </Tooltip>
        </Grid>

        <Grid item md={2} xs={12}>
          <Paper className={classes.paper3}>
            <Box className={classes.icons}>
              <MdPlaylistAdd />
              <Divider
                orientation="vertical"
                sx={{
                  background: "var(--background)",
                  height: "25px",
                  ml: 2,
                  mr: 2,
                }}
                variant="middle"
                flexItem
              />
              <GrFavorite />
            </Box>
            <Box>
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>
            <Typography className={classes.date}>
              last updated 05-Mar-22
            </Typography>
            <Button sx={{ mt: 2, mb: 2 }} variant="outlined">
              Live Preview
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  tooltip: {
    backgroundColor: "white",
  },
  gird: {
    minHeight: "250px",
    position: "relative",
    backgroundColor: "var(--darker)",

    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: "var(--success)",
      transformOrigin: "bottom right",
      transition: "transform 1s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },

  image: {
    width: "100%",
    height: "250px",
  },
  paper1: {
    minHeight: "250px",
    padding: "8px",
    backgroundColor: "var(--darker)",
  },
  paper2: {
    padding: "10px",
    minHeight: "250px",
    position: "relative",
    color: "var(--color-text)",
    backgroundColor: "var(--darker)",
    "@media (max-width:900px)": {
      padding: "5px",
      minHeight: "50px",
    },
  },
  title: {
    fontSize: "12px",
    "@media (max-width:900px)": {
      fontSize: "10px",
      marginLeft: 15,
    },
  },
  list: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "var(--gray)",
    "@media (max-width:900px)": {
      display: "none",
    },
  },

  paper3: {
    backgroundColor: "var(--darker)",
    minHeight: "250px",
    padding: "10px",
    display: "flex",
    color: "var(--color-text)",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    "@media (max-width:900px)": {
      flexDirection: "row",
      padding: "5px",
      minHeight: "50px",
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    borderRadius: 1,

    "& svg": {
      m: 1.5,
      fontSize: "25px",
    },
    "& hr": {
      mx: 0.5,
    },
  },
  date: {
    fontSize: "12px",
    mt: 1,
    "@media (max-width:900px)": {
      display: "none",
    },
  },
});
