import Styles from '../styles/Comment.module.css'
import {IComment} from '../utilities/types'
import {useState} from 'react'
import Like from "../icons/like";
import Dislike from "../icons/dislike";

interface IProps {
    comment: IComment,
    comments: IComment[]
}

export default function Comment({ comment, comments }: IProps) {
    const [data, setData] = useState(comment)
    const [reply, setReply] = useState('')
    const [replying, setReplying] = useState(false)

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
        e.target.style.height = ''
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
                <div>
                    <div className={data.like.pressed && Styles.blue} onClick={() => react('like')}>
                        <Like bold={data.like.pressed} />
                    </div>
                    <span>{data.like.count}</span>
                </div>
                <div>
                    <div className={data.dislike.pressed && Styles.blue} onClick={() => react('dislike')}>
                        <Dislike bold={data.dislike.pressed} />
                    </div>
                    <span>{data.dislike.count}</span>
                </div>
                <div>
                    <input name={String(data.id)} id={String(data.id)} type='checkbox' checked={replying} onChange={() => setReplying(!replying)} />
                    <label htmlFor={String(data.id)}>{replying ? 'Close' : 'Reply'}</label>
                </div>
            </div>
            {replying && (
                <div className={Styles.reply}>
                    <textarea onInput={autogrow} value={reply} placeholder='Type your reply here' />
                    <div>
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