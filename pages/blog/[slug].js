import React from 'react';
import { useRouter } from 'next/router'

import Head from '../../src/infra/components/Head';
import Header from '../../src/patterns/Header';
import { getAllPosts } from '../../scripts/blog/getAllPosts';
import { getPostBySlug } from '../../scripts/blog/getPostBySlug';

export default function Home({ post }) {

    return (
        <>
            <Head title={`Gabriel Nunes — ${post.metadata.title}`} description={post.metadata.description} />
            <div className="container">
                <Header>
                    <a href="/blog" className="todosPosts">todos os posts</a>
                </Header>
                <div className="post-blog">
                    <h1>{post.metadata.title}</h1>

                    <hr/>

                    <p className="data">{post.metadata.date} | por <a href="http://twitter.com/nunesgabriel">@nunesgabriel</a></p>

                    <hr/>
                    <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ params })  {
    const post = getPostBySlug(params.slug);

    return {
        props: {
            post
        }
    }
} 

export async function getStaticPaths() {
    const posts = getAllPosts();

    const paths = posts.map((post) => ({
        params: { slug: post.metadata.slug },
    }))

    return { paths, fallback: false }
}