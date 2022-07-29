import Styles from '../styles/Dropdown.module.css'
import {useRef, useState} from "react";
import AngleDown from "../icons/angleDown";

interface IProps {
    name: string,
    options: any[],
    value: string | number,
    handleChange: (e) => void
}

export default function Dropdown({name, options, value, handleChange}: IProps) {
    const [open, setOpen] = useState(false)

    const dropdownRef = useRef(null)

    function close(e) {
        if (!dropdownRef.current.contains(e.target)) {
            e.preventDefault()
            setOpen(false)
            document.removeEventListener('click', close)
        }
    }

    return (
        <div className={Styles.master}>
            <input type='checkbox' name={name} id={name} checked={open} onChange={() => {
                if (!open) {
                    setOpen(true)
                    setTimeout(() => document.addEventListener('click', close), 0)
                }
            }} />
            <label htmlFor={name}>
                <div>{(Number(value) < 10) && '0'}{value}</div>
                <AngleDown />
            </label>
            {open && (
                <div className={Styles.wrapper}>
                    <div className={Styles.dropdown} ref={dropdownRef}>
                        {options.map((option, index) => (
                            <div key={index}>
                                <input type='radio' name={option + name} id={option + name} value={option} onChange={handleChange} checked={option === value} />
                                <label htmlFor={option + name}>{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}