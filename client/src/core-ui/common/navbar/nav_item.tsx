import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import about from "../../../assets/screenshot/aboutScreenshot.png";
import contact from "../../../assets/screenshot/constactScreenshot.png";
import home from "../../../assets/screenshot/HomeScreenshot.png";
import pricing from "../../../assets/screenshot/pricingScreenshot.png";
import project from "../../../assets/screenshot/projectScreenshot.png";
import service from "../../../assets/screenshot/serviceScreenshot.png";

export const nav_item = [
  {
    path: "/",
    label: "Home",
    screen: home,
  },
  {
    path: "project",
    label: "Project",
    screen: project,
  },
  {
    path: "about",
    label: "About",
    screen: about,
  },
  {
    path: "service",
    label: "Service",
    screen: service,
  },
  {
    path: "pricing",
    label: "Pricing",
    screen: pricing,
  },

  {
    path: "contact",
    label: "Contact",
    screen: contact,
  },
];

export default function NavItem() {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex", justifyContent: "center" },
        }}
      >
        {nav_item.map(({ path, label }: any, index: any) => (
          <Box key={index}>
            <Link to={path} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  my: 2,
                  color: "var(--cyan)",
                  display: "block",
                  backgroundColor: "var(--background)",
                  ml: 3,
                }}
                variant="outlined"
              >
                {label}
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
    </div>
  );
}
