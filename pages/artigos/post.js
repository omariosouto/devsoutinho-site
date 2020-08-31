import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";


export default function BlogPost(props) {
  console.log(props);
  return (
    <div>
      <h1>Blog Post</h1>

      <h2>Blog Post</h2>
      <p>
        ...
      </p>

      {props.posts.map((post) => (
        <div>
          {post.title}
        </div>
      ))}
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: [
        {
          title: 'Hi'
        }
      ]
    }
  }
}