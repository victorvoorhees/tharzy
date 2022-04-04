import Styles from '../styles/NotFound.module.css'

export default function NotFound() {
    const quotes = [
        {
            quote: `"One cannot live in society and be free from society."`,
            name: 'Vladimir Lenin'
        },
        {
            quote: `"You should never let your fears prevent you from doing what you know is right."`,
            name: 'Aung San Suu Kyi'
        },
        {
            quote: `"The only real prison is fear, and the only freedom is freedom from fear."`,
            name: 'Aung San Suu Kyi'
        },
        {
            quote: `"If you're feeling helpless, help someone."`,
            name: 'Aung San Suu Kyi'
        },
        {
            quote: `"Let me say, at the risk of seeming ridiculous, that the true revolutionary is guided by great feelings of love."`,
            name: 'Che Guevara'
        },
        {
            quote: `"The first duty of a revolutionary is to be educated."`,
            name: 'Che Guevara'
        },
        {
            quote: `"If you tremble with indignation at every injustice then you are a comrade of mine."`,
            name: 'Che Guevara'
        },
        {
            quote: `"We cannot be sure of having something to live for unless we are willing to die for it."`,
            name: 'Che Guevara'
        },
        {
            quote: `"Above all, always be capable of feeling deeply any injustice committed against anyone, anywhere in the world."`,
            name: 'Che Guevara'
        },
        {
            quote: `"The revolution is not an apple that falls when ripe. You have to make it fall."`,
            name: 'Che Guevara'
        },
        {
            quote: `"We cannot be sure of having something to live for unless we are willing to die for it."`,
            name: 'Che Guevara'
        },
        {
            quote: `"We have no right to believe that freedom can be won without struggle"`,
            name: 'Che Guevara'
        },
        {
            quote: `"To reap a return in ten years, plant trees. To reap a return in 100, cultivate the people."`,
            name: 'Ho Chi Minh'
        },
        {
            quote: `"The people, and the people alone, are the motive force in the making of world history."`,
            name: 'Mao Zedong'
        },
        {
            quote: `"War can only be abolished through war, and in order to get rid of the gun it is necessary to take up the gun."`,
            name: 'Mao Zedong'
        },
        {
            quote: `"To reap a return in ten years, plant trees. To reap a return in 100, cultivate the people."`,
            name: 'Ho Chi Minh'
        },
    ]

    const n = Math.floor(Math.random() * (quotes.length - 1))

    return (
        <div className={Styles.wrapper}>
            <h1>Page doesn't exist (yet).</h1>
            <p className={Styles.quote}>{quotes[n].quote}</p>
            <p className={Styles.name}>- {quotes[n].name}</p>
        </div>
    )
}