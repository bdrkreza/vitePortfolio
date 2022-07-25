import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password)
  }
`;
export const REGISTER_USER = gql`
  mutation Mutation($input: UserInput) {
    createUser(input: $input) {
      username
      email
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: ProjectInput) {
    createProject(input: $input) {
      name
      title
      image
      bg_image
      image_level
      category
      screenshots
      git_code_link
      live_link
      about {
        title
        tools
      }
      admin_feature {
        image
        tags
      }
      user_feature {
        image
        tags
      }
    }
  }
`;

export const DELETE_IMAGE = gql`
  mutation Mutation($deleteImageId: String) {
    deleteImage(id: $deleteImageId)
  }
`;
