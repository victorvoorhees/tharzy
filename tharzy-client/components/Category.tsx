import Styles from '../styles/Category.module.css'
import Check from '../icons/check'

interface IProps {
    options: {
        category: string,
        count: number
    }[],
    selected: string[],
    handleChange: (e) => void
}

export default function Category({options, selected, handleChange}: IProps) {
    return (
        <div className={Styles.master}>
            {options.map((option, index) => (
                <div key={index}>
                    <input type='checkbox' name={option.category} id={option.category} onChange={handleChange} checked={selected.includes(option.category)} />
                    <label htmlFor={option.category}>
                        <div><Check /></div>
                        <div>{option.category} ({option.count})</div>
                    </label>
                </div>
            ))}
        </div>
    )
}