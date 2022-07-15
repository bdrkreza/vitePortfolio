import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { AiFillLayout } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
// import required modules
import { Autoplay, Mousewheel } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
interface IProps {
  screenshots: string[] | undefined;
  link: string | undefined;
}
export default function ProjectCarousel({ screenshots, link }: IProps) {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Autoplay]}
        className="mySwiper"
      >
        {screenshots?.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <Paper sx={classes.paper}>
              <img src={item} alt="" />
              <Box sx={classes.paper.box} />
              <Grid container>
                <Grid item md={6}>
                  <Box
                    sx={{
                      position: "relative",
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h3"
                      color="inherit"
                      gutterBottom
                    >
                      item title
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <a href={link} target="_blank">
                <Box sx={classes.box}>
                  <AiFillLayout />
                  <IconButton sx={classes.box.btn}>
                    Live Preview
                    <BiLinkExternal />
                  </IconButton>
                </Box>
              </a>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const classes = {
  paper: {
    position: "relative",
    color: "#fff",
    width: "100%",
    height: "100%",
    mb: 2,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    box: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.3)",
    },
  },

  box: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    color: "white",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "0.8s",

    "&:hover": {
      opacity: 1,
    },
    "& svg": {
      fontSize: "80px",
    },
    btn: {
      color: "white",
      "& svg": {
        ml: 1,
        fontSize: 20,
      },
    },
  },
};
