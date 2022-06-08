import Styles from '../../styles/Profile.module.css'
import {useEffect, useState} from 'react'
import Post from '../../components/Post'
import {IEvent, IFundraiser, IPost} from '../../utilities/types'
import {sortObject} from '../../utilities/utilities'
import Radio from '../../components/Radio'
import {returnEvents, returnFundraisers, returnPosts} from "../../utilities/dummy";

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

export default function Profile() {
    const sections: section[] = ['posts', 'fundraisers', 'events']

    const [profileData, setProfileData] = useState<IProfile>(null)
    const [posts, setPosts] = useState<IPost[]>(null)
    const [fundraisers, setFundraisers] = useState<IFundraiser[]>(null)
    const [events, setEvents] = useState<IEvent[]>(null)
    const [currentSection, setCurrentSection] = useState<section>('posts')

    useEffect(() => {
        setProfileData({
            username: 'cringe_tankie',
            details: {
                name: 'Kate Granger',
                location: 'United States',
                twitter: 'comradekeyboard',
                about: 'Carpenter, gardener, and half-baked anthropologist.   Easily distracted by things related to Burma, forests, John Coltrane, and the end of capitalism.'
            }
        })
        setPosts(sortObject(returnPosts(), 'time'))
        setFundraisers(sortObject(returnFundraisers(), 'time'))
        setEvents(sortObject(returnEvents(), 'time'))
    }, [])

    if (profileData) {
        return (
            <div className={Styles.master}>
                <div className={Styles.head}>
                    <div>
                        <h1>{profileData.username}</h1>
                        {profileData.details.name && <div className='p-1'>{profileData.details.name}</div>}
                    </div>
                    {profileData.details.about && <p>{profileData.details.about}</p>}
                    <div>
                        {profileData.details.location && <div ><i className='fa-solid fa-location-dot'/>{profileData.details.location}</div>}
                        {profileData.details.twitter && <a  href={`https://twitter.com/${profileData.details.twitter}`} target='_blank'><i className='fa-brands fa-twitter'/>{profileData.details.twitter}</a>}
                        {profileData.details.facebook && <div ><i className='fa-brands fa-facebook-f'/>{profileData.details.facebook}</div>}
                    </div>

                </div>
                <div className={Styles.content}>
                    <Radio name='section' options={sections} value={currentSection} handleChange={(e) => setCurrentSection(e.target.value)} style='section' />
                    <div className={Styles.posts}>
                        {currentSection === 'posts' && posts.map((item, index) => (
                            <Post
                                post={item}
                                type='post'
                                key={index}
                            />
                        ))}
                        {currentSection === 'fundraisers' && fundraisers.map((item, index) => (
                            <Post
                                fundraiser={item}
                                type='fundraiser'
                                key={index}
                            />
                        ))}
                        {currentSection === 'events' && events.map((item, index) => (
                            <Post
                                event={item}
                                type='event'
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    return null
}