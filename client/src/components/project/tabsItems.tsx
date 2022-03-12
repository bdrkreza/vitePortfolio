import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function TabsItems() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "var(--darken)" }}>
        <Tabs
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
          centered
          sx={{ color: "var(--color-text)" }}
        >
          <Tab label="all" sx={{ color: "var(--color-text)" }} />
          <Tab label="html/css" sx={{ color: "var(--color-text)" }} />
          <Tab label="react" sx={{ color: "var(--color-text)" }} />
        </Tabs>
      </AppBar>
    </Box>
  );
}
