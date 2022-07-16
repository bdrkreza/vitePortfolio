import { Box, Grid, Typography } from "@mui/material";

type Props = {};

export default function DevQuality({}: Props) {
  return (
    <>
      <Box sx={classes.rootBox}>
        <Grid container spacing={{ xs: 0, md: 15 }} columns={12}>
          <Grid item xs={12} md={6}>
            <Box sx={classes.box}>
              <img
                src="https://hype4.com/_next/static/images/tablet@2x-550-f7aa18b56313aee8346945dca1356dcd.webp"
                alt=""
              />

              <Box>
                <Typography component="h1">Web Development</Typography>
                <Typography component="h2">
                  We excell in both large, complex portals and smaller, campaign
                  landing pages. Each project needs to load fast, be
                  pixel-perfect and user friendly.
                </Typography>
                <Typography component="h3">
                  <span> Consistency and high execution quality</span> are based
                  on our unique process, in which front-end is coded by
                  developers understanding the principles of UX and design.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={classes.box}>
              <img
                style={classes.box.img2}
                src="https://hype4.com/_next/static/images/phone@2x-550-cd36db30380e5dc6df842d8e1be4ebbb.webp"
                alt=""
              />
              <Box>
                <Typography component="h1">Mobile Development</Typography>
                <Typography component="h2">
                  A well built mobile app can be a game changer in many
                  industries. We use the{" "}
                  <span>
                    best practices in UI execution and optimised, lightweight
                    backends
                  </span>{" "}
                  to deliver apps that work fast, are easy to use and beautiful.
                </Typography>
                <Typography component="h3">
                  We code in custom transitions, animations and navigation to
                  make each app unique and visually stunning.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const classes = {
  rootBox: {
    width: "100%",
    color: "var(--color-text)",
    "@media (max-width: 992px)": {
      mt: 10,
    },
  },
  box: {
    "@media (max-width: 992px)": {
      textAlign: "center",
    },
    img: {
      top: "9px",
      left: 0,
      width: "502px",
      height: "auto",
      objectFit: "contain",
    },
    img2: {
      marginTop: "55px",
      left: "606px",
      width: "364px",
      height: "auto",
      objectFit: "contain",
    },

    h1: {
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "-0.8px",
      lineHeight: "37px",
      marginBottom: "31px",
    },
    h2: {
      fontSize: "20px",
      letterSpacing: "-0.67px",
      lineHeight: "33px",
      marginBottom: "31px",
      span: {
        fontWeight: 700,
        fontSize: "24px",
      },
    },
    h3: {
      fontSize: "20px",
      letterSpacing: "-0.67px",
      lineHeight: "33px",
      marginBottom: "31px",
      span: {
        fontWeight: 700,
        fontSize: "24px",
      },
    },
  },
};
