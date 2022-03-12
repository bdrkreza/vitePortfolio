import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import banner from "../../assets/images/banner-image-1-1.png";

export default function AboutSection({ content }: any) {
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
              {content.title}
              <br />
              <span style={{ color: "var(--blue)" }}>{content.name} </span>
            </Typography>
            <Typography component="h2">{content.paragraph}</Typography>
            <Box sx={classes.btnBox}>
              <Button
                sx={{ mt: 5 }}
                endIcon={<PictureAsPdfIcon />}
                variant="outlined"
              >
                {content.action}
              </Button>
            </Box>
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
      fontSize: "20px",
      mt: 5,
      color: "var(--gray)",
    },
  },
  btnBox: {
    display: "flex",
    justifyContent: "end",
  },
};
