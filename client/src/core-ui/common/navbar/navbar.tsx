import { CardMedia } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/icons/brandLogo.webp";
import Search from "../search/search";
import SideDrawer from "./side_nav";
import ToggleSwitch from "./toggleSwitch";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <AppBar sx={scrolled ? classes.active : classes.header}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Link to="/">
              {/* brand Logo */}
              <CardMedia
                component="img"
                sx={{ width: "140px", height: "65px" }}
                image={image}
                alt="brandLogon"
              />
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search />
            {/* mobile drawer */}
            <SideDrawer />
            <ToggleSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

const classes = {
  header: {
    background: "var(--background)",
    py: "5px",
    transition: "all 0.4s ease",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
  },
  active: {
    backgroundColor: "var(--neutral)",
    py: "5px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    transition: "all 0.4s ease",
  },
  search: {},
};
