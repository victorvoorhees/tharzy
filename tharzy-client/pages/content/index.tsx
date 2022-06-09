import Styles from '../../styles/Content.module.css'
import {useEffect, useState} from 'react'
import {returnBody, returnComments, returnEvents} from '../../utilities/dummy'
import Comment from '../../components/Comment'

const body = returnBody()

export default function Index() {
    const [data, setData] = useState(null)
    const [reply, setReply] = useState('')
    const [replyVisible, setReplyVisible] = useState(false)
    const comments = returnComments()

    useEffect(() => {
        setData(returnEvents()[0])
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
        const { deadline, from, to, time, uploadedBy, title, category, location, like, dislike, comments: commentsCount } = data
        const commentsOnly = comments.filter(item => item.replyTo === undefined)
        return (
            <div className={Styles.master}>
                <div className={Styles.poster}>
                    <div>Posted on {new Date(time).toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'long' })}.</div>
                    <div>Updated on {new Date().toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'long' })}.</div>
                    <div>By <span>{uploadedBy}</span></div>
                </div>
                <div>
                    <h1>{title}</h1>
                    <div>{category}</div>
                </div>
                <p className='p1'>{body}</p>

                {deadline && (
                    <div className='p2 bold'>This fundraiser expires on {new Date(from).toLocaleDateString(undefined, { dateStyle: 'medium' })}.</div>
                )}

                {(from && to && location) && (
                    <div className={Styles.event}>
                        <div/>
                        <div>
                            <div className='icon'><i className="fi fi-rr-calendar-minus"></i>{new Date(from).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })} - {new Date(to).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}</div>
                            <div className='icon'><i className="fi fi-rs-marker"></i>{location.address} {location.country}</div>
                        </div>
                    </div>
                )}

                <div className={Styles.reacts}>
                    <div className='icon p1'>
                        <i className={`fi fi-${like.pressed ? `sr` : `rr`}-thumbs-up ${like.pressed && `red`} ${dislike.pressed && Styles.disabled}`} onClick={() => react('like')} />
                        <span>{like.count}</span>
                    </div>
                    <div className='icon p1'>
                        <i className={`fi fi-${dislike.pressed ? `sr` : `rr`}-thumbs-down ${dislike.pressed && `red`} ${like.pressed && Styles.disabled}`} onClick={() => react('dislike')} />
                        <span>{dislike.count}</span>
                    </div>
                </div>

                <div>
                    <h2>Comments ({commentsCount})</h2>
                    <div className={Styles.addComment}>
                        <input name='addComment' id='addComment' type='checkbox' checked={replyVisible} onChange={() => setReplyVisible(!replyVisible)} />
                        <label className='underline' htmlFor={String(data.id)}>Add comment</label>
                    </div>
                    {replyVisible && (
                        <div className={Styles.replyInput}>
                            <textarea onInput={autogrow} value={reply} placeholder='Type your reply here' />
                            <div>
                                <button onClick={() => setReplyVisible(!replyVisible)} className='outline'>Cancel</button>
                                <button className='primary'>Submit</button>
                            </div>
                        </div>
                    )}
                    <div className={Styles.comments}>
                        {commentsOnly.map((comment, index) => <Comment comment={comment} comments={comments} key={index} />)}
                    </div>
                </div>
            </div>
        )
    }
    return null
}