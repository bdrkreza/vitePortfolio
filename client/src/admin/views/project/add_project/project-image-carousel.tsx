import { useMutation } from "@apollo/client";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Dispatch, SetStateAction, useState } from "react";
import { DELETE_IMAGE } from "../../../../services";
import { IFile } from "./add-project-form";

type Props = {
  setImageTags: Dispatch<SetStateAction<IFile[] | undefined>>;
  imageTags: IFile[] | undefined;
};

export default function ImageCarousel({ setImageTags, imageTags }: Props) {
  const [deleteImage, { data, error }] = useMutation(DELETE_IMAGE);
  const [imageUrl, setImageUrl] = useState<IFile[] | undefined>([]);
  const handleImageUpload = () => {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "diureza",
        uploadPreset: "my_preset",
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          setImageUrl((prev: any) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
          setImageTags((prev: any) => [...prev, result.info.url]);
        }
      }
    );
    myWidget.open();
  };

  function deleteFile(e: any, id: any) {
    const url = imageTags?.filter((item, index) => index !== e);
    setImageTags(url);
    const s = imageUrl?.filter((item, index) => index !== e);
    setImageUrl(s);
    deleteImage({
      variables: {
        deleteImageId: id,
      },
    });
  }

  if (data) {
    console.log("image delete successfully", data);
  }
  if (error) {
    console.log(error);
  }
  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Box
        sx={{
          position: "relative",
          border: 1,
          borderStyle: "dashed",
          width: "100%",
          height: "200px",
          maxWidth: "100%",
        }}
      >
        <AvatarGroup variant="square" max={5} sx={{ position: "absolute" }}>
          {imageUrl?.map((img: any, index) => (
            <Avatar
              onClick={() => deleteFile(index, img.public_id)}
              sx={{
                width: "100px",
                height: "150px",
                cursor: "pointer",
                margin: 2,
              }}
              alt="Remy Sharp"
              variant="square"
              src={img.url}
            />
          ))}
        </AvatarGroup>
      </Box>

      <IconButton
        onClick={() => handleImageUpload()}
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
    </Box>
  );
}
