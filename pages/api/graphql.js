import { ApolloServer, gql } from 'apollo-server-micro';
import { getAllPosts } from '../../scripts/blog/getAllPosts';

const typeDefs = gql`
  type PostMetadata {
    title: String
    slug: String
    excerpt: String
  }
  type Post {
    metadata: PostMetadata
    content: String
  }

  type Query {
    sayHello: String
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts() {
      return getAllPosts();
    },
    sayHello() {
      return 'Hello World!';
    },
  },
};

export const graphQLClient = new ApolloServer({ typeDefs, resolvers });

export default (req, res) => {
  graphQLClient.createHandler({
    path: '/api/graphql/',
  })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};
