import Styles from '../styles/Select.module.css'

interface IProps {
    style: 'normal' | 'minimalist' | 'category' | 'home'
    label?: string,
    name: string,
    options: any[],
    value: string | number,
    handleChange: (e) => void
}

export default function Select({ style, label, name, options, value, handleChange }: IProps) {
    return (
        <div className={Styles.master + ' ' + Styles[style]}>
            {label && <label htmlFor={name}>{label}{style === 'minimalist' && ':'}</label>}
            <div>
                <select name={name} id={name} value={value} onChange={handleChange}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
                <i className='fi fi-rr-angle-small-down'/>
            </div>
        </div>
    )
}