import { buildSchema } from "graphql";

const bookSchema = buildSchema(`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`);

export default bookSchema;
