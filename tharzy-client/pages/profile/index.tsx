import Styles from '../../styles/Profile.module.css'
import {useEffect, useState} from 'react'
import Post from '../../components/Post'
import {IEvent, IFundraiser, IPost} from '../../utilities/types'
import {returnEvents, returnFundraisers, returnPosts, sortObject} from '../../utilities/utilities'
import RadioSection from '../../components/RadioSection'

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
    },
    tags: string[]
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
            username: 'basedrevolutionary',
            details: {
                name: 'Kate Granger',
                location: 'United States',
                twitter: 'comradekeyboard',
                about: 'Carpenter, gardener, and half-baked anthropologist.   Easily distracted by things related to Burma, forests, John Coltrane, and the end of capitalism.'
            },
            tags: ['Communist', 'Bamar']
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
                        {profileData.details.name && <div><i className='fa-solid fa-user'/>{profileData.details.name}</div>}
                        {profileData.details.location && <div><i className='fa-solid fa-location-dot'/>{profileData.details.location}</div>}
                        {profileData.details.twitter && <div><a href={`https://twitter.com/${profileData.details.twitter}`} target='_blank' className='styled'><i className='fa-brands fa-twitter'/>{profileData.details.twitter}</a></div>}
                        {profileData.details.facebook && <div><i className='fa-brands fa-facebook-f'/>{profileData.details.facebook}</div>}
                        {profileData.tags.length > 0 && (
                            <div className={Styles.tags}>
                                {profileData.tags.map((tag, index) => <div key={index}>{tag}</div>)}
                            </div>
                        )}
                    </div>
                    {profileData.details.about && <div><h2>About</h2><p>{profileData.details.about}</p></div>}
                </div>
                <div className={Styles.content}>
                    <RadioSection name='section' options={sections} value={currentSection} handleChange={(e) => setCurrentSection(e.target.value)} />
                    <div className={Styles.result}>This user has submitted {(currentSection === 'posts' && `${posts.length} posts`) || (currentSection === 'fundraisers' && `${fundraisers.length} fundraisers`) || (currentSection === 'events' && `${events.length} events`)}.</div>
                    <div className={Styles.posts}>
                        {currentSection === 'posts' && posts.map((item, index) => (
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
                        ))}
                        {currentSection === 'fundraisers' && fundraisers.map((item, index) => (
                            <Post
                                uploadedBy={item.uploadedBy}
                                time={item.time}
                                category={item.category}
                                title={item.title}
                                deadline={item.deadline}
                                likes={item.likes}
                                dislikes={item.dislikes}
                                comments={item.comments}
                                styles={Styles.post}
                                key={index}
                            />
                        ))}
                        {currentSection === 'events' && events.map((item, index) => (
                            <Post
                                date={item.date}
                                duration={item.duration}
                                uploadedBy={item.uploadedBy}
                                time={item.time}
                                category={item.category}
                                country={item.country}
                                title={item.title}
                                likes={item.likes}
                                dislikes={item.dislikes}
                                comments={item.comments}
                                styles={Styles.post}
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