import {useEffect, useState} from 'react'
import Select from '../../components/Select'
import Post from '../../components/Post'
import Radio from '../../components/Radio'
import Skeleton from '../../components/Skeleton'
import InputText from '../../components/InputText'
import Loading from '../../components/loading'
import { sortObject } from '../../utilities/utilities'
import { EventCategory, IEvent } from '../../utilities/types'
import { returnEvents } from '../../utilities/dummy'
import Styles from '../../styles/Posts.module.css'

type SortOption = 'title' | 'time' | 'date' | 'engagement'

export default function Events() {
    const categories: EventCategory[] = ['all', 'fundraising', 'meetup', 'other', 'protest']
    const sortOptions: SortOption[] = ['date', 'engagement', 'time', 'title']

    const [data, setData] = useState<IEvent[]>(null)
    const [countries, setCountries] = useState<string[]>(null)

    const [searchFor, setSearchFor] = useState('')
    const [category, setCategory] = useState<EventCategory>('all')
    const [country, setCountry] = useState('All')
    const [sortBy, setSortBy] = useState<SortOption>('date')

    useEffect(() => {
        const info = returnEvents()
        setData(info)

        let c: string[] = []
        info.forEach(event => {if (!c.includes(event.location.country)) c.push(event.location.country)})
        c.sort()
        c.unshift('All')  /* if the first letter is not capitalized, it breaks filter selection */
        setCountries(c)
    }, [])

    let a: JSX.Element[] = []
    for (let i = 0; i < 9; i++) {
        a.push(<div className={Styles.post}><Skeleton type='post' key={i} /></div>)
    }

    let results = data
    if (data) {
        if (searchFor.length > 0) results = results.filter(item => item.title.toLowerCase().includes(searchFor.toLowerCase()))
        if (category !== 'all') results = results.filter(item => item.category.toLowerCase() === category.toLowerCase())
        if (country !== 'All') results = results.filter(item => item.location.country.toLowerCase() === country.toLowerCase())
        // sortObject function checks type of sortBy property of first object of results array so results cannot be an empty array
        if (results.length > 0) results = sortObject(results, sortBy)
    }

    if (data) {
        return (
            <div className={Styles.master}>
                <div>
                    <div>
                        <div className='h7'>Search</div>
                        <InputText type='search' name='keyword' value={searchFor} handleChange={e => setSearchFor(e.target.value)} placeholder='Keyword?' />
                    </div>
                    <div>
                        <div className='h7'>Category</div>
                        <Radio name='category' options={categories} value={category} handleChange={(e) => setCategory(e.target.value)} style='tags' />
                    </div>
                    <div>
                        <div className='h7'>Country</div>
                        <Radio name='country' options={countries} value={country} handleChange={(e) => setCountry(e.target.value)} style='tags' country={true} />
                    </div>
                </div>
                {results.length > 0 ? (
                    <div>
                        <div className={Styles.sort}>
                            <Select style='minimalist' label='Sort by' name='sort' options={sortOptions} value={sortBy} handleChange={(e) => setSortBy(e.target.value)} />
                        </div>
                        <div className={Styles.boxes}>
                            {results.map((item, index) => (
                                <div key={index}>
                                    <Post
                                        event={item}
                                        type='event'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={Styles.nothing}>
                        <div className='h2'>Nothing found.</div>
                        <div className='p1'>Maybe try selecting a different filter or typing in a different keyword?</div>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <Loading />
        )
    }
}