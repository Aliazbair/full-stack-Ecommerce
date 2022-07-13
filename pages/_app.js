import React from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { Layout } from '../components';
// import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
