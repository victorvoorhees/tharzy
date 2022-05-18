import {useEffect, useState} from 'react'
import Search from '../../components/Search'
import Select from '../../components/Select'
import Post from '../../components/Post'
import Radio from '../../components/Radio'
import PopUp from '../../components/PopUp'
import Styles from '../../styles/Posts.module.css'
import { PostCategory, IPost } from '../../utilities/types'
import { sortObject, returnPosts } from '../../utilities/utilities'
import SkeletonPost from "../../components/SkeletonPost";

type SortOption = 'title' | 'time' | 'engagement'

const categories: PostCategory[] = ['all', 'atrocities', 'resistance', 'international', 'opinion', 'other']
const sortOptions: SortOption[] = ['title', 'time', 'engagement']

export default function Posts() {
    const [data, setData] = useState<IPost[]>(null)

    const [searchFor, setSearchFor] = useState<string>('')
    const [category, setCategory] = useState<PostCategory>('all')
    const [sortBy, setSortBy] = useState<SortOption>('title')

    useEffect(() => {
        setData(returnPosts())
    }, [])

    function resetFilters() {
        setSearchFor('')
        setCategory('all')
        setSortBy('title')
    }

    let a: JSX.Element[] = []
    for (let i = 0; i < 9; i++) {
        a.push(<SkeletonPost key={i} />)
    }

    let results = data
    if (data) {
        if (searchFor.length > 0) results = results.filter(item => item.title.toLowerCase().includes(searchFor.toLowerCase()))
        if (category !== 'all') results = results.filter(item => item.category.toLowerCase() === category.toLowerCase())
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
                    <Radio label='Sort by' name='sortBy' options={sortOptions} value={sortBy} handleChange={e => setSortBy(e.target.value)} styles={Styles.radio} />
                    <Select label='Sort by' name='sortBy' options={sortOptions} value={sortBy} handleChange={e => setSortBy(e.target.value)} styles={Styles.select} />
                </div>
                <button onClick={resetFilters} className={`outline ${Styles.reset}`}>Reset filters</button>
            </div>
            <div className={Styles.content}>
                {results ? (results.map((item, index) => (
                    <Post
                        uploadedBy={item.uploadedBy}
                        time={item.time}
                        category={item.category}
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



/*



 */


