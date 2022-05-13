import {IDefinition} from "../utilities/definitions";
import Styles from '../styles/RadioTerms.module.css'

interface IProps {
    label?: string,
    name: string,
    options: IDefinition[],
    value: IDefinition,
    handleChange: (e) => void,
    styles?: string
}

export default function RadioTerms({ label, name, options, value, handleChange, styles }: IProps) {
    return (
        <div className={styles ? `${styles} ${Styles.master}` : Styles.master}>
            {label && <div className='h4'>{label}</div>}
            <div>
                {options.map((option, index) => (
                    <div className={Styles.radio} key={index}>
                        {value === option ? <input type='radio' name={name} id={option.short} value={option.short} onChange={() => handleChange(option)} checked /> : <input type='radio' name={name} id={option.short} value={option.short} onChange={() => handleChange(option)} />}
                        <label htmlFor={option.short}>{option.long}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}