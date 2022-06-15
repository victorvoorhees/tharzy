import { useState, useEffect } from 'react'
import Post from '../components/Post'
import Select from '../components/Select'
import { IPost, IFundraiser, IEvent } from '../utilities/types'
import {sortObject} from '../utilities/utilities'
import {returnEvents, returnFundraisers, returnPosts} from '../utilities/dummy'

import StylesSearch from '../styles/InputText.module.css'
import Styles from '../styles/Home.module.css'

export default function Home() {
    const [postsTrending, setPostsTrending] = useState<IPost[]>(null)
    const [fundraisersTrending, setFundraisersTrending] = useState<IFundraiser[]>(null)
    const [eventsTrending, setEventsTrending] = useState<IEvent[]>(null)

    const [postsLatest, setPostsLatest] = useState<IPost[]>(null)
    const [fundraisersLatest, setFundraisersLatest] = useState<IFundraiser[]>(null)
    const [eventsLatest, setEventsLatest] = useState<IEvent[]>(null)

    const [search, setSearch] = useState('')
    const [searchCategory, setSearchCategory] = useState('post')

    useEffect(() => {
        setPostsTrending(sortObject(returnPosts(), 'engagement').slice(0, 6))
        setFundraisersTrending(sortObject(returnFundraisers(), 'engagement').slice(0, 6))
        setEventsTrending(sortObject(returnEvents(), 'engagement').slice(0, 6))

        setPostsLatest(sortObject(returnPosts(), 'time').slice(0, 4))
        setFundraisersLatest(sortObject(returnFundraisers(), 'time').slice(0, 6))
        setEventsLatest(sortObject(returnEvents(), 'time').slice(0, 6))
    }, [])

    return (
        <div className={Styles.master}>
            <div className={Styles.hero}>
                <img src='myanmar.svg' />
                <h1>Contribute to Myanmar's struggle for freedom.</h1>
                <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ante. Vivamus felis ipsum, convallis a risus non, posuere imperdiet.</p>
                <button className='outline p1'>Find out why</button>
            </div>
            <div className={Styles.user}>
                <div className='fixedWidth'>
                    <div className='h1'>Welcome back, basedcommie!</div>
                    <div>
                        <div>
                            <i className="fi fi-rr-document"/>
                            <div>Add a post</div>
                        </div>
                        <div>
                            <i className="fi fi-rr-dollar"/>
                            <div>Add a fundraiser</div>
                        </div>
                        <div>
                            <i className="fi fi-rr-calendar-clock"/>
                            <div>Add an event</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.content + ' fixedWidth'}>
                <div>
                    <h2 className='h1'>Search</h2>
                    <Select style='minimalist' label={`I'm looking for`} name='searchHome' options={['post', 'fundraiser', 'event']} value={searchCategory} handleChange={(e) => setSearchCategory(e.target.value)} />
                    <div className={StylesSearch.search + ' ' + Styles.search}>
                        <Select style='minimalist' name='searchHome' options={['post', 'fundraiser', 'event']} value={searchCategory} handleChange={(e) => setSearchCategory(e.target.value)} />
                        <input type='text' name='searchHome' id='searchHome' placeholder='What are you looking for?' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <i className='fi fi-rr-search'/>
                    </div>
                </div>
                {postsLatest && (
                    <div>
                        <h2 className='h1'>Latest posts</h2>
                        <div className={Styles.posts}>
                            {postsLatest.map((item, index) => (
                                <div key={index}>
                                    <Post
                                        post={item}
                                        type='post'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {fundraisersLatest && (
                    <div>
                        <h2 className='h1'>Latest fundraisers</h2>
                        <div className={Styles.fundraisers}>
                            {fundraisersLatest.map((item, index) => (
                                <div key={index}>
                                    <Post
                                        fundraiser={item}
                                        type='fundraiser'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {eventsLatest && (
                    <div>
                        <h2 className='h1'>Latest events</h2>
                        <div className={Styles.boxes}>
                            {eventsLatest.map((item, index) => (
                                <div key={index}>
                                    <Post
                                        event={item}
                                        type='event'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className={Styles.gray}>
                <div className={Styles.hero}>
                    <img src='world.svg' />
                    <h1>Familiarize yourself with the situation in Myanmar.</h1>
                    <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ante. Vivamus felis ipsum, convallis a risus non, posuere imperdiet.</p>
                    <button className='outline p1'>Explore encyclopedia</button>
                </div>
            </div>
        </div>
    )
}