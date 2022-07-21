import { Box, Grid, Typography } from "@mui/material";
import phone1 from "../../assets/images/dev/phone1.webp";
import phone2 from "../../assets/images/dev/phone2.webp";
import phone3 from "../../assets/images/dev/phone3.webp";
import phone4 from "../../assets/images/dev/phone4.webp";
import phone5 from "../../assets/images/dev/phone5.webp";
import react from "../../assets/images/dev/react.webp";
import swift from "../../assets/images/dev/swift.webp";
type Props = {};

export default function Dev_header_section({}: Props) {
  return (
    <div style={{}}>
      <Grid container spacing={2} columns={12} direction="row-reverse">
        <Grid item xs={12} md={6} sx={{ backgroundColor: "" }}>
          <Box sx={{ minHeight: "450px" }}>
            <img
              style={{
                width: "165px",
                position: "absolute",
                marginLeft: "-420px",
              }}
              src={swift}
              alt=""
            />
            <img
              style={{
                position: "absolute",
                width: "361px",
                height: "auto",
                marginTop: "-350px",
                marginLeft: "-300px",
              }}
              src={phone1}
              alt=""
            />

            <Box>
              <img
                style={{
                  width: "361px",
                  height: "auto",
                  marginTop: "-100px",
                  position: "absolute",
                }}
                src={phone2}
                alt=""
              />
              <img
                style={{
                  width: "164px",
                  height: "auto",
                  marginTop: "450px",
                  marginLeft: 170,
                  position: "absolute",
                }}
                src={react}
                alt=""
              />
            </Box>

            <Box sx={{ display: "flex", marginLeft: "280px" }}>
              <img
                style={{
                  width: "361px",
                  height: "auto",
                  position: "absolute",
                  marginTop: -450,
                }}
                src={phone3}
                alt=""
              />
              <img
                style={{
                  width: "361px",
                  height: "auto",
                  position: "absolute",
                  marginTop: 100,
                }}
                src={phone4}
                alt=""
              />
            </Box>

            <img
              style={{
                width: "361px",
                height: "auto",
                position: "absolute",
                marginLeft: 550,
              }}
              src={phone5}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} mt={15}>
          <Typography
            component="div"
            sx={{
              color: "var(--color-text)",
              h1: {
                fontSize: "3rem",
                fontWeight: 700,
                fontFamily: "euclid",
                letterSpacing: "-1px",
                lineHeight: 1.2,
                fontStyle: "inherit",
              },
              h2: {
                fontSize: "6rem",
                fontWeight: 600,
                fontFamily: "euclid",
                letterSpacing: "-2.4px",
                lineHeight: "21px",
                whiteSpace: "nowrap",
                fontStyle: "inherit",
                marginTop: 8,
              },
              h3: {
                fontSize: "26px",
                fontFamily: "euclid",
                letterSpacing: "-0.7px",
                lineHeight: 1.65,
                marginTop: 10,
              },
            }}
          >
            <Typography component="h1">Services</Typography>
            <Typography component="h2">Development</Typography>
            <Typography component="h3">
              We provide <strong>highest quality, scalable</strong> web and
              mobile solutions. We care about the quality of the project as well
              as its complete implementation. That is why we use proven
              technologies designed to create modern applications and websites
              on a daily basis.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
