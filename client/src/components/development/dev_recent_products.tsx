import EastIcon from "@mui/icons-material/East";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { ProjectCard } from "../../core-ui";
import { data } from "../../core-ui/home_two/project/project";
type Props = {};

export default function DevRecentProducts({}: Props) {
  return (
    <div>
      <Box sx={{ marginTop: 15, minHeight: "700px" }}>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            letterSpacing: "-1px",
            lineHeight: "37px",
            color: "var(--color-text)",
          }}
        >
          Recent product we've developed
        </Typography>
        <Divider />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          pt={8}
        >
          {data.slice(-2).map((item, index) => (
            <Grid item xs={4} sm={4} md={6} key={index}>
              <ProjectCard data={item} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            alignItems: "center",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "20px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "35px",
              fontWeight: "bold",
              letterSpacing: "-1px",
              lineHeight: "37px",
              color: "var(--color-text)",
              padding: "10px",
              borderRadius: "30px",
              boxShadow: "0 20px 34px 0 rgb(0 0 0 / 10%)",
            }}
          >
            Would you like to get in touch? <br /> We’ll be happy to talk!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                padding: "15px 20px",
                boxShadow: "0 20px 34px 0 rgb(0 0 0 / 10%)",
                borderRadius: "32px",

                color: "var(--color-text)",
              }}
              variant="outlined"
              endIcon={<EastIcon />}
            >
              Get a free estimate
            </Button>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                alignSelf: "auto",
                backgroundColor: "blue",
                height: "50px",
                margin: "0px 5px",
                width: "1px",
              }}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                alignSelf: "auto",
                backgroundColor: "blue",
                height: "50px",
                margin: "0px 5px",
                width: "1px",
              }}
            />
            <Button
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                padding: "15px 20px",
                boxShadow: "0 20px 34px 0 rgb(0 0 0 / 10%)",
                borderRadius: "32px",
                marginRight: "30px",
                color: "var(--color-text)",
              }}
              variant="outlined"
              endIcon={<EastIcon />}
            >
              Schedule a meeting
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
