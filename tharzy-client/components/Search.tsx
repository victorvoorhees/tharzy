import Styles from '../styles/Search.module.css'

interface IProps {
    label?: string,
    value: string,
    handleChange: (e) => void,
    styles?: string
}

export default function Search({ label, value, handleChange, styles }: IProps) {
    return (
        <div className={styles || undefined}>
            {label ? <label className={Styles.label} htmlFor='search'>{label}</label> : undefined}
            <div className={Styles.wrapper}>
                <input type='text' name='search' id='search' placeholder='Type a keyword' value={value} onChange={handleChange} />
                <i className='fa-solid fa-magnifying-glass'></i>
            </div>
        </div>
    )
}