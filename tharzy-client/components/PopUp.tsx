// @ts-nocheck

import Styles from '../styles/PopUp.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import {useState} from 'react';

export default function PopUp({ status, label }: { status: 'success' | 'warning' | 'failure', label: string }) {
    const [render, setRender] = useState<boolean>(true)

    function applyStyles() {
        if (status === 'success') return Styles.success;
        if (status === 'warning') return Styles.warning;
    }

    return (
        <AnimatePresence>
            {render && (
                <div className={Styles.popUp}>
                    <motion.div className={Styles.block}
                                style={{originX: 1}}
                                initial={{transform: 'scaleX(0)'}}
                                exit={{transform: 'scaleX(1)'}}
                                transition={{type: 'tween', duration: 0.5, delay: 0.1}}
                    />
                    <div className={applyStyles()}>
                        <div className={Styles.label}>
                            <p>{label}</p>
                            <i onClick={() => setRender(false)} className='fa-solid fa-xmark' />
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    )
}