import { buildSchema } from "graphql";

const projectSchema = buildSchema(`
type Query {
    projects: [Project]
    filterProject(filter: String, skip: Int, take: Int, sort: String): [Project]
    singleProject(id:String):Project
    categories:[Category]
    category(category: String): Category

  }


  type Mutation {
    createProject(input: ProjectInput):Project
    updateProject(id: String, input: ProjectInput): Project
    deleteProject(id: String): Boolean
    createCategory(input: CategoryInput): Category
    deleteImage(id:String): Boolean
  }

type Project {
    _id: String
    name: String
    bg_image: String
    image: String
    title: String
    author: String
    category: String
    slug: String
    live_link: String
    git_code_link: String
    screenshots: [String]
    image_level: String
    tags: [String]
    rating: Float!
    start_date: String
    end_date: String
    user_feature: AuthFeature
    admin_feature: AuthFeature
    about: About
  }

  type About {
    title:String!
    tools:[String]
  }


 type AuthFeature {
    image: String
    tags: [String]
}

input AboutInput {
    title:String!
    tools:[String]
  }
input AuthFeatureInput{
    image: String
    tags: [String]
}


input ProjectInput {
    name:String!
    title: String!
    image: String!
    bg_image:String!
    author: String
    live_link: String!
    git_code_link: String!
    screenshots: [String]
    image_level: String!
    tags: [String]!
    rating: Float
    category: String!
    slug: String!
    start_date: String
    end_date: String
    admin_feature: AuthFeatureInput
    user_feature: AuthFeatureInput
    about: AboutInput
}

input CategoryInput {
  image:String!
  slug:String!
  category:String!
}

type Category {
  image:String!
  slug:String!
  category:String!
}
`);

export default projectSchema;
