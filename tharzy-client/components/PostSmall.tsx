import Link from 'next/link'
import { setTimeLabel } from '../utilities/utilities'
import Styles from '../styles/PostSmall.module.css'

interface IProps {
    category?: string,
    country?: string,
    title: string,
    time: number
}

export default function PostSmall({ category, country, title, time }: IProps) {
    return (
        <div>
            <div className={Styles.category}>
                <span>{category}{country && ` / ${country}`}</span>
                <span> {setTimeLabel(time)} ago</span>
            </div>
            <Link href='/'><a className={`h4 ${Styles.title}`}>{title}</a></Link>
        </div>
    )
}