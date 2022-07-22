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
  }

type Project {
    _id: String
    image: String
    title: String
    author: String
    category:String
    slug:String
    liveLink: String
    getHubLink: String
    screenshots: [String]
    imagelevel: String
    tags: [String]
    rating: Float!
    date: String
    userFeature:Auth
    adminFeature:Auth
    about: About
  }

  type About {
    title:String!
    tools:[String]
  }


 type Auth {
    title:String
    image: String
    tags: [String]
}
input AboutInput {
    title:String!
    tools:[String]
  }
input FeatureInput{
    title: String
    image: String
    tags: [String]
}


input ProjectInput {
    image: String!
    title: String!
    author: String!
    liveLink: String!
    getHubLink: String!
    screenshots: [String]
    imagelevel: String!
    tags: [String]!
    rating: Float
    category: String!
    slug: String!
    date: String
    adminFeature: FeatureInput
    userFeature: FeatureInput
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
