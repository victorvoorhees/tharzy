
import {useEffect, useState} from 'react'
import {sortObject} from '../../utilities/utilities'
import {returnEvents, returnFundraisers, returnPosts, returnProfile} from "../../utilities/dummy";
import Phone from '../../icons/phone'
import Mail from '../../icons/mail'
import Twitter from '../../icons/twitter'
import Fb from '../../icons/fb'
import Styles from '../../styles/Profile.module.css'
import Post from "../../components/Post";
import Location from "../../icons/location";
import Dropdown from "../../components/Dropdown";

const sections = ['posts', 'fundraisers', 'events']
const sortPostsOptions = ['engagement', 'time', 'title']
const sortFundraisersOptions = ['deadline', 'engagement', 'time', 'title']
const sortEventsOptions = ['date', 'engagement', 'time', 'title']

export default function Profile() {
    const [data, setData] = useState(null)

    const [posts, setPosts] = useState(null)
    const [fundraisers, setFundraisers] = useState(null)
    const [events, setEvents] = useState(null)

    const [show, setShow] = useState('posts')

    const [sortPosts, setSortPosts] = useState('time')
    const [sortFundraisers, setSortFundraisers] = useState('time')
    const [sortEvents, setSortEvents] = useState('time')

    useEffect(() => {
        setData(returnProfile())
        setPosts(returnPosts(10))
        setFundraisers(returnFundraisers(10))
        setEvents(returnEvents(10))
    }, [])

    if (data) {
        let postsSorted = sortObject(posts, sortPosts)
        let fundraisersSorted = sortObject(fundraisers, sortFundraisers)
        let eventsSorted = sortObject(events, sortEvents)

        return (
            <div className={Styles.master}>
                <div className={Styles.user}>
                    <div>
                        <div>{data.username}</div>
                        {data.name && <div>{data.name}</div>}
                    </div>
                    {(data.phone && data.email && data.location) && (
                        <div className={Styles.details}>
                            {data.phone && (
                                <div>
                                    <Phone />
                                    <div>{data.phone}</div>
                                </div>
                            )}
                            {data.email && (
                                <div>
                                    <Mail />
                                    <div>{data.email}</div>
                                </div>
                            )}
                            {data.location && (
                                <div>
                                    <Location />
                                    <div>{data.location}</div>
                                </div>
                            )}
                        </div>
                    )}
                    {data.about && <p>{data.about}</p>}
                    <div className={Styles.details}>
                        {data.twitter && (
                            <div>
                                <Twitter />
                                <div>{data.twitter}</div>
                            </div>
                        )}
                        {data.facebook && (
                            <div>
                                <Fb />
                                <div>{data.facebook}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className={Styles.select}>
                        <div>
                            <input type='radio' name='show' id='showPosts' value='posts' onChange={(e) => setShow(e.target.value)} checked={show === 'posts'} />
                            <label htmlFor='showPosts'>Posts</label>
                        </div>
                        <div>
                            <input type='radio' name='show' id='showFundraisers' value='fundraisers' onChange={(e) => setShow(e.target.value)} checked={show === 'fundraisers'} />
                            <label htmlFor='showFundraisers'>Fundraisers</label>
                        </div>
                        <div>
                            <input type='radio' name='show' id='showEvents' value='events' onChange={(e) => setShow(e.target.value)} checked={show === 'events'} />
                            <label htmlFor='showEvents'>Events</label>
                        </div>
                    </div>
                    {show === 'posts' && (
                        <>
                            <div className={Styles.results}>
                                <div>
                                    <div>Sort by:</div>
                                    <Dropdown name='sortPosts' options={sortPostsOptions} value={sortPosts} handleChange={(e) => setSortPosts(e.target.value)} />
                                </div>
                                <div>{posts.length} results.</div>
                            </div>
                            <div className={Styles.posts}>
                                {postsSorted.map((item, index) => (
                                    <div key={index}>
                                        <Post data={item}/>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {show === 'fundraisers' && (
                        <>
                            <div className={Styles.results}>
                                <div>
                                    <div>Sort by:</div>
                                    <Dropdown name='sortFundraisers' options={sortFundraisersOptions} value={sortFundraisers} handleChange={(e) => setSortFundraisers(e.target.value)} />
                                </div>
                                <div>{posts.length} results.</div>
                            </div>
                            <div className={Styles.posts}>
                                {fundraisersSorted.map((item, index) => (
                                    <div key={index}>
                                        <Post data={item}/>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {show === 'events' && (
                        <>
                            <div className={Styles.results}>
                                <div>
                                    <div>Sort by:</div>
                                    <Dropdown name='sortEvents' options={sortEventsOptions} value={sortEvents} handleChange={(e) => setSortEvents(e.target.value)} />
                                </div>
                                <div>{posts.length} results.</div>
                            </div>
                            <div className={Styles.posts}>
                                {eventsSorted.map((item, index) => (
                                    <div key={index}>
                                        <Post data={item}/>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    }
    return null
}