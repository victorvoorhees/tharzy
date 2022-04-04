import Link from 'next/link';
import Styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <header className={Styles.header}>
            <nav>
                <Link href='/' scroll={false}><a className={Styles.logo}><img src='tharzy-logo.svg'/></a></Link>
                <div className={Styles.links}>
                    <Link href='/about' scroll={false}><a>About</a></Link>
                    <Link href='/posts' scroll={false}><a>Posts</a></Link>
                    <Link href='/fundraisers' scroll={false}><a>Fundraisers</a></Link>
                    <Link href='/events' scroll={false}><a>Events</a></Link>
                    <Link href='/encyclopedia' scroll={false}><a>Encyclopedia</a></Link>
                </div>
                <div className={Styles.user}>
                    <Link href='/login' scroll={false}><a>Log in</a></Link>
                    <Link href='/register' scroll={false}><a className={Styles.register}>Register</a></Link>
                    <i className='fa-solid fa-lg fa-bars'></i>
                </div>
            </nav>
        </header>
    )
}