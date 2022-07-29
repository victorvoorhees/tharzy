import Styles from '../styles/Chips.module.css'

export default function Chips({name, options, value, handleChange}) {
    return (
        <div className={Styles.master}>
            {options.map((option, index) => (
                <div key={index}>
                    <input type='radio' name={name} id={option} value={option} onChange={handleChange} checked={option === value} />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    )
}