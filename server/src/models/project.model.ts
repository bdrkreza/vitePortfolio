import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagelevel: {
      type: String,
      default: "image",
    },
    screenshots: [String],
    author: {
      type: String,
      default: "user",
    },
    liveLink: {
      type: String,
      required: true,
    },
    getHubLink: {
      type: String,
      required: true,
    },
    date: {
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
      required: true,
    },
    tags: [String],
    adminFeature: {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      tags: [String],
    },
    userFeature: {
      title: {
        type: String,
        required: true,
      },
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
