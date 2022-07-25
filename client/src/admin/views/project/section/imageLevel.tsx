import { useMutation } from "@apollo/client";
import { PhotoCamera } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { DELETE_IMAGE } from "../../../../services";
import { uploadImage } from "../../../lib/uploadFile";
import { IFile } from "./add-project-form";

type Props = {
  setImageLevel: Dispatch<SetStateAction<IFile | null>>;
  image: IFile | null;
};

export default function ImageLevel({ setImageLevel, image }: Props) {
  const [deleteImage, { data, error }] = useMutation(DELETE_IMAGE);
  const [isUploading, setIsUploading] = useState(false);
  const onChangePicture = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      uploadImage({
        file: file,
        successCallback: (data: any) => {
          setImageLevel(data);
          setIsUploading(false);
          console.log("Image uploaded successfully.");
        },
      });
    }
  };

  const handleDelete = (id: any) => {
    setImageLevel(null);
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
      <Box
        sx={{
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
        }}
      >
        {isUploading ? (
          <CircularProgress style={{ position: "absolute", zIndex: 1 }} />
        ) : (
          <>
            <div className="file-Upload">
              <PhotoCamera
                sx={{ color: "var(--info)", width: "60px", height: "150px" }}
              />
              <Typography sx={{ marginTop: -5 }}>
                Project Image level
              </Typography>
              <div className="file btn w-100 btn-primary">
                <input onChange={onChangePicture} type="file" name="file" />
              </div>
            </div>
            {image && (
              <>
                <FaWindowClose
                  onClick={() => handleDelete(image?.public_id)}
                  style={{
                    position: "fixed",
                    cursor: "pointer",
                    color: "var(--color-text)",
                    height: 25,
                    width: 25,
                    zIndex: 2,
                  }}
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
    </div>
  );
}
