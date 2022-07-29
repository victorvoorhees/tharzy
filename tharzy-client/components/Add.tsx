import {useState} from 'react'
import Calendar from './Calendar'
import Dropdown from "./Dropdown";
import DropdownCategory from "./DropdownCategory";
import returnCountries from '../utilities/countries'
import {returnPostCategories} from '../utilities/dummy'
import Styles from '../styles/Add.module.css'



const hrs = Array.from({length: 23}, (_, i) => i + 1)
const mins = Array.from({length: 59}, (_, i) => i + 1)


export default function Add() {
    const [category, setCategory] = useState(returnPostCategories()[0].category)

    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [country, setCountry] = useState('Myanmar')
    const [address, setAddress] = useState('')

    const [startDateOpen, setStartDateOpen] = useState(false)
    const [endDateOpen, setEndDateOpen] = useState(false)

    function autogrow(e) {
        e.target.style.height = ''
        e.target.style.height = (e.target.scrollHeight) + 'px'
    }

    return (
        <div className={Styles.add}>
            <div>
                <DropdownCategory name='category' options={returnPostCategories()} value={category} handleChange={(e) => setCategory(e.target.value)} />
                <textarea className='h1' placeholder='Type title here...' onChange={autogrow} />
                <textarea placeholder='Type body here...' onChange={autogrow} />
            </div>

            <div>
                <div className={Styles.date}>
                    <div>
                        <div>Start date</div>
                        <div className={Styles.entry}>
                            <input type='checkbox' name='startDate' id='startDate' checked={startDateOpen} onChange={() => {
                                if (!startDateOpen) setStartDateOpen(true)
                            }} />
                            <label htmlFor='startDate'>{start.toDateString()}</label>
                            {startDateOpen && (
                                <div className={Styles.calendar}>
                                    <Calendar name='start' handleClick={(d) => setStart(new Date(d.target.value))} value={start} handleClose={() => setStartDateOpen(false)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={Styles.time}>
                        <div>Start time</div>
                        <div>
                            <Dropdown name='startTimeHour' options={hrs} value={start.getHours()} handleChange={(e) => {
                                let newDate = new Date(start)
                                newDate.setHours(e.target.value)
                                setStart(newDate)
                            }} />
                            <div>:</div>
                            <Dropdown name='startTimeMinute' options={mins} value={start.getMinutes()} handleChange={(e) => {
                                let newDate = new Date(start)
                                newDate.setMinutes(e.target.value)
                                setStart(newDate)
                            }} />
                        </div>
                    </div>
                </div>

                <div className={Styles.date}>
                    <div>
                        <div>End date</div>
                        <div className={Styles.entry}>
                            <input type='checkbox' name='endOpen' id='endOpen' checked={endDateOpen} onChange={() => {
                                if (!endDateOpen) setEndDateOpen(true)
                            }} />
                            <label htmlFor='endOpen'>{end.toDateString()}</label>
                            {endDateOpen && (
                                <div className={Styles.calendar}>
                                    <Calendar name='end' handleClick={(d) => setEnd(new Date(d.target.value))} value={end} handleClose={() => setEndDateOpen(false)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={Styles.time}>
                        <div>End time</div>
                        <div>
                            <Dropdown name='endTimeHour' options={hrs} value={end.getHours()} handleChange={(e) => {
                                let newDate = new Date(end)
                                newDate.setHours(e.target.value)
                                setEnd(newDate)
                            }} />
                            <div>:</div>
                            <Dropdown name='endTimeMinute' options={mins} value={end.getMinutes()} handleChange={(e) => {
                                let newDate = new Date(end)
                                newDate.setMinutes(e.target.value)
                                setEnd(newDate)
                            }} />
                        </div>
                    </div>
                </div>
                <div className={Styles.country}>
                    <div>
                        <div>Country</div>
                        <Dropdown name='country' options={returnCountries()} value={country} handleChange={(e) => setCountry(e.target.value)} />
                    </div>
                </div>

                <div className={Styles.location}>
                    <div>Full address</div>
                    <input type='text' name='address' id='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Type the location details here' />
                </div>
            </div>

            <button className='primary'>Submit event</button>
        </div>
    )
}