import Head from '../src/infra/components/Head';
import Typography from '../src/components/foundation/Typography';
import Header from '../src/patterns/Header';
import Footer from '../src/patterns/Footer';

export default function Sobre() {
  return (
    <div>
      <Head title="Sobre - DevSoutinho Site" />
      <Header />
      <main>
        <Typography>
          Página Sobre
        </Typography>
      </main>

      <iframe src="http://localhost:3000/sobre/" />
      <Footer />
    </div>
  );
}
