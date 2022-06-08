import Styles from '../../styles/About.module.css'

export default function About() {
    return (
        <div className={Styles.master}>
            <div className={Styles.content}>
                <h2 className='h1'>What can I do here?</h2>
                <div className='p1' id='intro'>
                    <p>Tharzy is a web application where users can view or post news, fundraisers, and events around the world, regarding the current situation in Myanmar.</p>
                    <p>There's also an encyclopedia provides information on events, organizations, and individuals related to the situation or the country.</p>
                    <p>Users can interact via giving likes, dislikes, and writing comments. Content found to be inappropriate can also be reported for removal.</p>
                </div>
            </div>
            <div className={Styles.content}>
                <h2 className='h1' id='purpose'>What problem does tharzy solve?</h2>
                <div className='p1'>
                    <p>What tharzy tries to do is also possible via searching by keyword on Twitter, Facebook, or GoFundMe, but what makes tharzy different is that it acts as a site dedicated to and only to the situation in Myanmar.</p>
                    <p>In other words, tharzy is a single, centralized platform, with the purpose of removing the gap between those who needs help but don't know who to ask and those who wants to help but don't know where to go.</p>
                </div>
            </div>
            <div className={Styles.content}>
                <h2 className='h1'>How and what to report</h2>
                <div className='p1'>
                    <p>tharzy is all about helping the people of Myanmar, and one must understand that to help the people of Myanmar is to not only offer them, or contribute to offering them humanitarian assistance, but also to support their resistance against Tatmadaw.</p>
                    <div className={Styles.list}>
                        <div>1</div>
                        <p>Content that calls for the use of violence on a specific user.</p>
                    </div>
                    <div className={Styles.list}>
                        <div>2</div>
                        <p>Content containing data that has already proven to be false.</p>
                    </div>
                    <div className={Styles.list}>
                        <div>3</div>
                        <p>Content unrelated to the situation in Myanmar.</p>
                    </div>
                </div>
            </div>
            <div className={Styles.content}>
                <h2 className='h1'>Your data, safety, and risks</h2>
                <p className='p1'>On the 1st of February last year, the Burmese military staged a coup against the democratically elected civilian government by detaining several members of it and effectively transferring the state power to themselves.</p>
            </div>
            <div className={Styles.content}>
                <h2 className='h1'>Contact the developer</h2>
                <div className='p1'>
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