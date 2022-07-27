import { useMutation } from "@apollo/client";
import SaveIcon from "@mui/icons-material/Save";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Button, CircularProgress } from "@mui/material";
import { green, red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CREATE_PROJECT } from "../../../../services";
import AdminFeature from "./admin_feature";
import AdminInputTags from "./admin_tags";
import ProjectDatePicker from "./date_picker";
import ImageLevel from "./image_level";
import ImageCarousel from "./project-image-carousel";
import ProjectTools from "./project-tools";
import ProjectCategory from "./project_category";
import ProjectImage from "./project_image";
import ProjectTags from "./project_tags";
import UserFeature from "./user_feature";
import UserInputTags from "./user_tags";

export interface IFormData {
  name: string;
  title: string;
  live_link: string;
  git_code_link: string;
  start_date: string;
  end_date: string;
  category: {
    title: string;
  };
  about_title: string;
  project_tags: string[];
  project_tools: string[];
  admin_tags: string[];
  user_tags: string[];
}
export type IFile = {
  secure_url: string;
  public_id: string;
};

export default function AddProjectInputs() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
  let navigate = useNavigate();
  const [imageLevel, setImageLevel] = useState<IFile | null>(null);
  const [projectImage, setProjectImage] = useState<IFile | null>(null);
  const [projectBgImage, setProjectBgImage] = useState<IFile | null>(null);
  const [userImage, setUserImage] = useState<IFile | null>(null);
  const [adminImage, setAdminImage] = useState<IFile | null>(null);
  const [imageTags, setImageTags] = useState<IFile[] | undefined>([]);

  const [AddProject, { data, loading, error }] = useMutation(CREATE_PROJECT);

  if (loading) {
    toast("Please wait...", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-success",
      progressClassName: "success-progress-bar",
      autoClose: 3500,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      toastId: 1,
    });
  }
  if (data) {
    toast.success("project created in successfully", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-error",
      progressClassName: "error-progress-bar",
      autoClose: 3000,
      toastId: 2,
    });
    console.log("create project", data);
    setTimeout(() => {
      navigate("/dashboard/app-project", { replace: true });
    }, 3000);
  }

  if (error) {
    toast.error(error?.message, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-error",
      progressClassName: "error-progress-bar",
      autoClose: 2000,
      toastId: 3,
    });
    console.log(error.message);
  }

  const onSubmit = handleSubmit((data, e: any) => {
    console.log(data);
    AddProject({
      variables: {
        input: {
          name: data.name,
          title: data.title,
          live_link: data.live_link,
          git_code_link: data.git_code_link,
          slug: data.category,
          category: data.category,
          start_date: data.start_date,
          end_date: data.end_date,
          tags: data.project_tags,
          about: {
            title: data.about_title,
            tools: data.project_tools,
          },
          admin_feature: {
            image: adminImage?.secure_url,
            tags: data.admin_tags,
          },
          user_feature: {
            image: userImage?.secure_url,
            tags: data.user_tags,
          },
          image_level: imageLevel?.secure_url,
          image: projectImage?.secure_url,
          bg_image: projectBgImage?.secure_url,
          screenshots: imageTags,
        },
      },
    });
  });

  const buttonSx = {
    width: "200px",
    height: "50px",
    marginLeft: 5,
    ...(data && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  return (
    <Box sx={classes.rootBox}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} sx={{ padding: "20px" }}>
            <ProjectDatePicker register={register} errors={errors} />
            <Grid item xs={12}>
              <TextField
                sx={{ mb: 3 }}
                error={Boolean(errors.name)}
                fullWidth
                autoComplete="project-title"
                variant="outlined"
                label={errors.name ? "name is required" : "project name"}
                placeholder={errors.name?.message}
                {...register("name", { required: "name is required" })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors.title)}
                sx={{ mb: 3 }}
                type="text"
                fullWidth
                autoComplete="project title"
                variant="outlined"
                label={errors.title ? "tile is required" : "project title"}
                placeholder={errors.title?.message}
                {...register("title", { required: "tile is required" })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors.live_link)}
                sx={{ mb: 3 }}
                fullWidth
                autoComplete="project_live_link"
                variant="outlined"
                label={
                  errors.title ? "live link is required" : "project live link"
                }
                placeholder={errors.live_link?.message}
                {...register("live_link", {
                  required: "live link is required",
                })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors.git_code_link)}
                sx={{ mb: 3 }}
                fullWidth
                autoComplete="git_code_link"
                variant="outlined"
                label={
                  errors.git_code_link
                    ? errors.git_code_link?.message
                    : "project git code link"
                }
                placeholder={errors.git_code_link?.message}
                {...register("git_code_link", {
                  required: "git code link is required",
                })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ mb: 1 }}
                fullWidth
                autoComplete="about_title"
                variant="outlined"
                error={Boolean(errors.about_title)}
                label={
                  errors.about_title
                    ? errors.about_title?.message
                    : "about title"
                }
                placeholder={errors.about_title?.message}
                {...register("about_title", {
                  required: "about title is required",
                })}
                required
              />
            </Grid>
            <ProjectCategory control={control} errors={errors} />
            <ProjectTools control={control} errors={errors} />
            <ProjectTags control={control} errors={errors} />
            <UserInputTags control={control} errors={errors} />
            <AdminInputTags control={control} errors={errors} />
            <ImageLevel setImageLevel={setImageLevel} image={imageLevel} />
          </Grid>

          <Grid xs={12} md={6} sx={{ padding: "20px" }}>
            <ProjectImage
              setProjectImage={setProjectImage}
              setProjectBgImage={setProjectBgImage}
              image={projectImage}
              bgImage={projectBgImage}
            />

            <UserFeature setUserImage={setUserImage} image={userImage} />
            <AdminFeature setAdminImage={setAdminImage} image={adminImage} />
            <ImageCarousel setImageTags={setImageTags} imageTags={imageTags} />
          </Grid>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              sx={buttonSx}
              color="primary"
              onClick={onSubmit}
              disabled={loading}
              startIcon={data ? <TaskAltIcon /> : <SaveIcon />}
              variant="contained"
            >
              Save
              {loading && (
                <CircularProgress
                  size={28}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Button>
          </Box>
        </Grid>
      </form>
    </Box>
  );
}

const classes = {
  rootBox: {
    border: 3,
    borderStyle: "groove",
    padding: "50px",
    boxShadow: "1px 1px 2px 1px rgb(215 216 222 / 44%)",
  },
  formLabel: {
    ...("errors.name" && {
      "& .MuiInputLabel-root": {
        color: red[500],
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red",
        },
        "&.Mui-focused fieldset": {
          borderColor: red[300],
        },
      },
      bgcolor: red[100],
    }),
  },
};
