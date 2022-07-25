import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bg_image: {
      type: String,
      default: "image",
    },
    image_level: {
      type: String,
      default: "image",
    },
    screenshots: [String],
    author: {
      type: String,
      default: "user",
    },
    live_link: {
      type: String,
      required: true,
    },
    git_code_link: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    tags: [String],
    admin_feature: {
      image: {
        type: String,
        required: true,
      },
      tags: [String],
    },
    user_feature: {
      image: {
        type: String,
        required: true,
      },
      tags: [String],
    },
    about: {
      title: {
        type: String,
        required: true,
      },
      tools: [String],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Projects = model("Projects", userSchema);

export default Projects;
