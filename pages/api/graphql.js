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

export default (req, res) => {
  new ApolloServer({
    schema,
    introspection: true,
    playground: true,
  }).createHandler({
    path: '/api/graphql',
  })(req,res);
}

/**
## Referências

- Como organizar?
  - https://www.apollographql.com/blog/how-to-build-graphql-servers-87587591ded5/
*/