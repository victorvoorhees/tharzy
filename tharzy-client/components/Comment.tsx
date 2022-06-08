import Styles from '../styles/Comment.module.css'
import {IComment} from '../utilities/types'
import {useState} from 'react'

interface IProps {
    comment: IComment,
    comments: IComment[]
}

export default function Comment({ comment, comments }: IProps) {
    const [data, setData] = useState(comment)
    const [reply, setReply] = useState('')
    const [replyVisible, setReplyVisible] = useState(false)

    const replies = comments.filter(item => item.replyTo === comment.id)

    function react(type: 'like' | 'dislike') {
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

    return (
        <div className={Styles.master}>
            <div className={Styles.body}>
                <div><span>{data.user}</span><span>{data.time}</span></div>
                <p>{data.body}</p>
            </div>
            <div className={Styles.reacts}>
                <div className='icon'>
                    <i className={`fi fi-${data.like.pressed ? `sr` : `rr`}-thumbs-up ${data.like.pressed && `red`} ${data.dislike.pressed && Styles.disabled}`} onClick={() => react('like')} />
                    <span>{data.like.count}</span>
                </div>
                <div className='icon'>
                    <i className={`fi fi-${data.dislike.pressed ? `sr` : `rr`}-thumbs-down ${data.dislike.pressed && `red`} ${data.like.pressed && Styles.disabled}`} onClick={() => react('dislike')} />
                    <span>{data.dislike.count}</span>
                </div>
                <div>
                    <input name={String(data.id)} id={String(data.id)} type='checkbox' checked={replyVisible} onChange={() => setReplyVisible(!replyVisible)} />
                    <label className='underline' htmlFor={String(data.id)}>Reply</label>
                </div>
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
            {(replies.length > 0) && (
                <div className={Styles.replies}>
                    {replies.map((reply, key) => <Comment comment={reply} comments={comments} key={key} />)}
                </div>
            )}
        </div>
    )
}