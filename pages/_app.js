import React from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
// import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;