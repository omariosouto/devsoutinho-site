import { getAllPosts } from '../../scripts/blog/getAllPosts';

export default function handler(request, response) {
  response.json(getAllPosts());
}
