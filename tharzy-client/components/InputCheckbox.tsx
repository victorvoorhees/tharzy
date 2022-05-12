import Styles from '../styles/InputCheckbox.module.css'

interface IProps {
    label: string | JSX.Element,
    name: string,
    checked: boolean,
    handleChange: (e: {target: {checked: boolean}}) => void,
    styles?: string
}

export default function InputCheckbox({ label, name, checked, handleChange, styles }: IProps) {
    return (
        <div className={`${styles} ${Styles.master}`}>
            <input type='checkbox' name={name} id={name} checked={checked} onChange={handleChange} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}