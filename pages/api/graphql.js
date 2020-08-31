import { ApolloServer, gql } from 'apollo-server-micro';
import books from '../../graphql/datatypes/books';

const typeDefs = gql`
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: books.resolver,
  },
};

const server = new ApolloServer({
  typeDefs: [
    books.typeDef,
    typeDefs
  ],
  resolvers,
  playground: true,
  tracing: true,
});


export const config = {
  api: {
    bodyParser: false
  }
};

const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
  path: '/api/graphql'
});

export default handler;