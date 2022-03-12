import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from "../../assets/images/onderwijsloket_uitkering_uwv.png";

export default function ServiceCard({ serviceData }: any) {
  return (
    <Container maxWidth="lg">
      <Box pt={20} pb={5}>
        <>
          <h1 className="section_heading" data-outline="What I Do?">
            What I Do?
            <hr style={{ border: "solid 2px var(--danger)", width: "300px" }} />
          </h1>
        </>
        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Card sx={classes.card}>
              {serviceData.map(({ name, describe, icons: Icon }: any) => (
                <div>
                  <Grid sx={{ display: "flex", p: 1 }} spacing={2}>
                    <Grid xs={12} md={3} pr={5} sx={classes.card.grid}>
                      {<Icon />}
                    </Grid>
                    <Grid sx={classes.cardContent} xs={12} md={9}>
                      <Typography
                        variant="h6"
                        component="h1"
                        gutterBottom={true}
                      >
                        {name}
                      </Typography>
                      <Typography component="h2">{describe}</Typography>
                    </Grid>
                  </Grid>
                  <hr />
                </div>
              ))}
            </Card>
          </Grid>
          <Grid item xs={12} md={5} sx={classes.Image}>
            <img src={Image} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const classes = {
  card: {
    background: "var(--default)",
    minHeight: "560px",
    grid: {
      fontSize: "50px",
      color: "var(--success)",
      textAlign: "center",
    },
    hr: {
      border: "solid 1px var(--warning)",
    },
  },
  cardContent: {
    h1: {
      fontWeight: "bold",
      color: "white",
    },
    h2: {
      color: "var(--light)",
      fontWeight: "bold",
      fontSize: "18px",
      mt: 1,
    },
  },
  Image: {
    img: {
      width: "100%",
      border: "solid 2px var(--default)",
      borderRadius: "6px",
      minHeight: "560px",
    },
  },
};
