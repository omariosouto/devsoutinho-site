import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Head from '../src/infra/components/Head';
// import Typography from '../src/components/foundation/Typography';
// import Header from '../src/patterns/Header';
// import Footer from '../src/patterns/Footer';
// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
// import { getAllPosts } from '../scripts/posts/postsRepository';


const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
  }
  * {
    font-family: sans-serif;
    color: #333;
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 700px;
    margin: auto;
  }
  h2 {
    background-color: var(--primary);
    color: #fff;
    padding: 3px 5px;
    margin: 0;
  }
  
  h1,
  h3,
  h4,
  h5
  a {
    color: var(--primary);
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  .postsContainer {
  }
  .postsContainer__post {
    a {
      font-weight: bold;
      text-decoration: none;
    }
  }
  .headerContainer {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    img {
      max-width: 50px;
      border-radius: 100%;
      margin-right: 16px;
    }
    h1 {
      margin: 0;
    }
  }
`;

// const fontSize = 30;

// const Title = styled.h3`
//   font-size: ${fontSize}px;
//   a {
//     color: ${({ theme }) => {
//       return theme.colors.primary;
//     }};
//     text-decoration: none;
//     &:hover {
//       color: #666;
//     }
//   }
// `;


// const PostCardWrapper = styled.article`
//   border: 1px solid orange;
//   padding: ${({theme}) => theme.spacing.big}px;
// `;

// function Title({ children }) {
//   return <h3>{children}</h3>
// }

// function PostCard() {
//   return (
//     <PostCardWrapper>
//         <header>
//           <Title>
//             <a rel="bookmark" href="/the-wet-codebase/">Canal DevSoutinho</a>
//           </Title>
//           <small>???? 00, 2020 ☕️ 1 min read</small>
//         </header>
//         <p>Começando agora o CSS.</p>
//     </PostCardWrapper>
//   )
// }

export default function Home({ posts }) {
  return (
    <div>
      <GlobalStyle />
      <Head title="Home - DevSoutinho Site" />

      <header className="headerContainer">
        <img src="https://github.com/omariosouto.png" />
        <h1>
          DevSoutinho's Blog
        </h1>
      </header>
      
      <section className="postsContainer">
        {posts.map((post) => (
          <article key={post.metadata.title} className="postsContainer__post">
            <a href="#">
              <h2 style={{ display: 'inline-block' }}>
                {post.metadata.title}
              </h2>
            </a>
            <p>
              {post.metadata.excerpt}
            </p>
          </article>
        ))}
      </section>
      {/* <Footer /> */}
    </div>
  );
}


export async function getStaticProps()  {
  const posts = [
    {
      metadata: {
        title: 'Desliza a cortina em cima do like',
        date: '2020-03-16',
        excerpt: 'Resumo do primeiro post'
      },
      content: 'Olar'
    },
    {
      metadata: {
        title: 'Segundo post',
        date: '2020-03-16',
        excerpt: 'Resumo do segundo post'
      },
      content: 'Olar'
    }
  ];

  return {
    props: {
      posts
    }
  }
} 