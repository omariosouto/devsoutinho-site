import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro';

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
        },
        {
          title: 'Bla',
          author: 'Ruby in deep',
        },
      ];
    }
  },
};


export const schema = makeExecutableSchema({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
  playground: true,
  tracing: true,
});

/**
## Referências

- Como organizar?
  - https://www.apollographql.com/blog/how-to-build-graphql-servers-87587591ded5/
*/