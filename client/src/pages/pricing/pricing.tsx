import { Grid } from "@mui/material";
import { PricingSection, PricingTop } from "../../components";
import { cart_pricing } from "../../services/data/data";

const content = {
  badge: "LOREM IPSUM",
  "header-p1": "Donec lacinia",
  "header-p2": "turpis non sapien lobortis pretium",
  description:
    "Integer feugiat massa sapien, vitae tristique metus suscipit nec.",
  option1: "Monthly",
  option2: "Annual",
  "01_title": "Lorem ipsum",
  "01_price": "$9",
  "01_suffix": "month",
  "01_benefit1": "3 Emails",
  "01_benefit2": "1 Database",
  "01_benefit3": "Unlimited Domains",
  "01_benefit4": "10 GB Storage",
  "01_primary-action": "Select plan",
  "01_secondary-action": "Learn more",
  "02_title": "Dolor sit amet",
  "02_price": "$49",
  "02_suffix": " / mo",
  "02_benefit1": "6 Emails",
  "02_benefit2": "2 Database",
  "02_benefit3": "Unlimited Domains",
  "02_benefit4": "25 GB Storage",
  "02_primary-action": "Select plan",
  "02_secondary-action": "Learn more",
  "03_title": "Consectuter",
  "03_price": "$499",
  "03_suffix": " / mo",
  "03_benefit1": "9 Emails",
  "03_benefit2": "3 Database",
  "03_benefit3": "Unlimited Domains",
  "03_benefit4": "50 GB Storage",
  "03_primary-action": "Select plan",
  "03_secondary-action": "Learn more",
};
export default function Pricing() {
  return (
    <div>
      <PricingTop content={content} />
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
