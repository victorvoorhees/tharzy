import Link from 'next/link'
import Styles from '../../styles/Register.module.css'
import {useState} from 'react'
import Check from "../../icons/check";

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAware, setIsAware] = useState(false)

    return (
        <form className={Styles.master}>
            <h1>Register</h1>
            <div>Already have an account? <Link href='/login' scroll={false}><a>Log in</a></Link></div>
            <div className={Styles.text}>
                <label htmlFor='username'>Username</label>
                <input name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Type username here' />
            </div>
            <div className={Styles.text}>
                <label htmlFor='email'>Email</label>
                <input name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Type email here' />
            </div>
            <div className={Styles.text}>
                <label htmlFor='password'>Password</label>
                <input name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Type password here' />
            </div>
            <div className={Styles.flex}>
                <div>
                    <input name='aware' id='aware' type='checkbox' checked={isAware} onChange={(e) => setIsAware(!isAware)} />
                    <label htmlFor='aware'>
                        <div><Check /></div>
                        <div>I'm aware of the <Link href='/about#risks'><a>risks</a></Link>.</div>
                    </label>
                </div>
            </div>
            <input type='submit' value='Create account' className={`primary ${Styles.submit}`} />
        </form>
    )
}