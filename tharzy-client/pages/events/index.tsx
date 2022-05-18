import {useEffect, useState} from 'react'
import Search from '../../components/Search'
import Select from '../../components/Select'
import Post from '../../components/Post'
import Radio from '../../components/Radio'
import PopUp from '../../components/PopUp'
import Styles from '../../styles/Posts.module.css'
import { EventCategory, IEvent } from '../../utilities/types'
import { sortObject, returnEvents } from '../../utilities/utilities'
import SkeletonPost from "../../components/SkeletonPost";

type SortOption = 'title' | 'time' | 'date' | 'engagement'

export default function Events() {
    const categories: EventCategory[] = ['all', 'fundraising', 'meetup', 'other', 'protest']
    const sortOptions: SortOption[] = ['date', 'engagement', 'time', 'title']

    const [data, setData] = useState<IEvent[]>(null)

    const [searchFor, setSearchFor] = useState('')
    const [category, setCategory] = useState<EventCategory>('all')
    const [country, setCountry] = useState('all')
    const [sortBy, setSortBy] = useState<SortOption>('date')

    function resetFilters() {
        setSearchFor('')
        setCategory('all')
        setCountry('all')
        setSortBy('title')
    }

    useEffect(() => {
        setData(returnEvents())
    }, [])

    let a: JSX.Element[] = []
    for (let i = 0; i < 9; i++) {
        a.push(<SkeletonPost key={i} />)
    }

    let results = data
    let countries: string[] = []
    if (data) {
        data.forEach(event => {if (!countries.includes(event.country)) countries.push(event.country)})
        countries.sort()
        countries.unshift('all')

        if (searchFor.length > 0) results = results.filter(item => item.title.toLowerCase().includes(searchFor.toLowerCase()))
        if (category !== 'all') results = results.filter(item => item.category.toLowerCase() === category.toLowerCase())
        if (country !== 'all') results = results.filter(item => item.country.toLowerCase() === country.toLowerCase())
        // sortObject function checks type of sortBy property of first object of results array so results cannot be an empty array
        if (results.length > 0) results = sortObject(results, sortBy)
    }

    return (
        <div className={Styles.master}>
            <div className={Styles.filters}>
                <Search label='Search' value={searchFor} handleChange={e => setSearchFor(e.target.value)} styles={Styles.search} />
                <div className={Styles.options}>
                    <Radio label='Categories' name='category' options={categories} value={category} handleChange={e => setCategory(e.target.value)} styles={Styles.radio} />
                    <Select label='Categories' name='category' options={categories} value={category} handleChange={e => setCategory(e.target.value)} styles={Styles.select} />
                    {countries.length > 0 && (
                        <>
                            <Radio label='Countries' name='country' options={countries} value={country} handleChange={e => setCountry(e.target.value)} styles={Styles.radio} />
                            <Select label='Countries' name='country' options={countries} value={country} handleChange={e => setCountry(e.target.value)} styles={Styles.select} />
                        </>
                    )}
                    <Radio label='Sort by' name='sortBy' options={sortOptions} value={sortBy} handleChange={e => setSortBy(e.target.value)} styles={Styles.radio} />
                    <Select label='Sort by' name='sortBy' options={sortOptions} value={sortBy} handleChange={e => setSortBy(e.target.value)} styles={Styles.select} />
                </div>
                <button onClick={resetFilters} className={`outline ${Styles.reset}`}>Reset filters</button>
            </div>
            <div className={Styles.content}>
                {results ? (results.map((item, index) => (
                    <Post
                        date={item.date}
                        duration={item.duration}
                        uploadedBy={item.uploadedBy}
                        time={item.time}
                        category={item.category}
                        country={item.country}
                        title={item.title}
                        likes={item.likes}
                        dislikes={item.dislikes}
                        comments={item.comments}
                        styles={Styles.post}
                        key={index}
                    />
                ))) : (a)}
            </div>
        </div>
    )
}