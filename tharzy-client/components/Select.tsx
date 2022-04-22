import Styles from '../styles/Select.module.css'

interface IProps {
    label?: string,
    name: string,
    options: string[] | number[],
    value: string | number,
    handleChange: (e) => void,
    styles?: string
}

export default function Select({ label, name, options, value, handleChange, styles }: IProps) {
    return (
        <div className={styles || undefined}>
            {label ? <label htmlFor={name} className={Styles.label}>{label}</label> : undefined}
            <div className={Styles.wrapper}>
                <select name={name} id={name} value={value} onChange={handleChange}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
                <i className='fa-solid fa-chevron-down'></i>
            </div>
        </div>
    )
}