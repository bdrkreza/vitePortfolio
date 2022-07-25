import { useMutation } from "@apollo/client";
import { PhotoCamera } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { DELETE_IMAGE } from "../../../../services";
import { uploadImage } from "../../../lib/uploadFile";
import { IFile } from "./add-project-form";

type Props = {
  setProjectImage: Dispatch<SetStateAction<IFile | null>>;
  setProjectBgImage: Dispatch<SetStateAction<IFile | null>>;
  image: IFile | null;
  bgImage: IFile | null;
};

export default function ProjectImage({
  setProjectImage,
  setProjectBgImage,
  image,
  bgImage,
}: Props) {
  const [deleteImage, { data, error, reset }] = useMutation(DELETE_IMAGE);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onChangePicture = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      uploadImage({
        file: file,
        successCallback: (data: any) => {
          setProjectImage(data);
          setIsUploading(false);
          console.log("Image uploaded successfully.");
        },
      });
    }
  };

  const handleDelete = (id: any) => {
    setProjectImage(null);
    deleteImage({
      variables: {
        deleteImageId: id,
      },
    });
  };

  const onChangeBgPicture = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      uploadImage({
        file: file,
        successCallback: (data: any) => {
          setProjectBgImage(data);
          setIsLoading(false);
          console.log("Image uploaded successfully.");
        },
      });
    }
  };

  const handleBgDelete = (id: any) => {
    setProjectBgImage(null);
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
              <Typography sx={{ marginTop: -5 }}>Project Image</Typography>
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
        {isLoading ? (
          <CircularProgress style={{ position: "absolute", zIndex: 1 }} />
        ) : (
          <>
            <div className="file-Upload">
              <PhotoCamera
                sx={{ color: "var(--info)", width: "60px", height: "150px" }}
              />

              <div className="file btn w-100 btn-primary">
                <input onChange={onChangeBgPicture} type="file" name="file" />
                <Typography sx={{ marginTop: -5 }}>Project bg Image</Typography>
              </div>
            </div>
            {bgImage && (
              <>
                <FaWindowClose
                  onClick={() => handleBgDelete(bgImage.public_id)}
                  style={{
                    position: "fixed",
                    cursor: "pointer",
                    color: "var(--color-text)",
                    height: 25,
                    width: 25,
                    marginTop: -120,
                    marginLeft: 240,
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
                  src={bgImage.secure_url}
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
