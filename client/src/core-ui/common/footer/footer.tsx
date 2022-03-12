import { Box, Card, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import FooterAbout from "./footerAbout";
import FooterContact from "./footerContact";
import { content } from "./footerCtx";
import FooterMedia from "./footerMedia";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "var(--darker)",
        marginTop: "40px",
        borderTop: 3,
        borderColor: "var(--cyan)",
      }}
    >
      <Container>
        <Card sx={{ flexGrow: 1, backgroundColor: "var(--darker)" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Item sx={classes.aboutBox}>
                <FooterAbout content={content} />
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Item sx={classes.contactBox}>
                <FooterContact classes={classes} content={content} />
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Item sx={classes.socialBox}>
                <FooterMedia content={content} />
              </Item>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}

const classes = {
  aboutBox: {
    backgroundColor: "var(--darker)",
    minHeight: "230px",
    color: "var(--color-text)",
    h1: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    hr: {
      ml: 0,
      border: "solid 2px var(--danger)",
      width: "140px",
    },
  },
  contactBox: {
    backgroundColor: "var(--darker)",
    color: "var(--color-text)",
    minHeight: "230px",
    h1: {
      fontSize: "30px",
      fontWeight: "bold",
    },
    hr: {
      border: "solid 2px var(--danger)",
      width: "140px",
      ml: 0,
    },
    h2: {
      fontSize: "17px",

      fontWeight: "bold",
    },
    h3: {
      fontSize: "14px",

      fontWeight: "bold",
    },
  },
  socialBox: {
    backgroundColor: "var(--darker)",
    color: "var(--color-text)",
    minHeight: "215px",

    hr: {
      ml: 0,
      border: "solid 2px var(--danger)",
      width: "180px",
    },
    h1: {
      fontSize: "30px",
      fontWeight: "bold",
    },
  },
  iconWrapper: {
    backgroundColor: "var(--default)",
    icon: {
      color: "white",
    },
  },
};
