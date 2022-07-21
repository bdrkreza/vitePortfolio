import { Box, Card, Divider, Typography } from "@mui/material";

import { useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "../../services/data/testimonial";

SwiperCore.use([Thumbs, Autoplay]);
function Testimonials() {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const infoParams = {
    spaceBetween: 40,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <>
      <Box
        sx={{
          maxHeight: "550px",
          boxShadow: "1px 1px 2px 1px rgb(215 216 222 / 44%)",
        }}
      >
        <Box sx={classes.headerBox}>
          <Typography component="h1">
            People like working with us.
            <br /> No joking - here’s the proof!
          </Typography>
          <Divider />
        </Box>

        <>
          <Card
            sx={{
              height: "250px",
              bgcolor: "var(--color-section)",
            }}
          >
            <Swiper
              id="testimonialsContent"
              thumbs={{ swiper: thumbsSwiper }}
              {...contentParams}
            >
              {testimonialData.map((testimonialText, index) => (
                <SwiperSlide key={`testimonial-content-${index}`}>
                  <Typography sx={classes.testimonialsContent}>
                    <RiDoubleQuotesL
                      style={{
                        color: "var(--color-title)",
                        marginRight: "10px",
                      }}
                    />
                    {testimonialText.content}
                    <RiDoubleQuotesR
                      style={{
                        color: "var(--color-title)",
                        marginLeft: "10px",
                      }}
                    />
                  </Typography>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
        </>

        <Box sx={classes.testimonials} style={{ alignItems: "stretch" }}>
          <Swiper
            id="testimonialsInfo"
            onSwiper={setThumbsSwiper}
            watchSlidesVisibility
            watchSlidesProgress
            {...infoParams}
          >
            {testimonialData.map((data, index) => (
              <SwiperSlide
                // style={{
                //   border: 1,
                //   borderStartEndRadius:"10px"
                // }}
                key={`testimonial-info-${index}`}
              >
                <img src={data.image} alt="testimonials image" />
                <Typography>
                  <Typography component="h3">{data.name}</Typography>
                  <Typography component="span">{data.designation}</Typography>
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default Testimonials;

const classes = {
  headerBox: {
    marginTop: 15,
    marginBottom: 5,
    h1: {
      fontSize: "30px",
      color: "var(--color-text)",
      lineHeight: "1.6 1.5",
      fontWeight: "bold",
      letterSpacing: "-0.5px -1.5px",
    },
    h2: {
      fontSize: "22px",
      color: "var(--color-paragraph)",
      lineHeight: "1.6 1.5",
      letterSpacing: "-0.5px -1.5px",
    },
    hr: {
      width: "240px",
      border: "solid 1px var(--color-secondary)",
    },
  },

  testimonials: {
    "#testimonialsInfo": {
      marginTop: "50px",
      width: "100%",
      maxWidth: "850px",

      ".swiper-slide": {
        maxHeight: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "12px",
        cursor: "pointer",
        borderTop: "4px solid transparent",
        position: "relative",
        paddingLeft: "0px",
        paddingTop: "5px",
        paddingBottom: "0",
        minHeight: "auto",
        "&.swiper-slide-thumb-active": {
          borderColor: "var(--blue)",
          borderRadius: "10%",
        },
      },
      img: {
        width: 60,
        height: 60,
        borderRadius: "50%",
      },
      h3: {
        marginTop: 1,
        fontSize: "18px",
        lineHeight: 1,
        color: "var(--blue)",
      },
      span: {
        color: "var(--color-text)",
        opacity: "0.8",
        fontSize: "15px",
        lineHeight: 1,
        display: "block",
        marginTop: "10px",
      },
    },
  },
  testimonialsContent: {
    fontSize: "32px",
    color: "var(--gray)",
    lineHeight: 2.3,
    textAlign: "center",
    fontFamily: "special",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "820px",
  },
};
