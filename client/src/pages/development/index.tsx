import { Box, Typography } from "@mui/material";
import {
  DevBrandProduct,
  DevHeader,
  DevProblemSolve,
  DevProcess,
  DevQuality,
  DevRecentProducts,
} from "../../components";
import { HeroCard, Technology } from "../../core-ui";

type Props = {};

export default function Development({}: Props) {
  return (
    <div>
      <DevHeader />
      <DevBrandProduct />
      <DevQuality />
      <DevProblemSolve />
      <Technology />
      <DevProcess />
      <DevRecentProducts />
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            color: "var(--color-text)",
            fontSize: "30px",
            fontWeight: 700,
            letterSpacing: "-1px",
            marginBottom: 4,
          }}
        >
          What are you searching for?
        </Typography>
        <HeroCard />
      </Box>
    </div>
  );
}
