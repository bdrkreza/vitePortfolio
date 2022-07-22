import { Button } from "@mui/material";
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
  const [formValue, setFormValue] = React.useState({});
  const [tags, SetTags] = React.useState(["plase", "do not"]);
  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValue);
    console.log(tags);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid md={6} sx={{ padding: "50px" }}>
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              sx={{ mb: 1 }}
              required
              id="title"
              name="name"
              label="project name"
              fullWidth
              autoComplete="project-title"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              sx={{ mb: 1 }}
              id="author"
              name="title"
              label="project title"
              fullWidth
              autoComplete="project title"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              required
              sx={{ mb: 1 }}
              id="city"
              name="livelink"
              label="project live link"
              fullWidth
              autoComplete="projectlivelink"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              required
              sx={{ mb: 2 }}
              id="city"
              name="githublink"
              label="project code link"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <ProjectTools onChange={onChange} />
          <AddInputTags tags={tags} SetTags={SetTags} />
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
        <Button type="submit" onClick={handleSubmit}>
          submit
        </Button>
      </Grid>
    </React.Fragment>
  );
}
