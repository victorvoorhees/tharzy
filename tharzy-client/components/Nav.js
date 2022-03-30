import Styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <header className={Styles.header}>
            <nav>
                <img src='tharzy-logo.svg'/>
                <div className={Styles.links}>
                    <div>About</div>
                    <div>Posts</div>
                    <div>Fundraisers</div>
                    <div>Events</div>
                    <div>Encyclopedia</div>
                </div>
                <div className={Styles.user}>
                    <div>Log in</div>
                    <div className={Styles.register}>Register</div>
                </div>
            </nav>
        </header>
    )
}