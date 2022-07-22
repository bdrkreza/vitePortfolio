import { ApolloError, AuthenticationError } from "apollo-server";
import Projects from "../models/project.model";
import Category from "../models/projectCategory.model";

export const data = [
  {
    _id: "01",
    image:
      "https://res.cloudinary.com/rkreza/image/upload/v1647797890/project/image_pm44hd.png",
    title: "modus - e-commerce &  web app",
    author: "by rkreza - modus Theme",
    liveLink: "https://modus-tailwind.web.app/",
    getHubLink: "https://github.com/bdrkreza/modus-mern-full-complete-website",
    userFeature: {
      title: "User Featured",
      image:
        "https://res.cloudinary.com/rkreza/image/upload/v1647797889/project/screen_2_pohitn.png",
      tags: [
        "user can visit profile",
        "user permissions with Complete order list",
        "User can profile edit and add",
      ],
    },
    adminFeature: {
      title: "Admin feature",
      image:
        "https://res.cloudinary.com/rkreza/image/upload/v1647797889/project/screen_1_oi5v2c.png",
      tags: [
        "admin List with add/Edit Modals",
        "admin permissions with Complete CRUD",
        "admin Roles with complete CRUD",
      ],
    },

    screenshots: [
      "https://res.cloudinary.com/rkreza/image/upload/v1647797894/project/screen_uxrj3l.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647797889/project/screen_4_e6blbd.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647797894/project/screen_5_dd2m54.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647797890/project/screen_6_sdjsqk.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647797889/project/screen_1_oi5v2c.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647797889/project/screen_2_pohitn.png",
    ],

    imageLevel:
      "https://res.cloudinary.com/rkreza/image/upload/v1647797906/project/screen_3_lqzjxc.png",

    about: {
      name: "about",
      title: `eCommerce website templates create online stores that are responsive, flexible,
             retina-ready, and easy to use. They are all powered by the Tailwind framework what gives them the mobility you need.
             Pick the online shop site skin tool you dig the most and start editing it according to your web project needs and requests.
             You will be surprised how much you can accomplish with these templates. Enjoy!`,
      tools: [
        "html",
        "css",
        "Tailwind Css",
        "reactJs",
        "redux",
        "node js",
        "express js",
        "mongodb",
        "firebase",
        "ssl-commerce",
      ],
    },

    tags: [
      "modus theme for modern creative websites",
      "set of e-commerce designer and artist templates",
      "dynamic admin dashboard builder compatibility",
    ],
    rating: 4.1,
    date: Date(),
  },
  {
    _id: "02",
    image:
      "https://res.cloudinary.com/rkreza/image/upload/v1647801698/project/redsecurity_7_r5v8zi.jpg",
    title: " Private Security Service react Theme",
    author: "by rkreza - private security Theme",
    liveLink: "https://modus-tailwind.web.app/",
    getHubLink: "https://github.com/bdrkreza/modus-mern-full-complete-website",

    userFeature: {
      title: "User Featured",
      image:
        "https://res.cloudinary.com/rkreza/image/upload/v1647801696/project/redsecurity_6_rwbn27.png",
      tags: [
        "user can visit profile",
        "user permissions with Complete order list",
        "User can profile edit and add",
        "user can review service provider",
      ],
    },
    adminFeature: {
      title: "Admin feature",
      image:
        "https://res.cloudinary.com/rkreza/image/upload/v1647801697/project/redsecurity_9_alybeq.png",
      tags: [
        "admin List with add/Edit Modals",
        "admin permissions with Complete CRUD",
        "admin Roles with complete CRUD",
        "full width or sidebar single pages",
      ],
    },

    screenshots: [
      "https://res.cloudinary.com/rkreza/image/upload/v1647801698/project/redsecurity_7_r5v8zi.jpg",
      "https://res.cloudinary.com/rkreza/image/upload/v1647801699/project/redsecurity_1_jkglt0.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647801697/project/redsecurity_9_alybeq.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647801696/project/redsecurity_6_rwbn27.png",
      "https://res.cloudinary.com/rkreza/image/upload/v1647801696/project/redsecurity_2_sqqn2n.jpg",
    ],

    imageLevel:
      "https://res.cloudinary.com/rkreza/image/upload/v1647801712/project/image_vgzujb.png",

    about: {
      name: "about",
      title: `RedSecurity is a modern react based functional template created for Cyber Security Agency & Company website. 
        The template offers four homepage variations design with a blog, blog details other inner pages.
         It looks beautifully stunning on all types of screens and devices including Windows, Mac, iOS, Android, etc. 
        It is built with react js, Sass & Bootstrap 4.x.`,
      tools: [
        "html",
        "css",
        "Tailwind Css",
        "reactJs",
        "redux",
        "node js",
        "express js",
        "mongodb",
        "firebase",
        "ssl-commerce",
      ],
    },

    tags: [
      "it’s a bodyguard and security company WordPress theme",
      "redSecurity theme for modern agency creative websites",
      "set of security designer and artist templates",
      "dynamic admin dashboard builder compatibility",
    ],
    rating: 4,
    date: Date(),
  },
];

