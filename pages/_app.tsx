import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { MainLayout } from '../views/layouts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextEvents</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};
export default MyApp;
