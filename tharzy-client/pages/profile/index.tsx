import Styles from '../../styles/Profile.module.css'
import {useEffect, useState} from 'react'
import Post from '../../components/Post'
import {IEvent, IFundraiser, IPost} from '../../utilities/types'
import {sortObject} from '../../utilities/utilities'
import Radio from '../../components/Radio'
import {returnEvents, returnFundraisers, returnPosts} from "../../utilities/dummy";
import Select from "../../components/Select";

type section = 'posts' | 'fundraisers' | 'events'

interface IProfile {
    username: string,
    details: {
        email?: string,
        name?: string,
        location?: string,
        twitter?: string,
        facebook?: string,
        about?: string
    }
}

const sections: section[] = ['posts', 'fundraisers', 'events']
const sortPostsOptions = ['engagement', 'time', 'title']
const sortFundraisersOptions = ['deadline', 'engagement', 'time', 'title']
const sortEventsOptions = ['date', 'engagement', 'time', 'title']

export default function Profile() {
    const [profileData, setProfileData] = useState<IProfile>(null)
    const [posts, setPosts] = useState<IPost[]>(null)
    const [fundraisers, setFundraisers] = useState<IFundraiser[]>(null)
    const [events, setEvents] = useState<IEvent[]>(null)
    const [currentSection, setCurrentSection] = useState<section>('posts')

    const [sortPosts, setSortPosts] = useState('time')
    const [sortFundraisers, setSortFundraisers] = useState('time')
    const [sortEvents, setSortEvents] = useState('time')

    useEffect(() => {
        setProfileData({
            username: 'cringe_tankie',
            details: {
                name: 'Kate Granger',
                location: 'United States',
                email: 'kate2222222@gmail.com',
                twitter: 'https://twitter.com/comradekeyboard',
                about: 'Carpenter, gardener, and half-baked anthropologist.   Easily distracted by things related to Burma, forests, John Coltrane, and the end of capitalism.'
            }
        })
        setPosts(sortObject(returnPosts(), 'time'))
        setFundraisers(sortObject(returnFundraisers(), 'time'))
        setEvents(sortObject(returnEvents(), 'time'))
    }, [])

    if (profileData) {
        let postsSorted = sortObject(posts, sortPosts)
        let fundraisersSorted = sortObject(fundraisers, sortPosts)
        let eventsSorted = sortObject(events, sortPosts)

        return (
            <div className={Styles.master}>
                <div className={Styles.head}>
                    <div>
                        <h1>{profileData.username}</h1>
                        {profileData.details.name && <div>{profileData.details.name}</div>}
                    </div>
                    {profileData.details.about && <p className='p1'>{profileData.details.about}</p>}
                    <div>
                        {profileData.details.location && <div className='icon' ><i className='fi fi-rs-marker'/>{profileData.details.location}</div>}
                        {profileData.details.email && <div className='icon' ><i className='fi fi-rr-envelope'/>{profileData.details.email}</div>}
                        {profileData.details.twitter && <a className='icon' href={profileData.details.twitter} target='_blank'><i className='fi fi-brands-twitter'/>{profileData.details.twitter}</a>}
                        {profileData.details.facebook && <a className='icon' href={profileData.details.facebook} target='_blank'><i className='fi fi-brands-facebook'/>{profileData.details.facebook}</a>}
                    </div>

                </div>
                <div className={Styles.content}>
                    <div>
                        <Radio name='section' options={sections} value={currentSection} handleChange={(e) => setCurrentSection(e.target.value)} style='section' />
                    </div>
                    {currentSection === 'posts' && (
                        <>
                            <Select style='minimalist' label='Sort by' name='sortPost' options={sortPostsOptions} value={sortPosts} handleChange={(e) => setSortPosts(e.target.value)} />
                            <div className={Styles.posts}>
                                {postsSorted.map((item, index) => (
                                    <Post
                                        post={item}
                                        type='post'
                                        key={index}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                    {currentSection === 'fundraisers' && (
                        <>
                            <Select style='minimalist' label='Sort by' name='sortFundraiser' options={sortFundraisersOptions} value={sortFundraisers} handleChange={(e) => setSortPosts(e.target.value)} />
                            <div className={Styles.events}>
                                {fundraisersSorted.map((item, index) => (
                                    <Post
                                        fundraiser={item}
                                        type='fundraiser'
                                        key={index}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                    {currentSection === 'events' && (
                        <>
                            <Select style='minimalist' label='Sort by' name='sortEvent' options={sortEventsOptions} value={sortEvents} handleChange={(e) => setSortPosts(e.target.value)} />
                            <div className={Styles.events}>
                                {eventsSorted.map((item, index) => (
                                    <Post
                                        event={item}
                                        type='event'
                                        key={index}
                                    />
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