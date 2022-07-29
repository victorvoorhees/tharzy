import {useEffect, useState} from 'react'
import Comment from '../../components/Comment'
import Like from '../../icons/like'
import Dislike from '../../icons/dislike'
import {returnSingleEvent} from '../../utilities/dummy'
import Styles from '../../styles/Content.module.css'

export default function Index() {
    const [data, setData] = useState(null)
    const [comments, setComments] = useState(null)
    const [reply, setReply] = useState('')
    const [replying, setReplying] = useState(false)

    useEffect(() => {
        const {content, comments} = returnSingleEvent()
        setData(content)
        setComments(comments)
    }, [])

    function react(type) {
        let n = {...data}
        if (!n[type === 'like' ? 'dislike' : 'like'].pressed) {
            if (n[type].pressed) {
                n[type].count --
            } else {
                n[type].count ++
            }
            n[type].pressed = !n[type].pressed
            setData(n)
        }
    }

    function autogrow(e) {
        e.target.style.height = '1rem'
        e.target.style.height = (e.target.scrollHeight) + 'px'
        setReply(e.target.value)
    }

    if (data) {
        const { deadline, from, to, time, uploadedBy, title, body, category, location, like, dislike } = data
        const commentsOnly = comments.filter(item => item.replyTo === undefined)
        return (
            <div className={Styles.master}>
                <div>
                    <div>
                        <div className={Styles.category}>{category}</div>
                        <h1>{title}</h1>
                    </div>
                    <div className={Styles.poster}>
                        <div>Posted on {new Date(time).toLocaleString(undefined, { dateStyle: 'long' })}.</div>
                        <div>Updated on {new Date().toLocaleString(undefined, { dateStyle: 'long' })}.</div>
                        <div>{uploadedBy}</div>
                    </div>
                    <p>{body}</p>
                </div>

                {deadline && (
                    <div className='p2 bold'>This fundraiser expires on {new Date(from).toLocaleDateString(undefined, { dateStyle: 'medium' })}.</div>
                )}

                {(from && to) && (
                    <div className={Styles.eventDate}>
                        <div>Date & time</div>
                        <p >
                            {new Date(from).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })} - {new Date(to).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                        </p>
                    </div>
                )}

                {(location) && (
                    <div className={Styles.location}>
                        <div>Location</div>
                        <p >{location.address} {location.country}</p>
                        <div/>
                    </div>
                )}

                <div className={Styles.reacts}>
                    <div className='icon'>
                        <div className={like.pressed && Styles.blue} onClick={() => react('like')}>
                            <Like bold={like.pressed} />
                        </div>
                        <span>{like.count}</span>
                    </div>
                    <div className='icon'>
                        <div className={dislike.pressed && Styles.blue} onClick={() => react('dislike')}>
                            <Dislike bold={dislike.pressed} />
                        </div>
                        <span>{dislike.count}</span>
                    </div>
                </div>

                <div className={Styles.comments}>
                    <h2>Comments ({comments.length})</h2>
                    <div>
                        <input name='addComment' id='addComment' type='checkbox' checked={replying} onChange={() => setReplying(!replying)} />
                        <label htmlFor='addComment'>{replying ? 'Close' : 'Add comment'}</label>
                    </div>
                    {replying && (
                        <div className={Styles.reply}>
                            <textarea onInput={autogrow} value={reply} placeholder='Type your comment here' />
                            <div>
                                <button className='primary'>Submit</button>
                            </div>
                        </div>
                    )}
                    <div>
                        {commentsOnly.map((comment, index) => <Comment comment={comment} comments={comments} key={index} />)}
                    </div>
                </div>
            </div>
        )
    }
    return null
}