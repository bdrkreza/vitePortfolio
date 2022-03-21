import { Grid } from "@mui/material";
import { PricingHeader, PricingSection, PricingTop } from "../../components";
import { cart_pricing } from "../../services/data/data";

export default function Pricing() {
  return (
    <div>
      <PricingHeader />
      <PricingTop />
      <Grid container spacing={3}>
        {cart_pricing.map((content) => (
          <Grid item xs={12} sm={6} md={4}>
            <PricingSection content={content} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
