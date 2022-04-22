import Styles from '../styles/Radio.module.css'

interface IProps {
    label?: string,
    name: string,
    options: string[] | number[],
    value: string | number,
    handleChange: (e) => void,
    styles?: string
}

export default function Radio({ label, name, options, value, handleChange, styles }: IProps) {
    return (
        <div className={styles || undefined}>
            {label ? <div className={Styles.label}>{label}</div> : undefined}
            {options.map((option, index) => (
                <div className={Styles.radio} key={index}>
                    <label htmlFor={option}>{option}</label>
                    {value === option ? <input type='radio' name={name} id={option} value={option} onChange={handleChange} checked /> : <input type='radio' name={name} id={option} value={option} onChange={handleChange} />}
                </div>
            ))}
        </div>
    )
}