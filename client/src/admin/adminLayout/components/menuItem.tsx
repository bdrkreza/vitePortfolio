import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import WebIcon from "@mui/icons-material/Web";
import { Box } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
export const nav_item = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    path: "app-project",
    label: "Project",
    icon: WebIcon,
  },
  {
    path: "app-blog",
    label: "Blogs",
    icon: DriveFileRenameOutlineIcon,
  },
  {
    path: "app-customer",
    label: "customer",
    icon: PeopleIcon,
  },
  {
    path: "app-profile",
    label: "Account",
    icon: AccountBoxIcon,
  },
  {
    path: "app-setting",
    label: "Setting",
    icon: SettingsIcon,
  },
];

export default function AppMenuItem() {
  return (
    <div>
      <Box>
        {nav_item.map(({ path, label, icon: Icon }: any, index: any) => (
          <Box key={index}>
            <Link to={path} style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </Box>
        ))}
      </Box>
    </div>
  );
}
