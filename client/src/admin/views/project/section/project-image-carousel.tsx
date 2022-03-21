import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";
import image from "../../../assets/01 (1).jpg";

const Input = styled("input")({
  display: "none",
});
export default function ImageCarousel() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AvatarGroup sx={{ mt: 3 }} variant="square" max={4}>
        {[1, 2, 3, 4, 5].map((img) => (
          <Avatar
            sx={{ width: "100px", height: "100px" }}
            alt="Remy Sharp"
            variant="square"
            src={image}
          />
        ))}
      </AvatarGroup>
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
  );
}
