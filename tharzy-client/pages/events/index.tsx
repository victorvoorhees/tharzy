import { useState } from 'react'
import Search from '../../components/Search'
import Select from '../../components/Select'
import Post from '../../components/Post'
import Radio from '../../components/Radio'
import PopUp from '../../components/PopUp'
import { sortObject, returnEvents } from '../../utilities/utilities'
import Styles from '../../styles/Posts.module.css'

type Category = 'all' | 'protest' | 'fundraising' | 'meetup' | 'other'
type Country = 'Australia' | 'Canada' | 'Japan' | 'Singapore' | 'South Korea' | 'Thailand' | 'UK' | 'USA'
type SortOption = 'title' | 'time' | 'date' | 'engagement'

interface IPost {
    date: number,
    duration: string,
    uploadedBy: string,
    time: number,
    category: Category,
    country: Country,
    title: string,
    engagement: number,
    likes: number,
    dislikes: number,
    comments: number
}

const categories: Category[] = ['all', 'protest', 'fundraising', 'meetup', 'other']
const sortOptions: SortOption[] = ['title', 'date', 'time', 'engagement']

export default function Events() {
    const data: IPost[] = returnEvents()

    const [searchFor, setSearchFor] = useState<string>('')
    const [category, setCategory] = useState<Category>('all')
    const [sortBy, setSortBy] = useState<SortOption>('title')

    function resetFilters() {
        setSearchFor('')
        setCategory('all')
        setSortBy('title')
    }

    let results: IPost[] = data
    if (searchFor.length > 0) {
        results = results.filter(item => item.title.toLowerCase().includes(searchFor.toLowerCase()))
    }
    if (category !== 'all') {
        results = results.filter(item => item.category.toLowerCase() === category.toLowerCase())
    }
    // sortObject function checks type of sortBy property of first object of results array so results cannot be an empty array
    if (results.length > 0) results = sortObject(results, sortBy)

    return (
        <div className={Styles.container}>
            <div className={Styles.filters}>
                <Search label='Search' value={searchFor} handleChange={e => setSearchFor(e.target.value)} styles={Styles.search} />
                <div className={Styles.options}>
                    <Radio label='Categories' name='category' options={categories} value={category} handleChange={e => setCategory(e.target.value)} styles={Styles.radio} />
                    <Select label='Categories' name='category' options={categories} value={category} handleChange={e => setCategory(e.target.value)} styles={Styles.select} />
                    <Radio label='Sort by' name='sortBy' options={sortOptions} value={sortBy} handleChange={e => setSortBy(e.target.value)} styles={Styles.radio} />
                    <Select label='Sort by' name='sortBy' options={sortOptions} value={sortBy} handleChange={e => setSortBy(e.target.value)} styles={Styles.select} />
                </div>
                <button onClick={resetFilters} className={`outline ${Styles.reset}`}>Reset filters</button>
            </div>
            <div className={Styles.content}>
                <PopUp status={results.length > 0 ? 'success' : 'warning'} label={`Found ${results.length} items matching the criteria.`} />
                <div className={Styles.posts}>
                    {results.map((item, index) => (
                        <div key={index}>
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
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}