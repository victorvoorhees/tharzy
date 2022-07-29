import {useEffect, useRef, useState} from 'react'
import Styles from '../styles/Calendar.module.css'

function createCalendar(name, date, handleClick, value) {
    let element = []
    let d = new Date(date.getTime())
    d.setDate(1)

    for (let i = 0; i < d.getDay(); i++) element.push(<div/>)

    while (d.getMonth() === date.getMonth()) {
        element.push(
            <div>
                <input
                    type='radio'
                    name={name}
                    id={name + String(d.getTime())}
                    value={d.toDateString()}
                    onChange={handleClick}
                    checked={d.toDateString() === value.toDateString()}
                />
                <label
                    htmlFor={name + String(d.getTime())}
                    className={d.toDateString() === new Date().toDateString() ? Styles.today : ''}
                >{d.getDate()}</label>
            </div>
        )
        d.setDate(d.getDate() + 1)
    }

    return element
}

export default function Calendar({name, handleClick, value, handleClose}) {
    const [month, setMonth] = useState(new Date())

    const calendarRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            document.addEventListener('click', close)
        }, 0)
        return () => document.removeEventListener('click', close)
    }, [])

    function close(e) {
        if (!calendarRef.current.contains(e.target)) {
            e.preventDefault()
            handleClose()
        }
    }

    function prev() {
        let newDate = new Date(month.getTime())
        newDate.setMonth(newDate.getMonth() - 1)
        setMonth(newDate)
    }

    function next() {
        let newDate = new Date(month.getTime())
        newDate.setMonth(newDate.getMonth() + 1)
        setMonth(newDate)
    }

    return (
        <div className={Styles.master} ref={calendarRef}>
            <div className={Styles.select}>
                <i onClick={prev} className='fi fi-rr-arrow-left'/>
                <div>{month.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
                <i onClick={next} className='fi fi-rr-arrow-right'/>
            </div>
            <div className={Styles.body}>
                <div>
                    <div>Su</div>
                    <div>Mo</div>
                    <div>Tu</div>
                    <div>We</div>
                    <div>Th</div>
                    <div>Fr</div>
                    <div>Sa</div>
                </div>
                <div>{createCalendar(name, month, handleClick, value)}</div>
            </div>
        </div>
    )
}