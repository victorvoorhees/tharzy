import Styles from '../styles/InputText.module.css'

export default function InputText({ type, label, name, placeholder, className }) {
    if (type === 'password') {
        return (
            <div className={className}>
                <label htmlFor={name} className={Styles.label}>{label || name}</label>
                <input type='password' name={name} id={name} placeholder={placeholder} className={Styles.input} />
            </div>
        )
    }

    return (
        <div className={className}>
            <label htmlFor={name} className={Styles.label}>{label || name}</label>
            <input type='text' name={name} id={name} placeholder={placeholder} className={Styles.input} />
        </div>
    )
}