import Styles from '../styles/PopUp.module.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function PopUp({ bool, label }) {
    return (
        <AnimatePresence>
            {bool && (
                <div className={Styles.popUp}>
                    <motion.div className={Styles.block}
                        style={{originX: 1}}
                        initial={{transform: 'scaleX(1)'}}
                        animate={{transform: 'scaleX(0)'}}
                        exit={{transform: 'scaleX(1)'}}
                        transition={{type: 'tween', duration: 0.5}}
                    />
                    <div className={Styles.label}>
                        <div className={Styles.iconWrapper}><i className={`fa-solid fa-lg fa-circle-check`}></i></div>
                        <div>{label}</div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    )
}