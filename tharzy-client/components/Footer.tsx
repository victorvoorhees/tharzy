import Styles from '../styles/Footer.module.css'
import {useRouter} from 'next/router'

export default function Footer() {
    const { asPath: url } = useRouter()

    if (url === '/login' || url === '/register') return null
    return (
        <footer className={Styles.footer}>
            <p>Tharzy is made by <span><a href='https://twitter.com/comradekeyboard' target='_blank' className='underline'>this guy</a></span>.</p>
        </footer>
    )
}