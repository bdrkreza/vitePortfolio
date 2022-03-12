import { Avatar, Box, Grid, Typography } from "@mui/material";
import { FaUserGraduate } from "react-icons/fa";

export default function EducationCart({ education }: any) {
  return (
    <section>
      <Box pb={10}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", marginTop: 40 }}
              src="https://diu.ac/front/images/campus.jpg"
              alt=""
            />
          </Grid>

          <Grid item xs={12} md={6} sx={classes.grid}>
            <div>
              {education.map((education: any) => (
                <Box sx={classes.box}>
                  <Box pr={5}>
                    <Avatar variant="rounded">
                      <FaUserGraduate />
                    </Avatar>
                  </Box>
                  <Box sx={classes.timeline}>
                    <Typography variant="h6" component="h1" gutterBottom={true}>
                      {education.varsityName}
                    </Typography>
                    <Typography component="h2">{education.subject}</Typography>
                    <Typography component="h3">{education.date}</Typography>
                  </Box>
                </Box>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

const classes = {
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    mt: 5,
  },
  timeline: {
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "1px",
      height: "100%",
      background: "var(--danger)",
    },
    h1: {
      fontWeight: "bold",
      color: "var(--color-text)",
    },
    h2: {
      fontWeight: "bold",
      fontSize: "13px",
      color: "var(--color-text)",
    },
    h3: {
      color: "var(--gray)",
      fontWeight: "bold",
      mt: 1,
    },
  },
};
