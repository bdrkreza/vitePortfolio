import { Box, Container, Typography } from "@mui/material";
import { SettingsPassword } from "./section/setting-password";
import { SettingsNotifications } from "./section/settings-Notifications";
export default function AppSetting() {
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Settings
          </Typography>
          <SettingsNotifications />
          <Box sx={{ pt: 3 }}>
            <SettingsPassword />
          </Box>
        </Container>
      </Box>
    </div>
  );
}
