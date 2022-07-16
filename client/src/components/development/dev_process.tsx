import { Box, Typography } from "@mui/material";
import DevProcessCart from "./dev_process_cart";

type Props = {};

export default function DevProcess({}: Props) {
  return (
    <Box
      sx={{
        mt: 10,
        minHeight: "400px",
        textAlign: "center",
      }}
    >
      <Box sx={{ color: "var(--color-text)" }}>
        <h1
          className="section_heading"
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            letterSpacing: "-0.8px",
            lineHeight: "37px",
            color: "var(--color-text)",
          }}
          data-outline="Our development process"
        >
          Our development process
        </h1>
        <Typography
          sx={{
            fontSize: "20px",
            letterSpacing: "-0.67px",
            lineHeight: "33px",
          }}
        >
          Our process involves the essential steps, is easy to understand
          <br />
          and friendly for our clients. Each step can be individually
          <br />
          tailored or skipped, based on your needs.
        </Typography>
      </Box>
      <DevProcessCart />
    </Box>
  );
}
