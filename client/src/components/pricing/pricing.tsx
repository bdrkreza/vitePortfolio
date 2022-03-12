import DoneIcon from "@mui/icons-material/Done";
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function PricingSection({ content }: any) {
  return (
    <Box sx={{ position: "relative" }}>
      <Card
        variant="outlined"
        sx={{ minHeight: "400px", background: "var(--darker)" }}
      >
        <Box sx={classes.card_pricing}>
          <Typography
            sx={{ fontSize: "30px", color: "var(--color-text)" }}
            component="h6"
          >
            ${content.price}
            <br />
            <Typography
              sx={{ fontSize: "24px", color: "var(--color-text)" }}
              color="textSecondary"
              component="span"
            >
              {content.suffix}
            </Typography>
          </Typography>
        </Box>
        {/* <CardHeader
          sx={{ textAlign: "center" }}
          title={content.name}
        ></CardHeader> */}
        <Box sx={classes.title}>{content.title}</Box>
        <CardContent sx={classes.cardContent}>
          <Box width="210px">
            <Paper sx={classes.cardContent.desc}>
              <DoneIcon />
              {content.benefit1}
            </Paper>

            <Paper sx={classes.cardContent.desc}>
              <DoneIcon />
              {content.benefit2}
            </Paper>

            <Paper sx={classes.cardContent.desc}>
              <DoneIcon />
              {content.benefit3}
            </Paper>

            <Paper sx={classes.cardContent.desc}>
              <DoneIcon />
              {content.benefit4}
            </Paper>
          </Box>
          <Button variant="outlined" sx={{ mt: 4 }}>
            Select plan
          </Button>
          <Box mt={2}>
            <Link to="#" style={{ color: "var(--blue)" }}>
              <Typography>Learn more</Typography>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

const classes = {
  cardContent: {
    mt: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    desc: {
      display: "flex",
      fontWeight: "bold",
      color: "white",
      mt: 1,
      background: "var(--default)",
      svg: {
        mr: 2,
        color: "var(--green)",
      },
    },
  },
  card_pricing: {
    position: "absolute",
    color: "white",
    background: "var(--darker)",
    boxShadow: "1px 1px 1px 1px #888888",
    width: "75px",
    height: "100px",
    right: "1rem",
    marginTop: "-17px",
    paddingTop: "1.25rem",
    textAlign: "center",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "14px",
      backgroundColor: cyan[50],
      left: "0",
      bottom: "0",
      clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
    },
    "&:before": {
      width: "8px",
      height: "16px",
      backgroundColor: "#888888",
      top: "0",
      left: "-8px",
      clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
    },
  },

  title: {
    mt: 6,
    width: "120px",
    background:
      "linear-gradient(157deg, var(--default)-12%, var(--darker) 100%)",
    color: "var(--color-text)",
    padding: "10px",
    borderTopRightRadius: "13px",
    borderBottomRightRadius: "13px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    left: "-8px",
    "&:before": {
      content: "''",
      position: "absolute",
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "transparent #888888 #888888 transparent",
      left: "0px",
      top: "-8px",
    },
  },
};
