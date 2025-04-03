import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init('X7grMNIBXS8gpkmb1');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;