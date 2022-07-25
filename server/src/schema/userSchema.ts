import { buildSchema } from "graphql";

const userSchema = buildSchema(`
    input UserInput {
        username: String!
        email: String!
        role:String
        password:String!
    }

    type User {
        _id: String
        username: String!
        email: String!
        password:String
        role:String!
    }
    type Tokens {
        token: String!
      }

    type Mutation {
        createUser(input: UserInput): User
        loginUser(email: String, password: String): Tokens
        updateUser(id: Int!, input: UserInput): User
        deleteUser(id:String): Boolean
    }

    type Query {
        getUser(id: String): User
        getUsers: [User]
    }
`);

export default userSchema;
