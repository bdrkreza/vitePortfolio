import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Avatar, Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import image from "../../../assets/01 (1).jpg";
const Input = styled("input")({
  display: "none",
});
export default function ImageLevel() {
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
    </div>
  );
}
