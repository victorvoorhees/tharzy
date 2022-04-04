import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'
import Styles from "../styles/Layout.module.css"

export default function Layout({ children }) {
    const router = useRouter()
    return (
        <>
            <Nav />
            <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.main className={Styles.wrapper}
                    key={router.asPath}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.5 }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </>
    )
}