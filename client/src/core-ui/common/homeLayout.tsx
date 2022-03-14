import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

export default function HomeLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Container
        sx={{
          minHeight: "650px",
          padding: 10,
          mt: { xs: "100px", sm: "10px" },
          color: "white",
          "@media (max-width:599.95px)": {
            padding: 0,
          },
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
