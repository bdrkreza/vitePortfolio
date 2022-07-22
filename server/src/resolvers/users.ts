import { ApolloError, AuthenticationError } from "apollo-server";
import { GraphQLString } from "graphql";
import { createJWTToken } from "../middleware/auth";
import Users from "../models/users.models";

const createUser = async (
  _,
  { input: { username, email, password, role } }
) => {
  try {
    const userExists = await Users.findOne({ email: email });
    if (userExists) {
      throw new ApolloError("user email already exists");
    }
    const saveUser = new Users({
      username,
      email,
      password,
      role,
    });
    const result = await saveUser.save();
    return result;
  } catch (error: any) {
    throw new ApolloError("Something went wrong", error.message);
  }
};

const deleteUser = async (_, { id }) => {
  try {
    const user = await Users.findById({ _id: id });
    if (user) {
      await user.remove();
    } else {
      throw new AuthenticationError("product not found with this Id!");
    }
  } catch (error) {
    throw new AuthenticationError(error);
  }
  return true;
};

const loginUser = {
  type: GraphQLString,
  description: "login user and return token",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_, { email, password }) {
    try {
      const user = await Users.findOne({ email: email }).select("+password");
      if (!user) return null;

      const isValidPassword = await user.isValidPassword(password);
      if (!isValidPassword) {
        throw new ApolloError("Incorrect email or password!");
      }
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      };
      const token = createJWTToken(payload);
      return token;
    } catch (error) {
      throw new ApolloError("Something went wrong");
    }
  },
};

const userResolver = {
  Query: {
    getUsers: async () => await Users.find({}),
    getUser: async (_, { id }, { user }) => {
      if (!user || !user.role.includes("admin")) return null;
      const result = await Users.findById({ _id: id });
      return result;
    },
  },
  Mutation: {
    createUser,
    loginUser,
    deleteUser,
  },
};

export default userResolver;
