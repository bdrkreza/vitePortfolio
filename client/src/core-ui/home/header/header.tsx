import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { blue, grey, indigo, pink } from "@mui/material/colors";
import banner from "../../../assets/images/banner-image-1-1.png";

export default function Header() {
  return (
    <div style={{ minHeight: "700px" }}>
      <Grid container spacing={2} sx={classes.grid}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper sx={classes.paper}>
            <img src={banner} alt="Paella dish" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper sx={classes.paper2}>
            <Typography component="h1">
              HI There, I'm <br />
              <span style={{ color: "var(--blue)" }}> Md Rezaul Karim</span>
            </Typography>
            <Typography component="h2">
              I'm a web Design & developer with extensive experience for over 1
              year, My expertise is to create website design & developing and
              many more...,
              <Box sx={classes.btnBox}>
                <Button endIcon={<SendIcon />} variant="outlined">
                  Learn More
                </Button>
                <Button endIcon={<PictureAsPdfIcon />} variant="outlined">
                  Download Cv
                </Button>
              </Box>
            </Typography>
            <Stack direction="row" spacing={2} sx={classes.paper2.stack}>
              <Link href="https://www.facebook.com/bdrkreza/" target="_blank">
                <Avatar sx={{ bgcolor: indigo[500] }} variant="square">
                  <FacebookIcon />
                </Avatar>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bdrkreza/"
                target="_blank"
              >
                <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                  <LinkedInIcon />
                </Avatar>
              </Link>
              <Link href="https://www.facebook.com/bdrkreza/" target="_blank">
                <Avatar sx={{ bgcolor: grey[500] }} variant="rounded">
                  <GitHubIcon />
                </Avatar>
              </Link>
              <Link href="https://www.facebook.com/bdrkreza/" target="_blank">
                <Avatar sx={{ bgcolor: pink[500] }} variant="rounded">
                  <InstagramIcon />
                </Avatar>
              </Link>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const classes = {
  grid: {
    minHeight: "700px",
    display: "flex",
    flexDirection: "row-reverse",
  },
  paper: {
    minHeight: "630px",
    background: "var(--background)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    img: {
      width: "100%",
      height: "100%",
      textAlign: "center",
    },
  },
  paper2: {
    minHeight: "600px",
    p: 2,
    backgroundColor: "var(--background)",
    h1: {
      fontWeight: "bold",
      fontSize: "40px",
      color: pink[400],
    },
    h2: {
      fontWeight: "bold",
      fontSize: "30px",
      mt: 5,
      color: "var(--gray)",
    },
    stack: {
      mt: 8,
      display: "flex",
      justifyContent: "center",
      "& svg": {
        fontSize: "26px",
        "&:hover": {
          color: "orange",
        },
      },
    },
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};
