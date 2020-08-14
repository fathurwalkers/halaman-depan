import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hallo Dunia</h1>
        <Link href="/random">
          <a>take me top</a>
        </Link>
      </main>

      <footer>
        <h4>Hi Im Footer</h4>
      </footer>
    </div>
  )
}
