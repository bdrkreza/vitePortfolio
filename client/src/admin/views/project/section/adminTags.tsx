import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Autocomplete,
  Avatar,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import image from "../../../assets/01 (1).jpg";
const Input = styled("input")({
  display: "none",
});

export default function AdminInputTags() {
  const [tags, SetTags] = React.useState(["plase", "do not"]);
  console.log(tags);
  const addTag = (e: any) => {
    console.log(e.target.value);
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        SetTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Avatar
          src={image}
          sx={{ width: "200px", height: "100%" }}
          variant="rounded"
        ></Avatar>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{
              "& svg": {
                width: 100,
                height: 60,
              },
            }}
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Box>
      <Autocomplete
        multiple
        id="tags-standard"
        options={tags}
        renderInput={(params) => (
          <TextField
            variant="standard"
            sx={{ minWidth: "300px", display: "flex", flexWrap: "wrap" }}
            {...params}
            onKeyDown={addTag}
            label="admin values"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}
