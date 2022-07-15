import express from "express";
import { graphqlHTTP } from "express-graphql";
import userResolvers from "./resolvers/resolvers";
import schema from "./schema/user.schema";
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: userResolvers,
    graphiql: true,
  })
);

const PORT = 8000;

app.listen(PORT);

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
