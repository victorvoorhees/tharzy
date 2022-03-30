import Nav from './Nav';
import Styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
        <Nav />
        <main className={Styles.wrapper}>
            {children}
        </main>
        </>
    )
}