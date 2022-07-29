// @ts-nocheck

import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'
import Footer from './Footer'

const noHeight = []
const noWidth = ['/']

export default function Layout({ children }) {
    const { asPath: url } = useRouter()
    return (
        <>
            <AnimatePresence>
                {!noHeight.includes(url) && (
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
                        ((noWidth.includes(url)) ? '' : 'fixedWidth') +
                        ((noHeight.includes(url)) ? '' : ' fixedHeight')
                    }
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            {!noHeight.includes(url) && (
                <Footer />
            )}
        </>
    )
}