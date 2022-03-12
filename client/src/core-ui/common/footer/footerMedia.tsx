import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { blue, grey, indigo, pink } from "@mui/material/colors";
export default function FooterMedia({ content }: any) {
  return (
    <Box ml={2}>
      <Typography component="h1" gutterBottom={true}>
        {content.contact3}
        <hr />
      </Typography>

      <Box sx={classes.box}>
        <Typography>{content.footerdesc}</Typography>
      </Box>

      <Stack direction="row" spacing={2} sx={classes.stack}>
        <IconButton
          href="https://www.facebook.com/bdrkreza/"
          target="_blank"
          sx={{ bgcolor: indigo[500], color: "white" }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/bdrkreza/"
          target="_blank"
          sx={{ bgcolor: blue[500], color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          href="https://www.facebook.com/bdrkreza/"
          target="_blank"
          sx={{ bgcolor: grey[500], color: "white" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/bdrkreza/"
          target="_blank"
          sx={{ bgcolor: pink[500], color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

const classes = {
  box: {
    display: "flex",
    flexDirection: "column",
  },
  stack: {
    mt: 2,
    "& svg": {
      fontSize: "25px",
      "&:hover": {
        background: "var(--default)",
        color: "var(--background)",
      },
    },
  },
};
