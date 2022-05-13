import Styles from '../styles/RadioAlphabet.module.css'

interface IProps {
    name: string,
    options: string[] | number[],
    value: string | number,
    handleChange: (e) => void,
    styles?: string,
}

export default function RadioAlphabet({ name, options, value, handleChange, styles }: IProps) {
    return (
        <div className={styles || styles}>
            <div className='h4'>Letter</div>
            <div className={Styles.master}>
                {options.map((option, index) => (
                    <div className={Styles.radio} key={index}>
                        {value === option ? <input type='radio' name={name} id={option} value={option} onChange={handleChange} checked /> : <input type='radio' name={name} id={option} value={option} onChange={handleChange} />}
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}