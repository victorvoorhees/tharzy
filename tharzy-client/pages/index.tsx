import Head from 'next/head'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import PostLarge from '../components/PostLarge'
import Styles from '../styles/Home.module.css'
import { IPost, IFundraiser, IEvent } from '../utilities/types'
import {sortObject} from '../utilities/utilities'
import PostSmall from "../components/PostSmall";
import {returnEvents, returnFundraisers, returnPosts} from "../utilities/dummy";

export default function Home() {
    const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ante. Vivamus felis ipsum, convallis a risus non, posuere imperdiet arcu. Sed odio erat, eleifend vel accumsan vel, varius sit amet dolor. Praesent mollis feugiat nisi a eleifend. Ut lobortis dictum congue. Curabitur vitae arcu porta, semper nulla sit amet, mollis enim. Fusce posuere et odio ac dictum.\n' +
        '\n' +
        'Donec non neque eu lorem sagittis lacinia. Aliquam nisi purus, aliquet eu arcu eget, accumsan pulvinar nisl. Morbi in lobortis mauris. Duis maximus commodo nisi, ut condimentum metus bibendum nec. Cras maximus sem at condimentum interdum. Quisque sit amet neque ex. Vestibulum sollicitudin aliquam orci, non fermentum tortor iaculis eleifend. Donec augue lacus, aliquam a sapien fringilla, tincidunt fermentum turpis. Nulla a porttitor dui. Duis nec semper nulla, vitae consequat metus. Nulla iaculis bibendum tempus.'

    const [userLocation, setUserLocation] = useState('Australia')

    const [postsTrending, setPostsTrending] = useState<IPost[]>(null)
    const [fundraisersTrending, setFundraisersTrending] = useState<IFundraiser[]>(null)
    const [eventsTrending, setEventsTrending] = useState<IEvent[]>(null)

    const [postsLatest, setPostsLatest] = useState<IPost[]>(null)
    const [fundraisersLatest, setFundraisersLatest] = useState<IFundraiser[]>(null)
    const [eventsLatest, setEventsLatest] = useState<IEvent[]>(null)

    useEffect(() => {
        setPostsTrending(sortObject(returnPosts(), 'engagement').slice(0, 6))
        setFundraisersTrending(sortObject(returnFundraisers(), 'engagement').slice(0, 6))
        setEventsTrending(sortObject(returnEvents(), 'engagement').slice(0, 6))

        setPostsLatest(sortObject(returnPosts(), 'time').slice(0, 3))
        setFundraisersLatest(sortObject(returnFundraisers(), 'time').slice(0, 3))
        setEventsLatest(sortObject(returnEvents(), 'time').slice(0, 3))
    }, [])

    return (
        <div>
            <div className={Styles.hero}>
                <div>
                    <div>
                        <h1>Contribute to Myanmar's fight for freedom.</h1>
                        <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ante. Vivamus felis ipsum, convallis a risus non, posuere imperdiet.</p>
                    </div>
                    <img src='/pdf.svg' alt={`Flag of the People's Defence Force`} title={`Flag of the People's Defence Force`} />
                </div>
            </div>
            <div className={`fixedWidth ${Styles.master}`}>
                <div>
                    <h2 className='h1'>Trending.</h2>
                    <div>
                        <div>
                            {postsTrending && postsTrending.map((post, index) => (
                                <div key={index} className={Styles.postSmall}>
                                    <PostSmall title={post.title} category={post.category} time={post.time} />
                                </div>
                            ))}
                        </div>
                        <button className='outline'>See all posts</button>
                        <div>
                            {fundraisersTrending && fundraisersTrending.map((post, index) => (
                                <div key={index} className={Styles.postSmall}>
                                    <PostSmall title={post.title} category={post.category} time={post.time} />
                                </div>
                            ))}
                        </div>
                        <button className='outline'>See all fundraisers</button>
                        <div>
                            {eventsTrending && eventsTrending.map((post, index) => (
                                <div key={index} className={Styles.postSmall}>
                                    <PostSmall title={post.title} category={post.category} country={post.location.country} time={post.time} />
                                </div>
                            ))}
                        </div>
                        <button className='outline'>See all events</button>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='h1'>Latest posts.</h2>
                        <div>
                            {postsLatest && postsLatest.map((post, index) => (
                                <div className={Styles.postLarge} key={index}>
                                    <PostLarge category={post.category} title={post.title} body={body} time={post.time} likes={post.likes} dislikes={post.dislikes} comments={post.comments} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className='h1'>Latest fundraisers.</h2>
                        <div>
                            {fundraisersLatest && fundraisersLatest.map((post, index) => (
                                <div className={Styles.postLarge} key={index}>
                                    <PostLarge deadline={post.deadline} category={post.category} title={post.title} body={body} time={post.time} likes={post.likes} dislikes={post.dislikes} comments={post.comments} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}







/*


<div className={`main ${Styles.contentContainer}`}>
                {(trendingPosts && postsLatest) && (
                    <div>
                        <h2 className={Styles.bigHeader}>Discover posts</h2>
                        <div className={Styles.content}>
                            <div>
                                <div className={Styles.trappedContent}>
                                    <h2 className={Styles.subHeading}>Trending posts</h2>
                                    <div className={Styles.gridSmallSpacing}>
                                        {trendingPosts.map((fundraiser, index) => (
                                            <PostSmall category={fundraiser.category} title={fundraiser.title} time={fundraiser.time} styles={Styles.itemSmallPadding} key={index} />
                                        ))}
                                    </div>
                                    <div></div>
                                </div>
                                <button className='outline'>View more</button>
                            </div>
                            <div className={Styles.latestPosts}>
                                <PostLarge category={postsLatest[0].category} title={postsLatest[0].title} body={body} time={postsLatest[0].time}  likes={postsLatest[0].likes} dislikes={postsLatest[0].dislikes} comments={postsLatest[0].comments} styles={Styles.itemNormalPadding} />
                                <div className={Styles.latestDivRight}>
                                    {postsLatest.slice(1, 4).map((post, index) => (
                                        <Post category={post.category} title={post.title} time={post.time} likes={post.likes} dislikes={post.dislikes} comments={post.comments} styles={Styles.itemNormalPadding} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(trendingFundraisers && fundraisersLatest) && (
                    <div>
                        <h2 className={Styles.bigHeader}>Discover fundraisers</h2>
                        <div className={Styles.content}>
                            <div>
                                <div className={Styles.trappedContent}>
                                    <h2 className={Styles.subHeading}>Trending fundraisers</h2>
                                    <div className={Styles.gridSmallSpacing}>
                                        {trendingFundraisers.map((fundraiser, index) => (
                                            <PostSmall deadline={fundraiser.deadline} category={fundraiser.category} title={fundraiser.title} time={fundraiser.time} styles={Styles.itemSmallPadding} key={index} />
                                        ))}
                                    </div>
                                    <div></div>
                                </div>
                                <button className='outline'>View more</button>
                            </div>
                            <div className={Styles.latestPosts}>
                                <PostLarge deadline={fundraisersLatest[0].deadline} category={fundraisersLatest[0].category} title={postsLatest[0].title} body={body} time={postsLatest[0].time}  likes={postsLatest[0].likes} dislikes={postsLatest[0].dislikes} comments={postsLatest[0].comments} styles={Styles.itemNormalPadding} />
                                <div className={Styles.latestDivRight}>
                                    {fundraisersLatest.slice(1, 4).map((post, index) => (
                                        <Post deadline={post.deadline} category={post.category} title={post.title} time={post.time} likes={post.likes} dislikes={post.dislikes} comments={post.comments} styles={Styles.itemNormalPadding} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(postAtrocities && postResistance && postInternational) && (
                    <div className={Styles.latestByCategoryContainer}>
                        <div>
                            <h2 className={Styles.bigHeader}>More posts</h2>
                            <div className={Styles.latestByCategory}>
                                <div>
                                    <h2 className={Styles.subHeading}>Atrocities</h2>
                                    <div className={Styles.gridSmallSpacing}>
                                        {postAtrocities.map((post, index) => (
                                            <PostSmall title={post.title} time={post.time} styles={Styles.trendingPost} key={index} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className={Styles.subHeading}>Resistance</h2>
                                    <div className={Styles.gridSmallSpacing}>
                                        {postResistance.map((post, index) => (
                                            <PostSmall title={post.title} time={post.time} styles={Styles.trendingPost} key={index} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className={Styles.subHeading}>International</h2>
                                    <div className={Styles.gridSmallSpacing}>
                                        {postInternational.map((post, index) => (
                                            <PostSmall title={post.title} time={post.time} styles={Styles.trendingPost} key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className={Styles.bigHeader}>More fundraisers</h2>
                            <div className={Styles.latestByCategory}>
                                <div>
                                    <h2 className={Styles.subHeading}>Atrocities</h2>
                                    <div className={Styles.gridSmallSpacing}>
                                        {postAtrocities.map((post, index) => (
                                            <PostSmall title={post.title} time={post.time} styles={Styles.trendingPost} key={index} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className={Styles.subHeading}>Resistance</h2>
                                    <div className={Styles.gridSmallSpacing}>
                                        {postResistance.map((post, index) => (
                                            <PostSmall title={post.title} time={post.time} styles={Styles.trendingPost} key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


 */