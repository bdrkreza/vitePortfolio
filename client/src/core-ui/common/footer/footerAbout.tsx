import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { Box, Button, Typography } from "@mui/material";

export default function FooterAbout({ content }: any) {
  return (
    <>
      <Typography component="h1">
        {content.header}
        <hr />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography>{content.description}</Typography>
          </Box>
        </Box>
      </Typography>

      <Button
        variant="outlined"
        sx={{
          color: "var(--color-text)",

          mt: 2,
          border: "solid 1px var(--default)",
        }}
        startIcon={<PhoneCallbackIcon />}
      >
        CONTACT US
      </Button>
    </>
  );
}
