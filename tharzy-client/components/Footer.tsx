import Styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <p>Tharzy is made by <span><a href='https://twitter.com/comradekeyboard' target='_blank' className='underline'>this guy</a></span>.</p>
        </footer>
    )
}