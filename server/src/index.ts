import { ApolloError, ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import connectDB from "./db";
import resolvers from "./resolvers";
import typeDefs from "./schema";
dotenv.config();

//database connect
connectDB();

const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET);
    }
    return null;
  } catch (error) {
    throw new ApolloError("token error", error.message);
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Get the user token from the headers.
    const token = req.headers.authorization || "";

    // Try to retrieve a user with the token
    const user = getUser(token);
    // Add the user to the context

    return user;
  },
  formatError: ({ message, extensions }) => {
    return {
      message,
      extensions,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
