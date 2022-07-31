import {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import Search from "../../components/Search";
import Category from "../../components/Category";
import Dropdown from "../../components/Dropdown";
import Post from "../../components/Post";
import { sortObject } from '../../utilities/utilities'
import { returnCountriesMentioned, returnEventCategories, returnEvents } from '../../utilities/dummy'
import Styles from '../../styles/Posts.module.css'


export default function Events() {
    const sortOptions = ['date', 'engagement', 'time', 'title']

    const [data, setData] = useState(null)
    const [categories, setCategories] = useState(null)
    const [countries, setCountries] = useState(null)

    const [searchFor, setSearchFor] = useState('')
    const [selectedCategories, setSelectedCategories] = useState(['protest'])
    const [selectedCountries, setSelectedCountries] = useState(['United States'])
    const [sortBy, setSortBy] = useState('date')

    const {asPath: url} = useRouter()

    useEffect(() => {
        setData(returnEvents(20))
        setCategories(returnEventCategories())
        setCountries(returnCountriesMentioned())
        if (localStorage.getItem('searchFromHome')) setSearchFor(localStorage.getItem('searchFromHome'))
    }, [])

    useEffect(() => {
        localStorage.setItem('searchFromHome', '')
    }, [url])

    function selectCategory(e) {
        let selected = [...selectedCategories]
        if (selected.includes(e.target.name)) {
            const i = selected.indexOf(e.target.name)
            selected.splice(i, 1)
        }
        else {
            selected.push(e.target.name)
        }
        setSelectedCategories(selected)
    }

    function selectCountry(e) {
        let selected = [...selectedCountries]
        if (selected.includes(e.target.name)) {
            const i = selected.indexOf(e.target.name)
            selected.splice(i, 1)
        }
        else {
            selected.push(e.target.name)
        }
        setSelectedCountries(selected)
    }

    let results = data
    if (data) {
        if (searchFor.length > 0) results = results.filter(item => item.title.toLowerCase().includes(searchFor.toLowerCase()))
        results = results.filter(item => selectedCategories.includes(item.category))
        results = results.filter(item => selectedCountries.includes(item.country))
        // sortObject function checks type of sortBy property of first object of results array so results cannot be an empty array
        if (results.length > 0) results = sortObject(results, sortBy)
    }

    if (data) {
        return (
            <div className={Styles.master}>
                <div className={Styles.filters}>
                    <button className='primary'>Add post</button>
                    <div>
                        <div>Search</div>
                        <Search name='search' value={searchFor} handleChange={(e) => setSearchFor(e.target.value)} />
                    </div>
                    <div className={Styles.category}>
                        <div>
                            <div>Category</div>
                            {selectedCategories.length > 0 && <span>{selectedCategories.length}</span>}
                        </div>
                        <Category options={categories} selected={selectedCategories} handleChange={selectCategory} />
                    </div>
                    <div className={Styles.category}>
                        <div>
                            <div>Country</div>
                            {selectedCountries.length > 0 && <span>{selectedCountries.length}</span>}
                        </div>
                        <Category options={countries} selected={selectedCountries} handleChange={selectCountry} />
                    </div>
                </div>
                {results.length > 0 ? (
                    <div>
                        <div className={Styles.results}>
                            <div>
                                <div>Sort by:</div>
                                <Dropdown name='sortBy' options={sortOptions} value={sortBy} handleChange={(e) => setSortBy(e.target.value)} />
                            </div>
                            <div>{results.length} results.</div>
                        </div>
                        <div className={Styles.posts}>
                            {results.map((item, index) => (
                                <div key={index}>
                                    <Post data={item}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={Styles.nothing}>
                        <img src='empty_box.svg' />
                        <div>No results.</div>
                        <p>Try selecting a different filter or typing in a different keyword.</p>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
}