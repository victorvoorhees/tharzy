import { useState } from 'react';
import Styles from '../../styles/Events.module.css'
import Search from "../../components/Search";
import Select from "../../components/Select";

function createCalendar(date, today) {
    let element = []
    let dayInLoop = new Date(date.getTime())
    dayInLoop.setDate(1)

    for (let i = 0; i < dayInLoop.getDay(); i++) element.push(<div></div>)

    while (dayInLoop.getMonth() === date.getMonth()) {
        let n = Math.ceil(Math.random() * 4)
        element.push(
            <div tabIndex='0' className={Styles.day}>
                <div className={dayInLoop.getTime() === today.getTime() ? Styles.today : ''}>{dayInLoop.getDate()}</div>
                {n === 3 ? <div className={Styles.eventCount}>{Math.ceil(Math.random() * 99)}</div> : <div className={Styles.blank}></div>}
            </div>
        )
        dayInLoop.setDate(dayInLoop.getDate() + 1)
    }

    return element
}

export default function Events() {
    const [calendar, setCalendar] = useState(new Date())
    const [today, setToday] = useState(new Date())
    const tagOptions = ['All', 'Fundraising', 'General', 'Meetup', 'Protest']
    const countryOptions = ['All', 'Australia', 'Canada', 'Japan', 'Myanmar', 'United Kingdom', 'United States']
    const sortOptions = ['Duration', 'Engagement', 'Time', 'Title']
    const pageSizes = [20, 40, 80]
    const pages = [1, 2, 3]

    function prevMonth() {
        let newDate = new Date(calendar.getTime())
        newDate.setMonth(newDate.getMonth() - 1)
        setCalendar(newDate)
    }

    function nextMonth() {
        let newDate = new Date(calendar.getTime())
        newDate.setMonth(newDate.getMonth() + 1)
        setCalendar(newDate)
    }

    return (
        <>
            <div className={Styles.filters}>
                <Search />
                <div className={Styles.options}>
                    <Select name='tag' options={tagOptions} />
                    <Select name='country' options={countryOptions} />
                    <Select label='Sort by' name='sortBy' options={sortOptions} />
                    <Select label='Items' name='pageSizes' options={pageSizes} />
                </div>
            </div>
            <div className={Styles.selectDate}>
                <i onClick={prevMonth} className='fa-solid fa-arrow-left'></i>
                <div>{calendar.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
                <i onClick={nextMonth} className='fa-solid fa-arrow-right'></i>
            </div>
            <div className={Styles.calendar}>
                <div className={Styles.header}>Sun</div>
                <div className={Styles.header}>Mon</div>
                <div className={Styles.header}>Tue</div>
                <div className={Styles.header}>Wed</div>
                <div className={Styles.header}>Thu</div>
                <div className={Styles.header}>Fri</div>
                <div className={Styles.header}>Sat</div>
            </div>
            <div className={Styles.calendar}>{createCalendar(calendar, today)}</div>
        </>
    )
}