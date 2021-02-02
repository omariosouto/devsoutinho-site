import React from 'react';

import Head from '../src/infra/components/Head';
import Header from '../src/patterns/Header';
import Details from '../src/patterns/Details';
import { getAllPosts } from '../scripts/blog/getAllPosts';

export default function Home({ posts }) {
  return (
    <>
      <Head title="Gabriel Nunes" />
      <div className="container">
        <Header />

        <section className="about">
          <h1>Blog</h1>
        </section>

            {posts.map((post, index) => {
              return <p>
                {post.metadata.date}
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <a href={`/blog/${post.metadata.slug}`}>
                   {post.metadata.title}
                </a>
              </p>
            })}
         

      </div>
    </>
  );
}

export async function getStaticProps()  {
  const posts = getAllPosts();

  return {
    props: {
      posts
    }
  }
} 