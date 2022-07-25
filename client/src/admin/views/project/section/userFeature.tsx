import { useMutation } from "@apollo/client";
import { PhotoCamera } from "@mui/icons-material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import {
  Autocomplete,
  Box,
  Chip,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { DELETE_IMAGE } from "../../../../services";
import { uploadImage } from "../../../lib/uploadFile";
import { IFile } from "./add-project-form";

type Props = {
  setUserTags: Dispatch<SetStateAction<string[] | null>>;
  setUserImage: Dispatch<SetStateAction<IFile | null>>;
  image: IFile | null;
};

export default function UserFeature({
  setUserTags,
  setUserImage,
  image,
}: Props) {
  const [deleteImage, { data, error }] = useMutation(DELETE_IMAGE);
  const [isUploading, setIsUploading] = useState(false);
  const onChangePicture = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      uploadImage({
        file: file,
        successCallback: (data: any) => {
          setUserImage(data);
          setIsUploading(false);
          console.log("Image uploaded successfully.");
        },
      });
    }
  };

  const handleDelete = (id: any) => {
    setUserImage(null);
    deleteImage({
      variables: {
        deleteImageId: id,
      },
    });
  };

  if (data) {
    console.log("image delete successfully", data);
  }

  console.log(error);
  return (
    <div>
      <Box sx={classes.rootBox}>
        {isUploading ? (
          <CircularProgress style={{ position: "absolute", zIndex: 1 }} />
        ) : (
          <>
            <div className="file-Upload">
              <PhotoCamera sx={classes.photo} />
              <Typography sx={{ marginTop: -5 }}>User Image</Typography>
              <div className="file btn w-100 btn-primary">
                <input onChange={onChangePicture} type="file" name="file" />
              </div>
            </div>
            {image && (
              <>
                <CancelPresentationIcon
                  onClick={() => handleDelete(image?.public_id)}
                  sx={classes.closeIcon}
                />
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    position: "absolute",
                  }}
                  src={image?.secure_url}
                  alt=""
                />
              </>
            )}
          </>
        )}
      </Box>
      <Autocomplete
        multiple
        id="tags-filled"
        options={userTags.map((option: any) => option?.title)}
        freeSolo
        onChange={(e, tags: any) => setUserTags(tags)}
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
          <TextField {...params} variant="filled" placeholder="User Tags" />
        )}
      />
    </div>
  );
}

const userTags = [
  { title: "user can visit profile" },
  { title: "user permissions with Complete order list" },
  { title: "User can profile edit and add" },
  { title: "user can review service provider" },
];

const classes = {
  rootBox: {
    mt: 3,
    display: "flex",
    height: "200px",
    minWidth: "100%",
    maxWidth: "100%",
    justifyContent: "center",
    border: 1,
    borderStyle: "dashed",
    alignItems: "center",
    position: "relative",
  },
  photo: {
    color: "var(--info)",
    width: "60px",
    height: "150px",
  },
  closeIcon: {
    position: "fixed",
    cursor: "pointer",
    color: "var(--color-text)",
    height: 25,
    width: 25,
    zIndex: 2,
  },
};
