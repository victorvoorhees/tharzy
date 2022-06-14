import Styles from '../styles/AddContent.module.css'
import {postCategoryArray, fundraiserCategoryArray, eventCategoryArray} from '../utilities/types'
import {useState} from 'react'
import Dropdown from './Dropdown'
import {produceCalendar, produceTime} from "../utilities/utilities";
import Select from "./Select";
import InputText from "./InputText";
import {useRouter} from "next/router";


const calendar = produceCalendar(5)
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const {m: minutes, h: hours} = produceTime()

export default function AddContent() {
    const [eventOpen, setEventOpen] = useState(false)
    const [locationOpen, setLocationOpen] = useState(false)

    const [postCategory, setPostCategory] = useState(postCategoryArray[0])

    const [startYear, setStartYear] = useState(Object.keys(calendar)[0])
    const [startMonth, setStartMonth] = useState(1)
    const [startDay, setStartDay] = useState(1)

    const [startHour, setStartHour] = useState(0)
    const [startMinute, setStartMinute] = useState(0)

    const [endYear, setEndYear] = useState(Object.keys(calendar)[0])
    const [endMonth, setEndMonth] = useState(1)
    const [endDay, setEndDay] = useState(1)

    const [endHour, setEndHour] = useState(0)
    const [endMinute, setEndMinute] = useState(0)

    const [location, setLocation] = useState(null)

    const router = useRouter()

    function autogrow(e) {
        e.target.style.height = ''
        e.target.style.height = (e.target.scrollHeight) + 'px'
    }

    let startDays = []
    for (let i = 1; i < (calendar[startYear][startMonth - 1] + 1); i++) {
        startDays.push(i)
    }

    return (
        <div className={Styles.master}>
            <textarea className='h1' placeholder='Type title here...' onChange={autogrow} />
            <Select style='category' name='postCategory' options={postCategoryArray} value={postCategory} handleChange={setPostCategory} />
            <textarea className='p1' placeholder='Type body here...' onChange={autogrow} />
            <div className={Styles.stuff}>
                <div>
                    <div>
                        <button title='Add date and time of event' onClick={() => {
                            setEventOpen(!eventOpen)
                            setLocationOpen(false)
                        }}><i className={'fi fi-' + (eventOpen ? 'sr' : 'rr') + '-calendar-minus p1' + (eventOpen ? ' red' : '')}/></button>
                        {eventOpen && (
                            <div className={Styles.eventMenu}>
                                <div>
                                    <div className='bold'>Start date</div>
                                    <div>
                                        <Select style='normal' label='Day' name='startDay' options={startDays} value={startDay} handleChange={(e) => setStartDay(e.target.value)} />
                                        <Select style='normal' label='Month' name='startMonth' options={months} value={startMonth} handleChange={(e) => setStartMonth(e.target.value)} />
                                        <Select style='normal' label='Year' name='startYear' options={Object.keys(calendar)} value={startYear} handleChange={(e) => setStartYear(e.target.value)} />
                                    </div>
                                    <div>
                                        <Select style='normal' label='Hour' name='startHour' options={hours} value={startHour} handleChange={(e) => setStartHour(e.target.value)} />
                                        <Select style='normal' label='Minute' name='startMinute' options={minutes} value={startMinute} handleChange={(e) => setStartMinute(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <div className='bold'>End date</div>
                                    <div>
                                        <Select style='normal' label='Day' name='endDay' options={startDays} value={endDay} handleChange={(e) => setEndDay(e.target.value)} />
                                        <Select style='normal' label='Month' name='endMonth' options={months} value={endMonth} handleChange={(e) => setEndMonth(e.target.value)} />
                                        <Select style='normal' label='Year' name='endYear' options={Object.keys(calendar)} value={endYear} handleChange={(e) => setEndYear(e.target.value)} />
                                    </div>
                                    <div>
                                        <Select style='normal' label='Hour' name='endHour' options={hours} value={endHour} handleChange={(e) => setEndHour(e.target.value)} />
                                        <Select style='normal' label='Minute' name='endMinute' options={minutes} value={endMinute} handleChange={(e) => setEndMinute(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <button title='Add event location' onClick={() => {
                            setLocationOpen(!locationOpen)
                            setEventOpen(false)
                        }}><i className={'fi fi-' + (locationOpen ? 'ss' : 'rs') + '-marker p1' + (locationOpen ? ' red' : '')}/></button>
                        {locationOpen && (
                            <div className={Styles.locationMenu}>
                                <div className='bold'>Enter location</div>
                                <input type='text' name='location' value={location} onChange={(e) => setLocation(e.target.value)} />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <button className='primary'>Submit</button>
                    <button onClick={() => router.back()} className='outline'>Cancel</button>
                </div>
            </div>
            <div className={Styles.error}>
                <div className='icon'><i className="fi fi-rs-exclamation"></i>Please add a title.</div>
                <div className='icon'><i className="fi fi-rs-exclamation"></i>Please add a body.</div>
                <div className='icon'><i className="fi fi-rs-exclamation"></i>Please add date and time.</div>
                <div className='icon'><i className="fi fi-rs-exclamation"></i>Please add a location.</div>
            </div>
        </div>
    )
}