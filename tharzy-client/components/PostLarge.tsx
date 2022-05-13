import Link from 'next/link'
import { motion } from 'framer-motion'
import { setTimeLabel } from '../utilities/utilities'
import Styles from '../styles/PostLarge.module.css'

interface IProps {
    date?: number,
    duration?: string,
    category: string,
    country?: string,
    deadline?: number,
    title: string,
    body: string,
    uploadedBy?: string,
    time: number,
    likes: number,
    dislikes: number,
    comments: number,
    styles?: string
}

export default function PostLarge({ date, duration, category, country, deadline, title, body, uploadedBy, time, likes, dislikes, comments, styles }: IProps) {
    return (
        <div className={styles ? `${styles} ${Styles.post}` : Styles.post}>
            <div>
                {(date && duration) && <div className={Styles.date}>{setTimeLabel(date, { long: true })} / {duration}</div>}
                {deadline && <div className={Styles.date}>{setTimeLabel(deadline, { long: true })}</div>}
                <div className={Styles.category}>
                    <span>{category}{country && ` / ${country}`}</span>
                    <span> {setTimeLabel(time)} ago</span>
                </div>
                <Link href='/'><a><h2 className={Styles.title}>{title}</h2></a></Link>
                <p className='p-1'>{body.substring(0, 300)} ...</p>
            </div>
            <div className={Styles.userData}>
                <span><i className='fa-solid fa-heart' /> {likes}</span>
                <span><i className='fa-solid fa-heart-broken' /> {dislikes}</span>
                <span><i className='fa-solid fa-comment' /> {comments}</span>
            </div>
        </div>
    )
}