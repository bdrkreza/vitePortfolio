import EastIcon from "@mui/icons-material/East";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Box, Button } from "@mui/material";
type Props = {};

export default function ButtonHeader({}: Props) {
  return (
    <div>
      <Box sx={{ paddingTop: "20px" }}>
        <Button sx={classes.btn} endIcon={<EastIcon />} variant="outlined">
          About Me
        </Button>
        <Button
          sx={classes.btn}
          endIcon={<PictureAsPdfIcon />}
          variant="outlined"
        >
          Download Cv
        </Button>
      </Box>
    </div>
  );
}

const classes = {
  btn: {
    marginLeft: "20px",
    width: "190px",
    height: "50px",
    padding: "10px",
    color: "var(--color-button-text)",
    fontFamily: "cursive",
    textTransform: "capitalize",
    fontSize: "20px",
  },
};
