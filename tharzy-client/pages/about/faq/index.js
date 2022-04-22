import Styles from '../../../styles/Faq.module.css'

export default function Faq() {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <h2>Can I trust what's posted here?</h2>
                <p>It's entirely possible for someone to post information that's not factually correct on this app so it can't be guaranteed that every single post, fundraiser, and event will be legitimate or truthful.</p>
                <p>However, users can report any content for various reasons, including containing false information. On every post, the number of times it has been reported will be visible. If enough users report, the developer or a moderator will review the content and if they found that the reason behind the reports are not illegitimate (illegitimate refers to trolling, bots submitting the reports, etc), then the content will be removed. Removed contents cannot be retrieved later.</p>
            </div>
            <div className={Styles.content}>
                <h2>What's the developer's view on the coup?</h2>
                <p>The coup, which Tatmadaw (the Burmese military junta) tried to justify by using the alleged "election fraud" as an excuse, is in fact a power grab by Tatmadaw who viewed National League for Democracy, the political party that won the last election and the one before that in landslides, who also tried to reduce Tatmadaw's political power, as an existential threat.</p>
                <p>The developer is also sympathetic to the various ethnic minority groups of Myanmar, whose homelands have been under siege for decades by Tatmadaw, and aren't, in most cases, supportive of the decision made by NLD to tolerate and share political power with Tatmadaw since the introdution of democratic reforms.</p>
                <p>The developer believes that the ethnic minority groups have every right to determine their own destinies, whether that leads to secession and subsequent independence, or remaining as part of the (current or future) union of Myanmar.</p>
            </div>
            <div className={Styles.content} id='risks'>
                <h2>Are there any risks to using this app?</h2>
                <p>It's entirely possible for someone to post information that's not factually correct on this app so it can't be guaranteed that every single post, fundraiser, and event will be legitimate or truthful.</p>
            </div>
        </div>
    )
}