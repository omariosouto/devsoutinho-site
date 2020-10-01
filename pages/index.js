import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Head from '../src/infra/components/Head';
import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';


const GlobalStyle = createGlobalStyle`
  * {
      font-family: sans-serif;
  }
`;

const fontSize = 30;

const Title = styled.h3`
  font-size: ${fontSize}px;
  a {
    color: ${({ theme }) => {
      return theme.colors.primary;
    }};
    text-decoration: none;
    &:hover {
      color: #666;
    }
  }
`;


const PostCardWrapper = styled.article`
  border: 1px solid orange;
  padding: ${({theme}) => theme.spacing.big}px;
`;

// function Title({ children }) {
//   return <h3>{children}</h3>
// }

function PostCard() {
  return (
    <PostCardWrapper>
        <header>
          <Title>
            <a rel="bookmark" href="/the-wet-codebase/">Canal DevSoutinho</a>
          </Title>
          <small>???? 00, 2020 ☕️ 1 min read</small>
        </header>
        <p>Começando agora o CSS.</p>
    </PostCardWrapper>
  )
}

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head title="Home - DevSoutinho Site" />
      {/* <Header /> */}
      <main>
        <PostCard />
        {/* <Typography>
          Conteúdo unico de cada página
        </Typography> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
