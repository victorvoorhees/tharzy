import Styles from '../styles/Select.module.css';

export default function Select({ name, options }) {
    return (
        <div>
            <div className={Styles.wrapper}>
                <select name={name} id={name}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
                <i className='fa-solid fa-caret-down'></i>
            </div>
        </div>
    )
}