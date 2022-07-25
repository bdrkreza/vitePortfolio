import axios from "axios";
import { CLOUDINARY_API_BASE_URL, uploadPreset } from "../../lib/config";

export const uploadImage = ({ file, successCallback }: any) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);

  axios
    .post(CLOUDINARY_API_BASE_URL, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => successCallback(response.data));
};
