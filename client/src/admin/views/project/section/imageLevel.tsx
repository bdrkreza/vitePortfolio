import { PhotoCamera } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
export default function ImageLevel() {
  const [file, setFile] = useState<string | null>(null);
  const [imgData, setImgData] = useState<string | undefined>(undefined);
  console.log(imgData);
  const onChangePicture = (e: any) => {
    const imgUrl = e.target.files?.[0];

    if (imgUrl != null) {
      let url = URL.createObjectURL(imgUrl);
      setFile(imgUrl);
      setImgData(url);
    }
  };

  const handleDelete = () => {
    setImgData("");
    setFile("");
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          height: "200px",
          width: "400px",
          justifyContent: "center",
          border: 1,
          borderStyle: "dashed",
          alignItems: "center",
          position: "relative",
        }}
      >
        {file && (
          <>
            <MdOutlineClose
              onClick={handleDelete}
              style={{
                position: "absolute",
                cursor: "pointer",
                color: "var(-color-text)",
                height: 25,
                width: 25,
                marginTop: -165,
                marginLeft: 360,
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
              src={imgData}
              alt=""
            />
          </>
        )}

        <div className="file-Upload">
          <PhotoCamera
            sx={{ color: "var(--info)", width: "60px", height: "150px" }}
          />
          <Typography sx={{ marginTop: -5 }}>Image level</Typography>
          <div className="file btn w-100 btn-primary">
            <input onChange={onChangePicture} type="file" name="file" />
          </div>
        </div>
      </Box>
    </div>
  );
}
