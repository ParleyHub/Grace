import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@parley-hub/grace/lib/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
