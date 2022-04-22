import Styles from '../../styles/About.module.css'
import Link from 'next/link';

export default function About() {
    return (
        <div>
            <div className={Styles.nav}>
                <Link href='/about' scroll={false}><a>Overview</a></Link>
                <Link href='/about/timeline' scroll={false}><a>Timeline</a></Link>
                <Link href='/about/faq' scroll={false}><a>FAQ</a></Link>
            </div>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.caption}>NOTE FROM THE DEVELOPER</div>
                    <h1>"I'd like the world to know what's going on in Myanmar."</h1>
                    <p>On the 1st of February last year, the Burmese military staged a coup against the democratically elected civilian government by detaining several members of it and effectively transferring the state power to themselves.</p>
                    <p>The people then marched on the streets across the country to express their anger towards the unjustified power grab. The military chose to respond by cracking the skulls of countless innocent protestors with sniper bullets.</p>
                    <p>This is the crucial moment - the people realized that not only it's foolish to expect the Burmese military to be act fair and just via peaceful means, but also that our ethnic minority brothers and sisters, who have chosen since many years ago to engage in an armed struggle against the Burmese military are, in fact, not merely rebels, as Tatmadaw wanted us to believe, but brave heroes who just want to be free, like us.</p>
                    <p>There are things that you can do to help us - joining the armed groups, volunteering to help refugees, providing funds, or simply spreading awareness.</p>
                    <p>And the purpose of this app is to make it easier for people around the world to do just that.</p>
                </div>
            </div>
        </div>
    )
}