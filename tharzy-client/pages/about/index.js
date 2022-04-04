import Styles from '../../styles/About.module.css'

export default function About() {
    return (
        <div>
            <div className={Styles.content}>
                <h2>What is this app?</h2>
                <p>Tharzy is an app where you can look for, and post if you want, news, fundraisers, and events about the current conflict in Myanmar.</p>
            </div>
            <div className={Styles.content}>
                <h2>Can I trust what's posted on this app?</h2>
                <p>It's entirely possible for someone to post information that's not factually correct on this app so it can't be guaranteed that every single post, fundraiser, and event will be legitimate or truthful.</p>
                <p>However, users can report any content for various reasons, including containing false information. On every post, the number of times it has been reported will be visible. If enough users report, a moderator will review the content and if they found that the reason behind the reports are not illegitimate (illegitimate refers to trolling, bots submitting the reports, etc), then the content will be removed. Removed contents cannot be retrieved later so please be responsible with your reports!</p>
                <p>The moderators are committed to ensuring that information posted on this app is legitimate and truthful and that every user has a vote in combating false information. We can't promise that everything here will be the truth but we can promise that we'll try our best to combat misinformation as best as we can.</p>
            </div>
            <div className={Styles.content}>
                <h2>What are the political affiliations of moderators?</h2>
                <p>It's entirely possible for someone to post information that's not factually correct on this app so it can't be guaranteed that every single post, fundraiser, and event will be legitimate or truthful.</p>
            </div>
        </div>
    )
}