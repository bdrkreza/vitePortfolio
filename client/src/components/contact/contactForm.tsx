import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
export default function ContactForm() {
  const [name, setName] = React.useState("Composed TextField");
  console.log(name);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div>
      <Typography
        sx={{ fontWeight: "bold", fontSize: 31, color: "var(--color-text)" }}
        gutterBottom
      >
        Contact
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: "var(--darker)",
          border: "solid 2px var(--default)",
        }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            onChange={handleChange}
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email address"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="company"
            name="company"
            label="Company name"
            fullWidth
            autoComplete="company name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            multiline
            required
            id="massage"
            name="massage"
            label="Enter your massage"
            fullWidth
            autoComplete="Enter your massage"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 4 }} endIcon={<SendIcon />}>
        Send massage
      </Button>
    </div>
  );
}
