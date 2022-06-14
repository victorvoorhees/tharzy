import {useState} from 'react'
import Styles from '../styles/Dropdown.module.css'

const r = String(Math.floor(Math.random()*1000))

export default function Dropdown({name, options, selected, handleSelect}) {
    const [active, setActive] = useState(false)

    return (
        <div className={Styles.master}>
            <input type='checkbox' name={name} id={name} defaultChecked={active} onChange={() => setActive(!active)} />
            <label htmlFor={name}>
                <span>{selected}</span>
                <i className='fi fi-rr-angle-small-down'/>
            </label>
            {active && (
                <div>
                    {options.map((option, index) => (
                        <>
                            <input type='radio' name={name + r} id={option} value={option} defaultChecked={option === selected} onChange={() => {
                                handleSelect(option)
                                setActive(false)
                            }} key={index} />
                            <label htmlFor={option}>{option}</label>
                        </>
                    ))}
                </div>
            )}
        </div>
    )
}