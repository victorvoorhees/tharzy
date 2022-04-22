import Link from 'next/link'
import Styles from '../styles/Nav.module.css'

export default function Nav(): JSX.Element {
    return (
        <header>
            <nav>
                <div className={Styles.mainNav}>
                    <Link href='/' scroll={false}><a className={Styles.logo}><img src='tharzy-logo.svg'/></a></Link>
                    <div className={Styles.mobileNavIcons}>
                        <button><i className='fa-solid fa-user'></i></button>
                        <button><i className='fa-solid fa-bars'></i></button>
                    </div>
                </div>
                <div className={Styles.linksLarge}>
                    <div>
                        <Link href='/about' scroll={false}><a>About</a></Link>
                        <Link href='/posts' scroll={false}><a>Posts</a></Link>
                        <Link href='/fundraisers' scroll={false}><a>Fundraisers</a></Link>
                        <Link href='/events' scroll={false}><a>Events</a></Link>
                        <Link href='/encyclopedia' scroll={false}><a>Encyclopedia</a></Link>
                    </div>
                    <div>
                        <Link href='/login' scroll={false}><a>Log in</a></Link>
                        <Link href='/register' scroll={false}><a>Register</a></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}