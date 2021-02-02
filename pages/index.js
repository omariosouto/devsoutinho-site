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
        <Header>
          <h2>Olá mundo!</h2>
        </Header>

        <section className="about">
          <p>Meu nome é Gabriel Nunes. Trabalho como dev front-end no <a href="https://www.asaas.com/">Asaas</a>.</p>
        </section>

        <Details
          icon="/hammer.png"
          title="Algumas coisas que eu faço por aí:"
        >
          <p>Sou o responsável pela organização de dois eventos. Um evento de tecnologia, a <a href="https://codecon.dev">Codecon</a>, e um festival de criatividade, o <a href="https://shiftfestival.cc">Sh*ft Festival</a>. Também escrevo quinzenalmente uma newsletter com links sobre criatividade, tecnologia e inovação, é a Sh*ft Happens (<a href="https://shiftfestival.cc/news/">inscreva-se</a>).</p>
        </Details>

        {posts && (
          <Details
            icon="/writing-hand.png"
            title="O que ando escrevendo:"
          >
            <p>
            {posts.map((post, index) => {
              return <span>
                {(index ? ' / ' : '')}
                <a href={`/blog/${post.metadata.slug}`}>
                    {post.metadata.title}
                </a>
              </span>
            })}
            </p>
          </Details>
        )}

        <Details
          icon="/test-tube.png"
          title="Meu laboratório:"
        >
          <p>Aqui quero divulgar alguns experimentos que eu criar. Por enquanto você pode dar uma olhada no meu <a href="https://codepen.io/gabrnunes/">Codepen</a>.</p>
        </Details>

        <Details
          icon="/call-me-hand.png"
          title="Fale comigo:"
        >
          <p><a href="https://twitter.com/nunesgabriel">Manda um DM no Twitter</a>, um e-mail no <a href="mailto:gabriel@gnun.es">gabriel@gnun.es</a> ou dê uma olhada no <a href="https://github.com/gabrnunes">meu GitHub</a>.</p>
        </Details>

      </div>
    </>
  );
}

export async function getStaticProps()  {
  const posts = getAllPosts(5);

  return {
    props: {
      posts
    }
  }
} 