import Link from 'next/link'
import { motion } from 'framer-motion'
import { setTimeLabel } from '../utilities/utilities'
import Styles from '../styles/Post.module.css'

interface IProps {
    date?: number,
    duration?: string,
    category: string,
    country?: string,
    deadline?: number,
    title: string,
    uploadedBy: string,
    time: number,
    likes: number,
    dislikes: number,
    comments: number
}

export default function Post({ date, duration, category, country, deadline, title, uploadedBy, time, likes, dislikes, comments }: IProps) {
    return (
        <motion.div className={Styles.post}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
        >
            <div>
                {(date && duration) && <div className={Styles.date}>{setTimeLabel(date, { long: true })} · {duration}</div>}
                {deadline && <div className={Styles.date}>{setTimeLabel(deadline, { long: true })}</div>}
                <div className={Styles.category}>{category}{country && ` · ${country}`}</div>
                <Link href='/'><a><h2 className={Styles.title}>{title}</h2></a></Link>
                <div className={Styles.name}>By {uploadedBy} · {setTimeLabel(time)}</div>
            </div>
            <div className={Styles.userData}>{likes} likes · {dislikes} dislikes · {comments} comments</div>
        </motion.div>
    )
}