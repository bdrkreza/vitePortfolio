import { Box, Typography } from "@mui/material";
import { FaRegDotCircle } from "react-icons/fa";

type Props = {};

export default function DevProcessCart({}: Props) {
  return (
    <>
      <section className="cart">
        <ol className="ps-timeline">
          {data?.map((data) => (
            <li>
              <span className="ps-sp-top" style={{ color: data.color }}>
                <FaRegDotCircle
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </span>
              <Box sx={classes.rootBox}>
                <Box component="div">
                  <Typography component="h1" sx={{ color: data.color }}>
                    {data.title}
                  </Typography>
                  <Typography component="h2">{data.description}</Typography>
                </Box>
              </Box>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

const classes = {
  rootBox: {
    height: "280px",
    width: "100%",
    marginTop: "-40%",
    boxShadow: "1px 1px 2px 1px rgb(215 216 222 / 44%)",
    color: "var(--color-text)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 768px)": { mt: "-6%", height: "180px" },
    div: {
      textAlign: "center",
      padding: "10px",
      mt: 8,
    },
    h1: {
      fontSize: "20px",
      fontWeight: "bold",
      letterSpacing: "-0.67",
      lineHeight: "21px",
      marginBottom: "23px",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 200,
      fontFamily: "euclid",
      letterSpacing: "-0.6px",
      lineHeight: "21px",
      maxWidth: "400px",
      fontStyle: "inherit",
    },
  },
};

const data = [
  {
    id: 1,
    title: "Exploration",
    description:
      "Finding the optimal technologies and other development solutions suitable for your product.",
    color: "#4C73ED",
  },
  {
    id: 2,
    title: "Back-end",
    description:
      "Creating the engine that runs your product using up-to-date, tailored solutions.",
    color: "#7A84F2",
  },
  {
    id: 3,
    title: "Front-end",
    description:
      "Building pixel-perfect screens based on a design system with care of functionality and visual quality.",
    color: "#A794FE",
  },
  {
    id: 4,
    title: "Quality Assurance & Optimization",
    description:
      "Thorough on device and stress testing. Making the product lightweight and fast",
    color: "#D09AFC",
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description:
      "After finalizing the product we provide necessary support and maintenance services.",
    color: "#E8ABFF",
  },
];
