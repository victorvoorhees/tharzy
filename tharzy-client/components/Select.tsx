import Styles from '../styles/Select.module.css'

interface IProps {
    label?: string,
    name: string,
    options: string[] | number[],
    value: string | number,
    handleChange: (e) => void
}

export default function Select({ label, name, options, value, handleChange }: IProps) {
    return (
        <div className={Styles.master}>
            {label && <label htmlFor={name}>{label}:</label>}
            <div className={Styles.wrapper}>
                <select name={name} id={name} value={value} onChange={handleChange}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
                <i className='fi fi-rr-angle-small-down'></i>
            </div>
        </div>
    )
}