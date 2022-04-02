import Link from 'next/link';
import { motion } from 'framer-motion';
import Styles from '../styles/Card.module.css';

export default function Card({ uploadedBy, time, tag, title, deadline, likes, dislikes, comments }) {
    return (
        <motion.div className={Styles.post}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
        >
            <div>
                <div className={Styles.info}>
                    <div className={Styles.profile}>
                        <div className={Styles.circle}></div>
                        <div className={Styles.username}>{uploadedBy}</div>
                    </div>
                    <div className={Styles.time}>{time}</div>
                </div>
                <div className={Styles.tag}>{tag}</div>
                <h2 className={Styles.title}>{title}</h2>
                <div>{deadline}</div>
            </div>
            <div className={Styles.interact}>
                <div>
                    <i className={`fa-solid fa-lg fa-face-smile`}></i>
                    <span>{likes}</span>
                </div>
                <div>
                    <i className={`fa-solid fa-lg fa-face-frown`}></i>
                    <span>{dislikes}</span>
                </div>
                <div>
                    <i className='fa-solid fa-lg fa-comment'></i>
                    <span>{comments}</span>
                </div>
            </div>
        </motion.div>
    );
}