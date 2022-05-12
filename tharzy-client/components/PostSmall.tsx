import Link from 'next/link'
import { motion } from 'framer-motion'
import { setTimeLabel } from '../utilities/utilities'
import Styles from '../styles/PostSmall.module.css'

interface IProps {
    date?: number,
    duration?: string,
    category?: string,
    country?: string,
    deadline?: number,
    title: string,
    uploadedBy?: string,
    time: number,
    styles?: string
}

export default function PostSmall({ date, duration, category, country, deadline, title, uploadedBy, time, styles }: IProps) {
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
            </div>
        </div>
    )
}