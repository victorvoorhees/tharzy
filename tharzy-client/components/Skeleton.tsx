import Styles from '../styles/Skeleton.module.css'

type skeleton = 'post' | 'text'

export default function Skeleton({ type }: { type: skeleton }) {
    let a: JSX.Element[] = []
    for (let i = 1; i < (Math.floor(Math.random() * 10) + 5); i++) {
        a.push(<div style={{ width: `${Math.floor((Math.random()*50) + 50)}%` }} key={i} />)
    }

    if (type === 'post') {
        return (
            <div className={Styles.post}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        )
    }
    if (type === 'text') {
        return (
            <div className={Styles.text}>
                {a}
            </div>
        )
    }
    return null
}