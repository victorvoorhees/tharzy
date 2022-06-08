import Link from 'next/link'
import countryFlagEmoji from 'country-flag-emoji'
import lookup from 'country-code-lookup'
import { setTimeLabel } from '../utilities/utilities'
import Styles from '../styles/Post.module.css'
import {returnBody} from '../utilities/dummy'
import {IEvent, IFundraiser, IPost} from "../utilities/types";

interface IProps {
    post?: IPost,
    fundraiser?: IFundraiser,
    event?: IEvent,
    type: 'post' | 'fundraiser' | 'event'
}

const b = returnBody().slice(0, 200)

export default function Post({ post, fundraiser, event, type }: IProps) {
    if (type === 'post') {
        return (
            <div className={Styles.post}>
                <div>
                    <div className={Styles.subtitle}>
                        <div>{post.category}</div>
                        <div>{new Date(post.time).toLocaleDateString(undefined, { dateStyle: 'medium' })}</div>
                    </div>
                    <Link href='content'><a className='h5'>{post.title}</a></Link>
                    <p>{b}</p>
                </div>
                <div className={Styles.reacts}>
                    <span className='icon'>
                        <i className='fi fi-rr-thumbs-up' />
                        <span>{post.likes}</span>
                    </span>
                    <span className='icon'>
                        <i className='fi fi-rr-thumbs-down' />
                        <span>{post.dislikes}</span>
                    </span>
                    <span className='icon'>
                        <i className='fi fi-rr-comment' />
                        <span>{post.comments}</span>
                    </span>
                </div>
            </div>
        )
    }

    if (type === 'fundraiser') {
        return (
            <div className={Styles.fundraiser}>
                <div>
                    <div className={Styles.subtitle}>
                        <div>{fundraiser.category}</div>
                        <div>{new Date(fundraiser.time).toLocaleDateString(undefined, { dateStyle: 'medium' })}</div>
                    </div>
                    <Link href='content'><a className='h6'>{fundraiser.title}</a></Link>
                    <div className={Styles.deadline}>{setTimeLabel(fundraiser.deadline)} left</div>
                </div>
                <div className={Styles.reacts}>
                    <span className='icon'>
                        <i className='fi fi-rr-thumbs-up' />
                        <span>{fundraiser.likes}</span>
                    </span>
                    <span className='icon'>
                        <i className='fi fi-rr-thumbs-down' />
                        <span>{fundraiser.dislikes}</span>
                    </span>
                    <span className='icon'>
                        <i className='fi fi-rr-comment' />
                        <span>{fundraiser.comments}</span>
                    </span>
                </div>
            </div>
        )
    }

    if (type === 'event') {
        return (
            <div className={Styles.event}>
                <div>
                    <div className='h1'>{new Date(event.from).toLocaleDateString(undefined, {day: 'numeric'})}</div>
                    <div className='h2'>{new Date(event.from).toLocaleDateString(undefined, {month: 'short'})}</div>
                </div>
                <div>
                    <div>
                        <div className={Styles.subtitle}>
                            <div>{event.category}</div>
                            <div>{new Date(event.time).toLocaleDateString(undefined, { dateStyle: 'medium' })}</div>
                        </div>
                        <Link href='/'><a className='h6'>{event.title}</a></Link>
                        <div className={Styles.country}>
                            <div>{countryFlagEmoji.get(lookup.byCountry(event.location.country).iso2).emoji}</div>
                            <div>{event.location.country}</div>
                        </div>
                    </div>
                    <div className={Styles.reacts + ' ' + Styles.reactsEvent}>
                        <span className='icon'>
                            <i className='fi fi-rr-thumbs-up' />
                            <span>{event.like.count}</span>
                        </span>
                            <span className='icon'>
                            <i className='fi fi-rr-thumbs-down' />
                            <span>{event.dislike.count}</span>
                        </span>
                            <span className='icon'>
                            <i className='fi fi-rr-comment' />
                            <span>{event.comments}</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}