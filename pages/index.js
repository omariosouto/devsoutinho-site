import Head from '../src/infra/components/Head';
import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';

export default function Home(props) {
  return (
    <div>
      <Head title="Home - DevSoutinho Site" />
      <Header />
      <main>
        <Typography>
          Conteúdo unico de cada página
        </Typography>


        <section>
          {props.posts.map((post) => (
            <div key={post.title}>
              {post.title}
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const url = 'http://localhost:3000/api/posts';
  const response = await fetch(url);
  const posts = await response.json();

  return {
    props: {
      posts: posts.posts,
    }
  }
}