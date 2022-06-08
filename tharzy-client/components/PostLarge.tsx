import Link from 'next/link'
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
    time: number,
    likes: number,
    dislikes: number,
    comments: number
}

export default function PostLarge({ date, duration, category, country, deadline, title, body, time, likes, dislikes, comments }: IProps) {
    return (
        <div className={Styles.master}>
            <div>
                {(date && duration) && <div className={Styles.date}>{setTimeLabel(date, { long: true })} / {duration}</div>}
                {deadline && <div className={Styles.date}>{setTimeLabel(deadline, { long: true })}</div>}
                <div className={Styles.category}>
                    <span>{category}{country && ` / ${country}`}</span>
                    <span> {setTimeLabel(time)} ago</span>
                </div>
                <Link href='/'><a className='h2'>{title}</a></Link>
                <p className='p-1'>{body.substring(0, 300)} ...</p>
            </div>
            <div className={Styles.userData}>
                <span className='p-1'><i className='fa-solid fa-heart' /> {likes}</span>
                <span className='p-1'><i className='fa-solid fa-heart-broken' /> {dislikes}</span>
                <span className='p-1'><i className='fa-solid fa-comment' /> {comments}</span>
            </div>
        </div>
    )
}