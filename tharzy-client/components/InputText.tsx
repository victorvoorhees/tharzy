import Styles from '../styles/InputText.module.css'

interface IProps {
    type?: 'password',
    label? : string,
    name: string,
    value: string,
    handleChange: (e: {target: {value: string}}) => void,
    placeholder?: string,
    styles?: string
}

export default function InputText({ type, label, name, value, handleChange, placeholder, styles }: IProps) {
    if (type === 'password') {
        return (
            <div className={styles}>
                {label && <label htmlFor={name} className={Styles.label}>{label}</label>}
                <input type='password' name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} className={Styles.input} />
            </div>
        )
    }
    return (
        <div className={styles}>
            {label && <label htmlFor={name} className={Styles.label}>{label}</label>}
            <input type='text' name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} className={Styles.input} />
        </div>
    )
}