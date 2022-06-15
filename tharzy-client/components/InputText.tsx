import Styles from '../styles/InputText.module.css'
import Select from "./Select";

interface IProps {
    label? : string,
    type: 'text' | 'password' | 'search' | 'email',
    name: string,
    value: string,
    handleChange: (e) => void,
    placeholder?: string,
    homePage?: boolean
}

export default function InputText({ type, label, name, value, handleChange, placeholder, homePage }: IProps) {
    if (type === 'search') {
        return (
            <div>
                {label && <label htmlFor={name}>{label}</label>}
                <div className={Styles.search}>
                    <input type='text' name={name} id={name} placeholder={placeholder} value={value} onChange={handleChange} />
                    <i className='fi fi-rr-search'/>
                </div>
            </div>
        )
    }

    return (
        <div className={Styles.master}>
            {label && <label htmlFor={name}>{label}</label>}
            <input type={type} name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} />
        </div>
    )
}