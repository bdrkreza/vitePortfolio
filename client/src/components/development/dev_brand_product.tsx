import { Box, Grid, Typography } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import anlizy from "../../assets/images/brand/analizy.png";
import mbank from "../../assets/images/brand/mbank.png";
import samsung from "../../assets/images/brand/samsung.png";
import seaChange from "../../assets/images/brand/seaChange.png";
import viacom from "../../assets/images/brand/viacom.png";
// Import Swiper styles
import "swiper/css";

type Props = {};

export default function DevBrandProduct({}: Props) {
  return (
    <Box sx={{ maxHeight: "100px", width: "100%", pt: 15, mb: 5 }}>
      <Grid container maxWidth="xl" spacing={{ xs: 10 }}>
        <Grid item xs={6} md={3}>
          <Box
            sx={{
              maxWidth: "370px",
              minWidth: "270px",
              color: "var(--color-text)",
              h1: {
                fontSize: "2rem",
                fontWeight: 700,
                letterSpacing: "-1px",
              },
            }}
          >
            <Typography component="h1">We’ve developed products for</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={9}>
          <Box>
            <Swiper
              watchSlidesProgress={true}
              spaceBetween={10}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {brandLogo.map(({ img }) => (
                <SwiperSlide>
                  <img
                    style={{
                      width: "120px",
                      height: "auto",
                      position: "absolute",
                      color: "var(--color-text)",
                    }}
                    src={img}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const brandLogo = [
  {
    img: viacom,
  },
  {
    img: anlizy,
  },
  {
    img: mbank,
  },
  {
    img: samsung,
  },
  {
    img: seaChange,
  },
];
