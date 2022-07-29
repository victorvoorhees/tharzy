import Link from 'next/link'
import {returnTime} from '../utilities/functions'
import Like from '../icons/like'
import Dislike from '../icons/dislike'
import Comment from '../icons/comment'
import Clock from '../icons/clock'
import Location from '../icons/location'
import Calendar from '../icons/calendar'
import Styles from '../styles/Post.module.css'

export default function Post({ data, definition }: {data: any, definition?: boolean }) {
    return (
        <div className={Styles.post}>
            <div className={Styles.subtitle}>
                <div className={definition ? Styles.definitionPoster : ''}>{data.uploadedBy}</div>
                <div>{returnTime(new Date().getTime() - data.time)}</div>
            </div>

            {data.title && (
                <Link href='/content'><a className={Styles.title}>{data.title}</a></Link>
            )}
            {data.category && (
                <div className={Styles.category}>{data.category}</div>
            )}
            {data.deadline && (
                <div className={Styles.deadline}>
                    <Clock />
                    <span>{returnTime(data.deadline - new Date().getTime())} left</span>
                </div>
            )}
            {data.country && (
                <div className={Styles.deadline}>
                    <Location />
                    <span>{data.country}</span>
                </div>
            )}
            {data.to && (
                <div className={Styles.deadline}>
                    <Calendar />
                    <span>{new Date(data.to).toLocaleDateString(undefined, { dateStyle: 'medium' })}</span>
                </div>
            )}
            <p>{data.body} {definition && <Link href='/'><a>read more</a></Link>}</p>
            <div className={Styles.reacts}>
                <div className='icon'>
                    <Like />
                    <span>{data.like}</span>
                </div>
                <div className='icon'>
                    <Dislike />
                    <span>{data.dislike}</span>
                </div>
                <div className='icon'>
                    <Comment />
                    <span>{data.comments}</span>
                </div>
            </div>
        </div>
    )
}