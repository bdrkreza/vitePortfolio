import { useMutation } from "@apollo/client";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CREATE_PROJECT } from "../../../../services";
import AdminFeature from "./adminFeature";
import AdminInputTags from "./adminTags";
import ProjectCategory from "./category_tags";
import ProjectDatePicker from "./datePicker";
import ImageLevel from "./imageLevel";
import ImageCarousel from "./project-image-carousel";
import ProjectTools from "./project-tools";
import ProjectImage from "./projectImage";
import ProjectTags from "./projectTags";
import UserFeature from "./userFeature";
import UserInputTags from "./userTags";

interface IFormData {
  name: string;
  title: string;
  live_link: string;
  git_code_link: string;
  start_date: string;
  end_date: string;
  category: string;
  about_title: string;
}
export type IFile = {
  secure_url: string;
  public_id: string;
};

interface ICategory {
  inputValue?: string;
  title: string;
}

export default function AddProjectInputs() {
  const [formData, setFormData] = useState<IFormData>({} as IFormData);
  const [imageLevel, setImageLevel] = useState<IFile | null>(null);
  const [projectImage, setProjectImage] = useState<IFile | null>(null);
  const [projectBgImage, setProjectBgImage] = useState<IFile | null>(null);
  const [userImage, setUserImage] = useState<IFile | null>(null);
  const [adminImage, setAdminImage] = useState<IFile | null>(null);
  const [imageTags, setImageTags] = useState<IFile[] | undefined>([]);
  const [userTags, setUserTags] = useState<string[] | null>([]);
  const [adminTags, setAdminTags] = useState<string[] | null>([]);
  const [projectTools, setProjectTools] = useState<string[] | null>([]);
  const [projectTags, setProjectTags] = useState<string[] | null>([]);
  const [projectCategory, setProjectCategory] = useState<ICategory | null>(
    null
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [AddProject, { data, loading, error }] = useMutation(CREATE_PROJECT);
  if (data) {
    console.log("create project", data);
  }
  if (loading) return <Box>Submitting...</Box>;
  if (error) return <Box> Submission error!{error.message}</Box>;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    AddProject({
      variables: {
        input: {
          name: formData.name,
          title: formData.title,
          live_link: formData.live_link,
          git_code_link: formData.git_code_link,
          slug: projectCategory?.title,
          category: projectCategory?.title,
          start_date: formData.start_date,
          end_date: formData.end_date,
          image: projectImage?.secure_url,
          bg_image: projectBgImage?.secure_url,
          screenshots: imageTags,
          tags: projectTags,
          about: {
            title: formData.about_title,
            tools: projectTools,
          },
          admin_feature: {
            image: adminImage?.secure_url,
            tags: adminTags,
          },
          user_feature: {
            image: userImage?.secure_url,
            tags: userTags,
          },
          image_level: imageLevel?.secure_url,
        },
      },
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} sx={{ padding: "20px" }}>
          <ProjectDatePicker onChange={onChange} />
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              sx={{ mb: 3 }}
              required
              id="title"
              name="name"
              label="project name"
              fullWidth
              autoComplete="project-title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              sx={{ mb: 3 }}
              id="author"
              name="title"
              label="project title"
              fullWidth
              autoComplete="project title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              required
              sx={{ mb: 3 }}
              id="city"
              name="live_link"
              label="project live link"
              fullWidth
              autoComplete="projectlivelink"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={onChange}
              required
              sx={{ mb: 3 }}
              id="city"
              name="git_code_link"
              label="project code link"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ mb: 3 }}
              onChange={onChange}
              fullWidth
              name="about_title"
              id="standard-basic"
              label="about title"
              variant="outlined"
            />
          </Grid>
          <ProjectCategory setProjectCategory={setProjectCategory} />
          <ProjectTools onChange={onChange} setProjectTools={setProjectTools} />
          <ProjectTags setProjectTags={setProjectTags} />
          <UserInputTags setUserTags={setUserTags} />
          <AdminInputTags setAdminTags={setAdminTags} />
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
        <Box>
          <Button
            sx={{ width: "200px", height: "50px", marginLeft: 10 }}
            color="secondary"
            onClick={handleSubmit}
            // loading={loading}

            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
