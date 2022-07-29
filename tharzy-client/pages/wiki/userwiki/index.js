import {useEffect, useState} from 'react'
import {returnUserDefinitions} from '../../../utilities/dummy'
import Styles from '../../../styles/UserWiki.module.css'
import {sortObject} from "../../../utilities/utilities";
import Post from "../../../components/Post";
import Dropdown from "../../../components/Dropdown";

const sorts = ['engagement', 'time']

export default function UserWiki() {
    const [defs, setDefs] = useState('loading')
    const [sort, setSort] = useState('engagement')

    useEffect(() => {
        setDefs(returnUserDefinitions())
    }, [])

    if (defs === 'loading') {
        return (
            <div className='h1'>Loading</div>
        )
    }
    else if (defs === 'error') {
        return (
            <div className='h1'>Error</div>
        )
    }
    else {
        let results = sortObject(defs, sort)

        return (
            <div className={Styles.master}>
                <h1>Communist Party of Burma</h1>
                <div className={Styles.results}>
                    <div>
                        <div>Sort by:</div>
                        <Dropdown name='sortBy' options={sorts} value={sort} handleChange={(e) => setSort(e.target.value)} />
                    </div>
                    <div>{results.length} results.</div>
                </div>
                <div className={Styles.defs}>
                    {results.map((item, index) => (
                        <div key={index}>
                            <Post data={item} definition={true}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}