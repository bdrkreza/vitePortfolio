import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Card, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const content = {
  local: " Find Us at the office",
  address1: "Farmgate,Tejgaon,",
  address2: "Dhaka 1207 Khamarbari,",
  country: "Bangladesh",
  email: "rkreza@gmail.com",
  ring: "Give us A ring",
  name: " Md Rezaul Karim",
  number1: "01789-380336",
  number2: "01632-020202",
  time: "Mon-Fri,10:00-10:00",
};

export default function ContactMe() {
  return (
    <Card sx={classes.card}>
      <Paper sx={classes.paper}>
        <Typography component="h1">
          <AddLocationIcon />
          {content.local}
        </Typography>
        <Typography component="h2">
          <span>{content.address1}</span>
          <br />
          <span>{content.address2}</span>
          <br />
          <span>{content.country}</span>
          <Typography component="h3">{content.email}</Typography>
        </Typography>
      </Paper>
      <Paper sx={classes.paper}>
        <Typography component="h1">
          <PhoneAndroidIcon />
          {content.ring}
        </Typography>
        <Typography component="h2">
          {content.name}
          <Typography component="h3">
            {content.number1}
            <br />
            {content.number2}
          </Typography>
          <Typography>{content.time}</Typography>
        </Typography>
      </Paper>
    </Card>
  );
}

const classes = {
  card: {
    backgroundColor: "var(--darker)",
  },
  paper: {
    color: "white",
    margin: "10px",
    padding: "10px",
    backgroundColor: "var(--default)",
    h1: {
      fontWeight: "bold",
      display: "flex",
      margin: "5px",
    },
    h2: {
      ml: 6,
      color: grey[400],
    },
    h3: {
      fontWeight: "bold",
      color: "var(--teal)",
    },
    svg: {
      mr: 2,
      color: "var(--green)",
    },
  },
};
