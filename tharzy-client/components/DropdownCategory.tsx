import Styles from '../styles/Dropdown.module.css'
import {useRef, useState} from "react";
import AngleDown from "../icons/angleDown";

interface IProps {
    name: string,
    options: any[],
    value: string | number,
    handleChange: (e) => void
}

export default function DropdownCategory({name, options, value, handleChange}: IProps) {
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
                <div className={Styles.wrapper} ref={dropdownRef}>
                    <div className={Styles.dropdown}>
                        {options.map((option, index) => (
                            <div key={index}>
                                <input type='radio' name={option.category + name} id={option.category + name} value={option.category} onChange={handleChange} checked={option.category === value} />
                                <label htmlFor={option.category + name}>{option.category} ({option.count})</label>
                            </div>
                        ))}
                    </div>
                    <div className={Styles.custom}>
                        <div>Add new category</div>
                        <input type='text' name='customCategory' id='customCategory' placeholder='Type category' />
                        <button className='primary'>Add</button>
                    </div>
                </div>
            )}
        </div>
    )
}