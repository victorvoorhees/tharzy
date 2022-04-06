import Link from 'next/link'
import { motion } from 'framer-motion'
import Styles from '../styles/Post.module.css'

export default function Post({ date, duration, uploadedBy, time, tag, title, deadline, country, likes, dislikes, comments }) {
    return (
        <motion.div className={Styles.post}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
        >
            <div>
                {(date && duration) && <div className={Styles.date}>{date} · {duration.start} - {duration.end}</div>}
                <div className={Styles.tag}>{tag}{deadline && ` · ${deadline}`}{country && ` · ${country}`}</div>
                <Link href='/'><a><h2 className={Styles.title}>{title}</h2></a></Link>
                <div className={Styles.name}>By {uploadedBy} · {time}</div>
            </div>
            <div className={Styles.userData}>{likes} likes · {dislikes} dislikes · {comments} comments</div>
        </motion.div>
    )
}