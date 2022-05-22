// @ts-nocheck

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Styles from '../styles/Nav.module.css'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

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
        <AnimatePresence>
            {!(url === '/login' || url === '/register') && (
                <motion.header
                    key={'navbar'}
                    initial={{ height: 0 }}
                    animate={isVisible ? { height: '100vh' } : { height: 'var(--header-nav-height)' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={Styles.header}
                >
                    <nav className={Styles.desktop}>
                        <div>
                            <Link href='/' scroll={false}><a className={Styles.logo}><img src='tharzy-logo.svg'/></a></Link>
                            <div>
                                <Link href='/about' scroll={false}><a className={url === '/about' && Styles.underline}>About</a></Link>
                                <Link href='/posts' scroll={false}><a className={url === '/posts' && Styles.underline}>Posts</a></Link>
                                <Link href='/fundraisers' scroll={false}><a className={url === '/fundraisers' && Styles.underline}>Fundraisers</a></Link>
                                <Link href='/events' scroll={false}><a className={url === '/events' && Styles.underline}>Events</a></Link>
                                <Link href='/encyclopedia' scroll={false}><a className={url === '/encyclopedia' && Styles.underline}>Encyclopedia</a></Link>
                            </div>
                            <div>
                                <Link href='/login' scroll={false}><a>Log in</a></Link>
                                <Link href='/register' scroll={false}><a>Register</a></Link>
                            </div>
                            <button onClick={() => setIsVisible(!isVisible)} ><i className='fa-solid fa-bars'></i></button>
                        </div>
                    </nav>
                    <nav className={Styles.mobile}>
                        <Link href='/about' scroll={false}><a className='h1'>About</a></Link>
                        <Link href='/posts' scroll={false}><a className='h1'>Posts</a></Link>
                        <Link href='/fundraisers' scroll={false}><a className='h1'>Fundraisers</a></Link>
                        <Link href='/events' scroll={false}><a className='h1'>Events</a></Link>
                        <Link href='/encyclopedia' scroll={false}><a className='h1'>Encyclopedia</a></Link>
                        <Link href='/login' scroll={false}><a className='h1'>Log in</a></Link>
                        <Link href='/register' scroll={false}><a className='h1'>Register</a></Link>
                    </nav>
                </motion.header>
            )}
        </AnimatePresence>
    )
}