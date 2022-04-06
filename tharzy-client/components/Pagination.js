import Styles from '../styles/Pagination.module.css'

export default function Pagination({ array }) {
    return (
        <div className={Styles.pagination}>
            {array.map((num, index) => <div key={index} className={num === 1 ? Styles.currentPage : ''}>{num}</div>)}
        </div>
    )
}