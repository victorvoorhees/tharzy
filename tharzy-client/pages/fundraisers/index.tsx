import { useState } from 'react'
import Search from '../../components/Search'
import Select from '../../components/Select'
import Post from '../../components/Post'
import Radio from '../../components/Radio'
import PopUp from '../../components/PopUp'
import { sortObject, returnFundraisers } from '../../utilities/utilities'
import Styles from '../../styles/Posts.module.css'

type Category = 'all' | 'humanitarian' | 'resistance' | 'other'
type SortOption = 'title' | 'time' | 'deadline' | 'engagement'

interface IPost {
    uploadedBy: string,
    time: number,
    category: Category,
    title: string,
    deadline: number,
    engagement: number,
    likes: number,
    dislikes: number,
    comments: number
}

const categories: Category[] = ['all', 'humanitarian', 'resistance', 'other']
const sortOptions: SortOption[] = ['title', 'time', 'deadline', 'engagement']

export default function Fundraisers() {
    const data: IPost[] = returnFundraisers()

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
                                uploadedBy={item.uploadedBy}
                                time={item.time}
                                category={item.category}
                                title={item.title}
                                deadline={item.deadline}
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