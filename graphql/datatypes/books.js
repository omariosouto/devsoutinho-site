import { gql } from 'apollo-server-micro';

const typeDef = gql`
  type Book {
    title: String
    author: String
  }
`;


export default {
  typeDef,
  resolver: () => [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ],
}