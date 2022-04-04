import { useState } from 'react';
import Styles from '../../styles/Events.module.css'
import Search from "../../components/Search";
import Select from "../../components/Select";



export default function Events() {

    const tagOptions = ['All', 'Fundraising', 'General', 'Meetup', 'Protest']
    const countryOptions = ['All', 'Australia', 'Canada', 'Japan', 'Myanmar', 'United Kingdom', 'United States']
    const sortOptions = ['Duration', 'Engagement', 'Time', 'Title']
    const pageSizes = [20, 40, 80]
    const pages = [1, 2, 3]



    return (
        <>
            <div className={Styles.filters}>
                <Search />
                <div className={Styles.options}>
                    <Select name='tag' options={tagOptions} />
                    <Select name='country' options={countryOptions} />
                    <Select label='Sort by' name='sortBy' options={sortOptions} />
                    <Select label='Items' name='pageSizes' options={pageSizes} />
                </div>
            </div>

        </>
    )
}