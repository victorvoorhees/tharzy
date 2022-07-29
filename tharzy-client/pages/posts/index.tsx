import {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import Link from "next/link";
import Post from '../../components/Post'
import Dropdown from '../../components/Dropdown'
import Category from '../../components/Category'
import Search from '../../components/Search'
import {sortObject} from '../../utilities/utilities'
import {returnPostCategories, returnPosts} from '../../utilities/dummy'
import Styles from '../../styles/Posts.module.css'

const sortOptions = ['title', 'time', 'engagement']

export default function Posts() {
    const [data, setData] = useState(null)
    const [categories, setCategories] = useState(null)

    const [search, setSearch] = useState<string>('')
    const [selectedCategories, setSelectedCategories] = useState(['atrocities', 'international', 'other'])
    const [sortBy, setSortBy] = useState('time')

    const {asPath: url} = useRouter()

    useEffect(() => {
        setData(returnPosts(20))
        setCategories(returnPostCategories())
        if (localStorage.getItem('searchFromHome')) setSearch(localStorage.getItem('searchFromHome'))
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

    let results = data
    if (data) {
        if (search.length > 0) results = results.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        results = results.filter(item => selectedCategories.includes(item.category))
        // sortObject function checks type of sortBy property of first object of results array so results cannot be an empty array
        if (results.length > 0) results = sortObject(results, sortBy)
    }

    if (data) {
        return (
            <div className={Styles.master}>
                <div className={Styles.filters}>
                    <Link href='posts/add'><a><button className='primary'>Add post</button></a></Link>
                    <div>
                        <div>Search</div>
                        <Search name='search' value={search} handleChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className={Styles.category}>
                        <div>
                            <div>Category</div>
                            {selectedCategories.length > 0 && <span>{selectedCategories.length}</span>}
                        </div>
                        <Category options={categories} selected={selectedCategories} handleChange={selectCategory} />
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
                        <div className='h2'>No results.</div>
                        <p className='p1'>Try selecting a different filter or typing in a different keyword.</p>
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



/*



 */


