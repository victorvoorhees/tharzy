import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import {polyfillCountryFlagEmojis} from 'country-flag-emoji-polyfill'

if (polyfillCountryFlagEmojis()) console.log('Country flags loaded!')

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}