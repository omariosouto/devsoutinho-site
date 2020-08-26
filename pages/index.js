// import Head from 'next/head'; 

import Head from '../src/infra/components/Head';

export default function Home() {
  return (
    <div>
      <Head />
      <header>
        Menu
      </header>
      <main>
        Conteúdo unico de cada página
      </main>

      <footer>
        Footer
      </footer>
    </div>
  );
}
