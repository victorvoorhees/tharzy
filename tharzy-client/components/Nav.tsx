// @ts-nocheck

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Styles from '../styles/Nav.module.css'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Nav() {
    const [isVisible, setIsVisible] = useState(false)

    const { asPath: url } = useRouter()

    useEffect(() => {
        if (isVisible) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset'
    }, [isVisible])

    useEffect(() => {
        setIsVisible(false)
    }, [url])

    const variants = {
        open: { height: '100vh' },
        closed: { height: '4rem' }
    }

    return (
        <motion.header
            animate={isVisible ? 'open' : 'closed'}
            variants={variants}
            transition={{ type: 'tween', duration: 0.3 }}
            className={Styles.header}
        >
            <nav className={Styles.desktop}>
                <div>
                    <Link href='/' scroll={false}><a className={Styles.logo}><img src='tharzy-logo.svg'/></a></Link>
                    <div className={Styles.big}>
                        <Link href='/about' scroll={false}><a>About</a></Link>
                        <Link href='/posts' scroll={false}><a>Posts</a></Link>
                        <Link href='/fundraisers' scroll={false}><a>Fundraisers</a></Link>
                        <Link href='/events' scroll={false}><a>Events</a></Link>
                        <Link href='/encyclopedia' scroll={false}><a>Encyclopedia</a></Link>
                    </div>
                    <div className={Styles.big}>
                        <Link href='/login' scroll={false}><a>Log in</a></Link>
                        <Link href='/register' scroll={false}><a>Register</a></Link>
                    </div>
                    <button onClick={() => setIsVisible(!isVisible)} ><i className='fa-solid fa-bars'></i></button>
                </div>
            </nav>
            <nav className={Styles.mobile}>
                <Link href='/about' scroll={false}><a>About</a></Link>
                <Link href='/posts' scroll={false}><a>Posts</a></Link>
                <Link href='/fundraisers' scroll={false}><a>Fundraisers</a></Link>
                <Link href='/events' scroll={false}><a>Events</a></Link>
                <Link href='/encyclopedia' scroll={false}><a>Encyclopedia</a></Link>
                <Link href='/login' scroll={false}><a>Log in</a></Link>
                <Link href='/register' scroll={false}><a>Register</a></Link>
            </nav>
        </motion.header>

    )
}