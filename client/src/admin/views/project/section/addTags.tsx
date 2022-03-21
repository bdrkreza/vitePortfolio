import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Autocomplete,
  Avatar,
  Box,
  Chip,
  IconButton,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import image from "../../../assets/01 (1).jpg";
const Input = styled("input")({
  display: "none",
});

export default function AddInputTags() {
  const [tags, SetTags] = React.useState(["plase", "do not"]);

  const addTag = (e: any) => {
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
        id="tags-filled"
        onChange={addTag}
        options={tags.map((option) => option)}
        defaultValue={tags}
        freeSolo
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="add tags"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}
