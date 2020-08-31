import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";


export default function BlogPost() {
  return (
    <div>
      <h1>Blog Post</h1>

      <h2>Blog Post</h2>
      <p>
        ...
      </p>
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