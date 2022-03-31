import Link from 'next/link';
import Styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <header className={Styles.header}>
            <nav>
                <Link href='/'><img src='tharzy-logo.svg'/></Link>
                <div className={Styles.links}>
                    <Link href='/about'><a>About</a></Link>
                    <Link href='/posts'><a>Posts</a></Link>
                    <Link href='/fundraisers'><a>Fundraisers</a></Link>
                    <Link href='/events'><a>Events</a></Link>
                    <Link href='/encyclopedia'><a>Encyclopedia</a></Link>
                </div>
                <div className={Styles.user}>
                    <Link href='/login'><a>Log in</a></Link>
                    <Link href='/register'><a className={Styles.register}>Register</a></Link>
                </div>
            </nav>
        </header>
    )
}