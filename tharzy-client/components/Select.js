import Styles from '../styles/Select.module.css';

export default function Select({ label, name, options, defaultValue, className }) {
    return (
        <div className={className}>
            <label htmlFor={name} className={Styles.label}>{label || name}</label>
            <div className={Styles.wrapper}>
                <select name={name} id={name} defaultValue={defaultValue}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
                <i className='fa-solid fa-chevron-down'></i>
            </div>
        </div>
    )
}