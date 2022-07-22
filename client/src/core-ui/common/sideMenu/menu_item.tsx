import { Box, CardMedia, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { nav, nav_item } from "./_nav";

export default function MenuItem() {
  const theme = localStorage.getItem("theme");
  console.log(theme);
  return (
    <div>
      <Box sx={{ height: "100px" }}>
        <List sx={{ height: "100px" }}>
          {theme == "dark" && (
            <>
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
            </>
          )}
          {theme === "light" && (
            <>
              {nav.map((nav: any, index: any) => (
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
            </>
          )}
        </List>
      </Box>
    </div>
  );
}
