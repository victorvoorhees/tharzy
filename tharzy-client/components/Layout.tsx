// @ts-nocheck

import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'
import Footer from './Footer'

const urlList = ['/login', '/register', '/posts/add']

export default function Layout({ children }: { children: ReactNode }) {
    const { asPath: url } = useRouter()
    return (
        <>
            <AnimatePresence>
                {!urlList.includes(url) && (
                    <Nav />
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.main
                    key={url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className={
                        ((url === '/') ? '' : 'fixedWidth') +
                        ((urlList.includes(url)) ? '' : ' fixedHeight')
                    }
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            {!urlList.includes(url) && (
                <Footer />
            )}
        </>
    )
}