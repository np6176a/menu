import Link from 'next/link';
import Head from 'next/head';

require('../css/menu.less');

export default ({children, title = 'Menu App'}) => (
  <div>
    <Head>
      <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>{title}</title>
      {/*the favicon*/}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      {/*adding google fonts*/}
      <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans" rel="stylesheet"/>
      {/*adding fontawesome*/}
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </Head>

    {/*the main nav*/}
    <header>
      <nav>
        <a href='https://vehiclemedia.com/'><img src="../static/img/logoem.png" /></a>
        <Link href='/'><a>Menu</a></Link>
        <Link href='/test'><a>Test</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      {'Footer'}
    </footer>
  </div>
)