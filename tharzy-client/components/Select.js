import Styles from '../styles/Select.module.css';

export default function Select({ label, name, options }) {
    return (
        <div>
            <label htmlFor={name} className={Styles.label}>{label || name}</label>
            <div className={Styles.wrapper}>
                <select name={name} id={name}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
                <i className='fa-solid fa-caret-down'></i>
            </div>
        </div>
    )
}