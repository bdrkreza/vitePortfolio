import { NavigateNext } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  CardMedia,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { Link } from "react-router-dom";
import { nav_item } from "./nav_item";

export default function SideDrawer() {
  type Anchor = "left" | "right";
  const [state, setState] = React.useState({ right: false });
  const toggleDrawer =
    (side: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [side]: open });
    };

  const sideList = (side: Anchor) => (
    <Box
      sx={{ height: "100px" }}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List sx={{ height: "100px" }}>
        {nav_item.map((nav: any, index: any) => (
          <ListItem button key={index}>
            <Link to={nav.path}>
              <CardMedia
                component="img"
                sx={{ width: "100%", position: "relative" }}
                image={nav.screen}
                alt={nav.label}
              />

              <Typography
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                  fontFamily: "sans-serif",
                  textTransform: "uppercase",
                  fontSize: 30,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "0.8s",

                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                {nav.label}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          sx={{ mr: 4, "& svg": { fontSize: 30, color: "var(--color-title)" } }}
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer("right", true)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <MenuIcon />
        </IconButton>

        <Box>
          <Drawer
            transitionDuration={{ enter: 500, exit: 800 }}
            PaperProps={{
              sx: {
                backgroundColor: "var(--darker)",
                color: "red",
                mr: 2,
                width: 450,
              },
            }}
            variant="persistent"
            anchor="right"
            open={state.right}
            onClose={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            <Avatar
              sx={{
                background: "black",
                cursor: "pointer",
                position: "fixed",
                zIndex: 100,
              }}
              onClick={toggleDrawer("right", false)}
              onKeyDown={toggleDrawer("right", false)}
            >
              <NavigateNext />
            </Avatar>
            {sideList("right")}
          </Drawer>
        </Box>
      </React.Fragment>
    </div>
  );
}
