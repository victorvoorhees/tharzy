import Styles from '../styles/SkeletonText.module.css'

export default function SkeletonText() {
    let a: JSX.Element[] = []
    for (let i = 1; i < (Math.floor(Math.random() * 10) + 5); i++) {
        a.push(<div style={{ width: `${Math.floor((Math.random()*50) + 50)}%` }} />)
    }

    return (
        <div className={Styles.master}>
            {a}
        </div>
    )
}