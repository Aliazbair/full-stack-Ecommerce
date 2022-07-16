import React from 'react';
import { Toaster } from 'react-hot-toast';
import NextProgress from 'next-progress';

import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { Layout } from '../components';
// import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContext>
        <NextProgress delay={300} color='red' options={{ showSpinner: true }} />
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
