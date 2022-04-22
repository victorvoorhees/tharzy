import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}