import { Box, Grid, Typography } from "@mui/material";

type Props = {};

export default function FieldOfExperience({}: Props) {
  return (
    <Box
      sx={{
        minHeight: "400px",

        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={0} columns={12} mt={5}>
        <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={classes.titleBox}>
            <Typography
              className="section_heading"
              data-outline="Experience"
              component="h1"
            >
              Fields of Experience
            </Typography>
            <Typography component="h2">
              We did projects for almost every industry and have gained
              experience in various fields and services.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Box sx={classes.box}>
              <Typography component="h1"></Typography>

              <Typography component="div">
                <h3>fintech</h3>
              </Typography>
              <Typography component="div">
                <h3>Cryptocurrency</h3>
              </Typography>
              <Typography component="div">
                <h3>Government & security</h3>
              </Typography>
              <Typography component="h2"></Typography>
            </Box>
            <Box sx={classes.box}>
              <Typography component="h1"></Typography>

              <Typography component="div">
                <h3>Education</h3>
              </Typography>
              <Typography component="div">
                <h3>Media & entertainment</h3>
              </Typography>
              <Typography component="div">
                <h3>Real Estate</h3>
              </Typography>
              <Typography component="h2"></Typography>
            </Box>
            <Box sx={classes.box}>
              <Typography component="h1"></Typography>

              <Typography component="div">
                <h3>eCommerce</h3>
              </Typography>
              <Typography component="div">
                <h3>Sports</h3>
              </Typography>
              <Typography component="div">
                <h3>Travel</h3>
              </Typography>
              <Typography component="h2"></Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const classes = {
  titleBox: {
    h1: {
      color: "var(--color-text)",
      fontSize: "30px",
      fontWeight: "bold",
      letterSpacing: "-1px",
      lineHeight: "37px",
      marginBottom: "31px",
    },
    h2: {
      maxWidth: "300px",
      color: "var(--color-text)",
      fontSize: "18px",
      letterSpacing: "-0.6px",
      lineHeight: "26px",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    h1: {
      minWidth: "99px",
      height: "60px",
      paddingX: "10px",
      borderRadius: "41px",
      background:
        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--color-section)  100%)",
      backgroundImage:
        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--color-section)  100%)",
      backgroundPositionX: "initial",
      backgroundPositionY: "initial",
      backgroundSize: "initial",
      backgroundRepeatX: "initial",
      backgroundRepeatY: "initial",
      backgroundAttachment: "initial",
      backgroundOrigin: "initial",
      backgroundClip: "initial",
      backgroundColor: "initial",
      boxShadow: "var(--lighter) 19px 20px 34px 0px",
    },
    div: {
      minWidth: "99px",
      height: "60px",
      paddingX: "10px",
      boxShadow: "var(--lighter) 0px 20px 34px 0px",
      textAlign: "center",
      borderRadius: "41px",
      backgroundColor: "var(--color-section)",
      color: "var(--color-text)",
    },
    h2: {
      minWidth: "99px",
      height: "60px",
      paddingX: "10px",
      borderRadius: "41px",
      background:
        "linear-gradient(90deg,  var(--color-section)  100%, rgba(255, 255, 255, 0) 0%)",
      backgroundImage:
        "linear-gradient(90deg,  var(--color-section)  0%, rgba(255, 255, 255, 0) 80%)",
      backgroundPositionX: "initial",
      backgroundPositionY: "initial",
      backgroundSize: "initial",
      backgroundRepeatX: "initial",
      backgroundRepeatY: "initial",
      backgroundAttachment: "initial",
      backgroundOrigin: "initial",
      backgroundClip: "initial",
      backgroundColor: "initial",
      boxShadow: "var(--lighter) -10px 5px 20px -1px",
    },
  },
};
