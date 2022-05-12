import Styles from '../../styles/About.module.css'

export default function About() {
    return (
        <div className={Styles.master}>
            <div className={Styles.sections}>
                <div className={Styles.content}>
                    <h2>What can I do here?</h2>
                    <p id='intro'>tharzy is a web application where users can view or post news, fundraisers, and events around the world, regarding the current situation in Myanmar.<br/><br/>There's also an encyclopedia provides information on events, organizations, and individuals related to the situation or the country.<br/><br/>Users can interact via giving likes, dislikes, and writing comments. Content found to be inappropriate can also be reported for removal.</p>
                </div>
                <div className={Styles.content}>
                    <h2 id='purpose'>What problem does tharzy solve?</h2>
                    <p>What tharzy tries to do is also possible via searching by keyword on Twitter, Facebook, or GoFundMe, but what makes tharzy different is that it acts as a site dedicated to and only to the situation in Myanmar.<br/><br/>In other words, tharzy is a single, centralized platform, with the purpose of removing the gap between those who needs help but don't know who to ask and those who wants to help but don't know where to go.</p>
                </div>
                <div className={Styles.content}>
                    <h2>How and what to report</h2>
                    <p>tharzy is all about helping the people of Myanmar, and one must understand that to help the people of Myanmar is to not only offer them, or contribute to offering them humanitarian assistance, but also to support their resistance against Tatmadaw.<br/><br/></p>
                    <div className={Styles.list}>
                        <div>1</div>
                        <p>Content that opposes the democratic will of the people of Myanmar and their resistance against Tatmadaw.<br/><br/>Examples include supporting Tatmadaw or agreeing with their actions, cheering or making fun of the troubles of civilians and resistance forces, justifying the Rohingya genocide, supporting specific actions by other countries that benefit Tatmadaw (such as supporting Russia's decision to supply arms to Tatmadaw), and so on.</p>
                    </div>
                    <div className={Styles.list}>
                        <div>2</div>
                        <p>Content that is extremely disrespectful towards one's race, ethnicity, skin color, gender and sexual orientation, social class, and nationality.<br/><br/>Examples include labelling the Rohingyas as "illegal immigrants", wishing death and suffering on the civilians of Russia, China, USA, etc for the actions of their governments, and so on.</p>
                    </div>
                    <div className={Styles.list}>
                        <div>3</div>
                        <p>Content containing data that has already proven to be false.</p>
                    </div>
                    <div className={Styles.list}>
                        <div>4</div>
                        <p>Content unrelated to the situation in Myanmar.</p>
                    </div>
                </div>
                <div className={Styles.content}>
                    <h2>Your data, safety, and risks</h2>
                    <p>On the 1st of February last year, the Burmese military staged a coup against the democratically elected civilian government by detaining several members of it and effectively transferring the state power to themselves.</p>
                </div>
                <div className={Styles.content}>
                    <h2>Contact the developer</h2>
                    <p>Tatmadaw is notorious for their disregard for human life and as the developer, I have to keep my identity secret for my safety. If you want to contact me, you can send me a message on any of the social media platforms that I'm active on.</p>
                    <a className={Styles.social} href='https://twitter.com/comradekeyboard' target='_blank'>
                        <i className='fa-brands fa-twitter' />
                        <div>@comradekeyboard</div>
                    </a>
                    <a className={Styles.social} href='https://twitter.com/comradekeyboard' target='_blank'>
                        <i className='fa-brands fa-facebook-f' />
                        <div>ရဲဘော်ကီးဘုတ်</div>
                    </a>
                </div>
            </div>
        </div>
    )
}