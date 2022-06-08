import Styles from '../styles/Radio.module.css'
import lookup from 'country-code-lookup'
import countryFlagEmoji from 'country-flag-emoji'

type style = 'filter' | 'box' | 'definition' | 'section' | 'tags'

interface IProps {
    name: string,
    options: string[] | number[],
    value: string | number,
    handleChange: (e) => void,
    style: style,
    country?: boolean
}

export default function Radio({ name, options, value, handleChange, style, country }: IProps) {
    if (style === 'definition') {
        return (
            <ul className={Styles.definition}>
                {options.map((option, index) => (
                    <li key={index}>
                        {value === option ? <input type='radio' name={name} id={option} value={option} onChange={handleChange} checked /> : <input type='radio' name={name} id={option} value={option} onChange={handleChange} />}
                        <label htmlFor={option}>{option}</label>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className={Styles[style]}>
            {options.map((option, index) => (
                <div key={index} className={country ? Styles.country : undefined}>
                    {value === option ? <input type='radio' name={name} id={option} value={option} onChange={handleChange} checked /> : <input type='radio' name={name} id={option} value={option} onChange={handleChange} />}
                    <label htmlFor={option}>
                        {(country && option != 'All') && <span>{countryFlagEmoji.get(lookup.byCountry(option).iso2).emoji}</span>}
                        {option}
                    </label>

                </div>
            ))}
        </div>
    )
}