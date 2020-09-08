import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro';

// Vídeos 
// Links
// Posts

const typeDefs = gql`
  type Video {
    title: String
  }

  type Query {
    videos: [Video],
  }
`;

const resolvers = {
  Query: {
    videos() {
      return [
        {
          title: 'Mario',
          author: 'JavaScript in deep',
          published: new Date('2020-02-01 00:00'),
        },
        {
          title: 'Bla',
          author: 'Ruby in deep',
          published: new Date('2020-01-01 00:00'),
        },
      ];
    }
  },
};

export const config = {
  api: {
    bodyParser: false
  }
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  // N é boa prática, maaaas...
  introspection: true,
  playground: true,
});

export default (req, res) => {
  server.createHandler({
    path: '/api/graphql/',
  })(req,res);
}

/**
## Referências

- Como organizar?
  - https://www.apollographql.com/blog/how-to-build-graphql-servers-87587591ded5/
  - https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/#enabling-graphql-playground-in-production
  - https://www.apollographql.com/docs/apollo-server/api/apollo-server/#makeexecutableschema
*/