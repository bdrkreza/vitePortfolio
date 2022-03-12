import { Button, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export default function SkillCart({ skill }: any) {
  return (
    <React.Fragment>
      <Typography
        sx={{
          color: "var(--color-text)",
          fontSize: 30,
          fontWeight: "bold",
          mb: 2,
          mt: 5,
        }}
      >
        {skill.name}
        <hr />
      </Typography>
      <Box>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          {skill?.expertise?.map(({ name, icon: Icon, color }: any) => (
            <Grid item xs={4} sm={3} md={2} key={name}>
              <>
                <Button
                  sx={{
                    width: "90%",
                    color: { color },
                    height: "50px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    "& svg": {
                      color: { color },
                    },
                  }}
                  variant="outlined"
                  endIcon={<Icon />}
                  size="medium"
                >
                  {name}
                </Button>
              </>
            </Grid>
          ))}
        </Grid>
      </Box>
      <>
        <Grid container spacing={{ xs: 2, md: 2 }} sx={{ padding: 1 }}>
          {skill?.comfortable?.map(({ name, icon: Icon, color }: any) => (
            <Grid item xs={4} sm={3} md={2} key={name}>
              <Paper sx={{ background: "var(--background)" }}>
                <Button
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: { color },
                    "& svg": {
                      color: { color },
                    },
                  }}
                  variant="outlined"
                  endIcon={<Icon />}
                  size="medium"
                >
                  {name}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </>
      <>
        <Grid container spacing={{ xs: 2, md: 2 }} sx={{ padding: 1 }}>
          {skill?.familiar?.map(({ name, icon: Icon, color }: any) => (
            <Grid item xs={4} sm={3} md={2} key={name}>
              <Paper sx={{ background: "var(--background)", mt: 1 }}>
                <Button
                  sx={{
                    width: "100%",
                    height: "50px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: { color },
                    "& svg": {
                      width: "25px",
                      height: "25px",
                      color: { color },
                    },
                  }}
                  variant="outlined"
                  endIcon={<Icon />}
                  size="medium"
                >
                  {name}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </>

      <Grid container spacing={{ xs: 2, md: 2 }} sx={{ padding: 0 }}>
        {skill?.deploy?.map(({ name, icon: Icon, color }: any) => (
          <Grid item xs={4} sm={3} md={2} key={name}>
            <Paper sx={{ background: "var(--background)", mt: 1 }}>
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: { color },
                  "& svg": {
                    color: { color },
                  },
                }}
                variant="outlined"
                endIcon={<Icon />}
                size="medium"
              >
                {name}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={{ xs: 2, md: 2 }}>
        {skill?.tools?.map(({ name, icon: Icon, color }: any) => (
          <Grid item xs={4} sm={3} md={2} key={name}>
            <Paper sx={{ background: "var(--background)", mt: 3 }}>
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: { color },
                  "& svg": {
                    color: { color },
                  },
                }}
                variant="outlined"
                endIcon={<Icon />}
                size="medium"
              >
                {name}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
