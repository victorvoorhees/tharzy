// @ts-nocheck

import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
    const { asPath: url }: { asPath: string } = useRouter()
    return (
        <>
            <Nav />
            <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.main
                    key={url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </>
    )
}