const createProject = {
  name: "project",
  description: "create project and return project ",
  async resolve(_, { input }, { user }) {
    try {
      if (!user || !user.role.includes("admin")) {
        return new AuthenticationError("you must be logged in");
      }
      if (!input) {
        return new ApolloError("File Contains No Data", "503");
      }
      const project = await new Projects(input);

      if (!project) {
        return new ApolloError("You must provide a project", "503");
      }
      const result = await project.save();
      return result;
    } catch (error) {
      return new ApolloError("Internal Error", "400", error);
    }
  },
};

const updateProject = {
  name: "project",
  description: "Update project and return project ",
  async resolve(_, { id, input }, { user }) {
    try {
      if (!user || !user.role.includes("admin")) {
        return new AuthenticationError("you must be logged in");
      }
      const project = await Projects.findOne({ _id: id });
      if (project) {
        const updateProject = await Projects.findOneAndUpdate(
          { _id: project._id },
          input,
          {
            new: true,
          }
        );
        return updateProject;
      } else {
        return new ApolloError("You must provide by Id a project", "400");
      }
    } catch (error) {
      return new ApolloError("Bad File Request. ...", "400", error);
    }
  },
};
const deleteProject = {
  name: "project",
  description: "Delete project and return true",
  async resolve(_, { id }, { user }) {
    try {
      if (!user || !user.role.includes("admin")) {
        return new AuthenticationError("you must be logged in");
      }
      const project = await Projects.findById({ _id: id });
      if (project) {
        await project.remove();
        return true;
      } else {
        return new ApolloError("You must provide by Id a project", "400");
      }
    } catch (error) {
      return new ApolloError("Bad File Request. ...", "400", error);
    }
  },
};

const createCategory = {
  name: "category",
  description: "create category and return category",
  async resolve(_, { input }, { user }) {
    try {
      if (!user || !user.role.includes("admin")) {
        return new AuthenticationError("you must be logged in");
      }
      if (!input) {
        return new ApolloError("File Contains No Data", "503");
      }
      const category = await new Category(input);

      if (!category) {
        return new ApolloError("You must provide a category", "503");
      }
      const result = await category.save();
      return result;
    } catch (error) {
      return new ApolloError("Internal Error", "400", error);
    }
  },
};
const filterProject = {
  name: "category",
  description: "create category and return category",
  async resolve(_, { filter, skip, take }) {
    try {
      const where = filter
        ? {
            $or: [
              { title: { $regex: filter, $options: "i" } },
              { category: filter },
            ],
          }
        : {};

      const page = parseInt(skip) - 1 || 0;
      const limit = parseInt(take) || 5;

      const result = await Projects.find(where)
        .skip(page * limit)
        .limit(limit);

      return result;
    } catch (error) {
      return new ApolloError("Internal Error", "400", error);
    }
  },
};
const projectResolver = {
  Query: {
    filterProject,
    projects: async () => await Projects.find({}),
    singleProject: async (_, { id }) => await Projects.findById({ _id: id }),
    categories: async () => await Category.find({}),
    category: async (p, { category }) => {
      console.log(p);
      const result = await Category.find({ category: category });
      return result;
    },
  },
  Mutation: {
    createProject,
    updateProject,
    deleteProject,
    createCategory,
  },
};

export default projectResolver;
