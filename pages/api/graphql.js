import {
  ApolloServer,
  gql,
  makeExecutableSchema
} from 'apollo-server-micro';

// ./contributions.js
const CONTRIBUTIONS_DB = [
  {
    type: 'POST',
    title: 'Git e Github para Sobrevivência #04: Issues, PullRequests, Templates e features legais do Github',
  }
];

const contributions = {
  typeDefs: gql`
    enum ContributionType {
      POST
      PODCAST
      VIDEO
      EVENT
    }

    type Contribution {
      type: ContributionType 
      title: String
      url: String
      date: String
    }

    input ContributionInput {
      title: String!
    }

    extend type Query {
      contributions(input: ContributionInput): [Contribution]!
      contribution(input: ContributionInput): Contribution
    }
  `,
  resolvers: {
    Query: {
      contributions(_, { input }, ctx) {
        return CONTRIBUTIONS_DB
      },
      contribution(_, { input }, ctx) {
        return CONTRIBUTIONS_DB[0];
      },
    }
  }
}
// ===========

const typeDefs = gql`
  type Query {
    greet: String
  }
`;

export const config = {
  api: {
    bodyParser: false
  }
};


export const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    contributions.typeDefs,
  ],
  resolvers: {
    Query: {
      greet: () => 'Welcome to DevSoutinho GraphQL API',
      ...contributions.resolvers.Query,
    },
  },
});

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

export default (req, res) => {
  server.createHandler({
    path: '/api/graphql/',
  })(req,res);
}