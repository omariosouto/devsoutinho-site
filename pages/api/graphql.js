import { ApolloServer, gql } from 'apollo-server-micro';


// Vídeos 
// Links
// Posts

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books() {
      return [
        {
          title: 'Mario',
          author: 'JavaScript in deep',
        }
      ];
    }
  },
};

const server = new ApolloServer({
  typeDefs: [
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
  path: '/api/graphql/'
});

export default handler; 

/**
## Referências

- Como organizar?
  - https://www.apollographql.com/blog/how-to-build-graphql-servers-87587591ded5/


*/