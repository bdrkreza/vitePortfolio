import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import React from "react";
import AppMenuItem from "./menuItem";

export default function AppSidebar() {
  return (
    <React.Fragment>
      <List component="nav">
        <AppMenuItem />
        <Divider sx={{ my: 1 }} />
        <h1>login</h1>
      </List>
    </React.Fragment>
  );
}
