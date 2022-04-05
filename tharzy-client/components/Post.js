import Link from 'next/link';
import { motion } from 'framer-motion';
import Styles from '../styles/Post.module.css';

export default function Post({ uploadedBy, time, tag, title, likes, dislikes, comments }) {
    return (
        <motion.div className={Styles.post}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
        >
            <div>
                <div className={Styles.tag}>{tag}</div>
                <Link href='/'><a><h2 className={Styles.title}>{title}</h2></a></Link>
                <div className={Styles.name}>By {uploadedBy} · {time}</div>
            </div>
            <div>{likes} likes · {dislikes} dislikes · {comments} comments</div>
        </motion.div>
    );
}