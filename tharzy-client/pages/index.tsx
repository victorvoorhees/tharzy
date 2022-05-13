import Head from 'next/head'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import PostLarge from '../components/PostLarge'
import Styles from '../styles/Home.module.css'
import { IPost, IFundraiser, IEvent } from '../utilities/types'
import {returnPosts, returnFundraisers, returnEvents, sortObject} from '../utilities/utilities'
import PostSmall from "../components/PostSmall";

export default function Home() {
    const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ante. Vivamus felis ipsum, convallis a risus non, posuere imperdiet arcu. Sed odio erat, eleifend vel accumsan vel, varius sit amet dolor. Praesent mollis feugiat nisi a eleifend. Ut lobortis dictum congue. Curabitur vitae arcu porta, semper nulla sit amet, mollis enim. Fusce posuere et odio ac dictum.\n' +
        '\n' +
        'Donec non neque eu lorem sagittis lacinia. Aliquam nisi purus, aliquet eu arcu eget, accumsan pulvinar nisl. Morbi in lobortis mauris. Duis maximus commodo nisi, ut condimentum metus bibendum nec. Cras maximus sem at condimentum interdum. Quisque sit amet neque ex. Vestibulum sollicitudin aliquam orci, non fermentum tortor iaculis eleifend. Donec augue lacus, aliquam a sapien fringilla, tincidunt fermentum turpis. Nulla a porttitor dui. Duis nec semper nulla, vitae consequat metus. Nulla iaculis bibendum tempus.'

    const [userLocation, setUserLocation] = useState('Australia')

    const [postsLatest, setPostsLatest] = useState<IPost[]>(null)
    const [fundraisersLatest, setFundraisersLatest] = useState<IFundraiser[]>(null)
    const [eventsLatest, setEventsLatest] = useState<IEvent[]>(null)

    useEffect(() => {
        setPostsLatest(sortObject(returnPosts(), 'time').slice(0, 4))
        setFundraisersLatest(sortObject(returnFundraisers(), 'time').slice(0, 4))
        setEventsLatest(sortObject(returnEvents(), 'time').slice(0, 4))
    }, [])

    return (
        <div className={Styles.container}>
            <div className={Styles.hero}>
                <div>
                    <div>
                        <h1>Contribute to Myanmar's fight for freedom.</h1>
                        <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ante. Vivamus felis ipsum, convallis a risus non, posuere imperdiet.</p>
                    </div>
                    <img src='/workers.svg' />
                </div>
            </div>

            <div className={`main ${Styles.master}`}>
                <div className={Styles.notice}>
                    <img src='pieces.svg' />
                    <div className={Styles.small}>
                        <h2>Log in or sign up with an email to start posting.</h2>
                        <button className='outline'>Log in</button>
                        <button className='primary'>Sign up</button>
                    </div>
                </div>
                <div className={Styles.content}>
                    <h2 className='h1'>Latest posts.</h2>
                    <div>
                        {postsLatest && postsLatest.map((post, index) => (
                            <PostLarge category={post.category} title={post.title} body={body} time={post.time} likes={post.likes} dislikes={post.dislikes} comments={post.comments} styles={Styles.postLarge} />
                        ))}
                    </div>
                </div>
                <div className={Styles.content}>
                    <h2 className='h1'>Latest fundraisers.</h2>
                    <div>
                        {fundraisersLatest && postsLatest.map((post, index) => (
                            <PostLarge category={post.category} title={post.title} body={body} time={post.time} likes={post.likes} dislikes={post.dislikes} comments={post.comments} styles={Styles.postLarge} />
                        ))}
                    </div>
                </div>
                <div className={Styles.content}>
                    <h2 className='h1'>Latest events in Australia.</h2>
                    <div>
                        {eventsLatest && postsLatest.map((post, index) => (
                            <PostLarge category={post.category} title={post.title} body={body} time={post.time} likes={post.likes} dislikes={post.dislikes} comments={post.comments} styles={Styles.postLarge} />
                        ))}
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