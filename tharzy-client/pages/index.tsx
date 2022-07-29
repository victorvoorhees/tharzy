import { useState } from 'react'
import {returnBody} from '../utilities/dummy'
import Styles from '../styles/Home.module.css'
import Glass from "../icons/glass";
import Dropdown from "../components/Dropdown";
import {useRouter} from "next/router";

const b = returnBody().slice(0, 100)

export default function Home() {
    const [search, setSearch] = useState('')
    const [searchCategory, setSearchCategory] = useState('post')

    const router = useRouter()

    function executeSearch(e) {
        e.preventDefault()
        localStorage.setItem('searchFromHome', search)
        router.push(searchCategory + 's')
    }

    return (
        <div className={Styles.master}>
            <div>
                <h1>Discover and contribute to Myanmar's fight for freedom.</h1>
                <p>The 2021 military coup in Myanmar not only intensified the multi-ethnic armed resistance movement but also caused several humanitarian crises, due to mismanagement and human rights violations by the regime. Learn more and find out how you can help.</p>
                <form className={Styles.search} onSubmit={executeSearch}>
                    <div>
                        <Dropdown name='searchCategory' value={searchCategory} handleChange={(e) => setSearchCategory(e.target.value)} options={['post', 'fundraiser', 'event']} />
                    </div>
                    <input type='text' name='searchMain' id='searchMain' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Type a keyword' />
                    <Glass />
                </form>
            </div>
        </div>
    )
}