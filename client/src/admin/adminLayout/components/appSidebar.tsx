import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
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
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="login" />
        </ListItemButton>
      </List>
    </React.Fragment>
  );
}
