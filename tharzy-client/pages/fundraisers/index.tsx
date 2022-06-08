import {useEffect, useState} from 'react'
import Select from '../../components/Select'
import Post from '../../components/Post'
import Radio from '../../components/Radio'
import Styles from '../../styles/Posts.module.css'
import { FundraiserCategory, IFundraiser } from '../../utilities/types'
import {sortObject} from '../../utilities/utilities'
import Skeleton from '../../components/Skeleton'
import InputText from '../../components/InputText'
import Loading from "../../components/loading";
import {returnFundraisers} from "../../utilities/dummy";

type SortOption = 'title' | 'time' | 'deadline' | 'engagement'

const categories: FundraiserCategory[] = ['all', 'humanitarian', 'other', 'resistance']
const sortOptions: SortOption[] = ['deadline', 'engagement', 'time', 'title']

export default function Fundraisers() {
    const [data, setData] = useState<IFundraiser[]>(null)

    const [searchFor, setSearchFor] = useState<string>('')
    const [category, setCategory] = useState<FundraiserCategory>('all')
    const [sortBy, setSortBy] = useState<SortOption>('deadline')

    useEffect(() => {
        setData(returnFundraisers())
    }, [])

    function resetFilters() {
        setSearchFor('')
        setCategory('all')
        setSortBy('title')
    }

    let a: JSX.Element[] = []
    for (let i = 0; i < 9; i++) {
        a.push(<div className={Styles.post}><Skeleton type='post' key={i} /></div>)
    }

    let results = data
    if (data) {
        if (searchFor.length > 0) results = results.filter(item => item.title.toLowerCase().includes(searchFor.toLowerCase()))
        if (category !== 'all') results = results.filter(item => item.category.toLowerCase() === category.toLowerCase())
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
                </div>
                {results.length > 0 ? (
                    <div>
                        <div className={Styles.sort}>
                            <Select label='Sort by' name='sort' options={sortOptions} value={sortBy} handleChange={(e) => setSortBy(e.target.value)} />
                        </div>
                        <div className={Styles.fundraisers}>
                            {results.map((item, index) => (
                                <div key={index}>
                                    <Post
                                        fundraiser={item}
                                        type='fundraiser'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={Styles.nothing}>
                        <div className='h1'>Nothing found.</div>
                        <div className='p3'>Maybe try selecting a different filter or typing in a different keyword?</div>
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