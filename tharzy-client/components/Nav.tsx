import Link from 'next/link'
import {motion} from 'framer-motion'
import Styles from '../styles/Nav.module.css'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import MenuLines from "../icons/menuLines";
import Cross from "../icons/cross";

export default function Nav() {
    const [isVisible, setIsVisible] = useState(false)
    const { asPath: url } = useRouter()

    useEffect(() => {
        if (isVisible) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'initial'
    }, [isVisible])

    useEffect(() => {
        setTimeout(() => setIsVisible(false), 300)
    }, [url])

    return (
        <motion.header
            key={'navbar'}
            animate={isVisible ? { height: '100vh' } : { height: 'var(--header-nav-height)' }}
            transition={{ duration: 0.3 }}
            className={Styles.header}
        >
            <nav>
                <div className='fixedWidth'>
                    <Link href='/' scroll={false}><a className={Styles.logo}><img src='tharzy-logo.svg'/></a></Link>
                    <div className={Styles.desktop}>
                        <div>
                            <Link href='/about' scroll={false}><a>About</a></Link>
                            <Link href='/posts' scroll={false}><a>Posts</a></Link>
                            <Link href='/fundraisers' scroll={false}><a>Fundraisers</a></Link>
                            <Link href='/events' scroll={false}><a>Events</a></Link>
                            <Link href='/wiki' scroll={false}><a>Wiki</a></Link>
                        </div>
                        <div>
                            <Link href='/login' scroll={false}><a><button className='outline'>Log in</button></a></Link>
                            <Link href='/register' scroll={false}><a><button className='primary'>Sign up</button></a></Link>
                        </div>
                    </div>
                    <button onClick={() => setIsVisible(!isVisible)} className={isVisible ? Styles.small : Styles.big} >
                        {!isVisible && <MenuLines />}
                        {isVisible && <Cross />}
                    </button>
                </div>
            </nav>
            <nav className={Styles.mobile}>
                <Link href='/about' scroll={false}><a className='h1'>About</a></Link>
                <Link href='/posts' scroll={false}><a className='h1'>Posts</a></Link>
                <Link href='/fundraisers' scroll={false}><a className='h1'>Fundraisers</a></Link>
                <Link href='/events' scroll={false}><a className='h1'>Events</a></Link>
                <Link href='/wiki' scroll={false}><a className='h1'>Wiki</a></Link>
                <Link href='/login' scroll={false}><a className='h1'>Log in</a></Link>
                <Link href='/register' scroll={false}><a className='h1'>Register</a></Link>
            </nav>
        </motion.header>
    )
}