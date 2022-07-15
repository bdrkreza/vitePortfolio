import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function TabsItems({ setCategory, category }: any) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCategory(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "var(--darken)" }}>
        <Tabs
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          value={category}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
          centered
          sx={{ color: "var(--color-text)" }}
        >
          {cate.map((ctg) => (
            <Tab
              label={ctg.label}
              value={ctg.category}
              sx={{ color: "var(--color-text)" }}
            />
          ))}
        </Tabs>
      </AppBar>
    </Box>
  );
}

const cate = [
  {
    id: 1,
    category: "",
    label: "All",
  },
  {
    id: 2,
    category: "html",
    label: "html/css",
  },
  {
    id: 3,
    category: "reactjs",
    label: "react app",
  },
  {
    id: 4,
    category: "nodejs",
    label: "node js",
  },
];
