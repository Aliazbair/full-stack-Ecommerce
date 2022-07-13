import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className='layout'>
      <Head>
        <title>Ali Store</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main className='main-container'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
