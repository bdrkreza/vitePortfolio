import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddInputTags from "./addTags";
import AdminInputTags from "./adminTags";
import ImageLevel from "./imageLevel";
import ImageCarousel from "./project-image-carousel";
import ProjectTools from "./project-tools";
import UserInputTags from "./userTags";
const Input = styled("input")({
  display: "none",
});
export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid md={6} sx={{ padding: "50px" }}>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="enter project title"
              fullWidth
              autoComplete="project-title"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="author"
              name="author"
              label="Enter author name & project name"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <ProjectTools />
          <AddInputTags />
          <ImageCarousel />
        </Grid>

        <Grid
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ImageLevel />
          <UserInputTags />
          <AdminInputTags />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
