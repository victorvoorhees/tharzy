import Glass from '../icons/glass'
import Styles from '../styles/Search.module.css'

export default function Search({name, value, handleChange}) {
    return (
        <div className={Styles.master}>
            <input type='text' name={name} id={name} value={value} onChange={handleChange} placeholder='Type a keyword' />
            <Glass />
        </div>
    )
}