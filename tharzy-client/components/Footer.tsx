import Styles from '../styles/Footer.module.css'
import {useRouter} from "next/router";

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <p>© {new Date().getFullYear()} tharzy.com</p>
        </footer>
    )
}