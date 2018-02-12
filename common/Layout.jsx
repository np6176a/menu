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
      {/*bootstrap cdn*/}
      <link href="https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.3/journal/bootstrap.min.css" rel="stylesheet"/>
    </Head>

    {/*the main nav*/}
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary row justify-content-center">
        <Link href='/'><a className="nav-link">Menu</a></Link>
        <a className="navbar-brand" href='https://vehiclemedia.com/'><img src="../static/img/logo.png"/></a>
        <Link href='/test'><a className="nav-link">Test</a></Link>
      </nav>
    </header>

    {children}

    <footer className="container-fluid">
      <div className="row justify-content-center">
        <p className="col-xs-12">
          The React Test App
        </p>
      </div>
    </footer>
  </div>
)