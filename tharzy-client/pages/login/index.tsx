import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Styles from '../../styles/Register.module.css'
import {useState} from 'react'
import Link from "next/link";
import returnQuote from "../../utilities/quotes";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberUser, setRememberUser] = useState(false)

    const [quote, setQuote] = useState(returnQuote()) /* without this, the quote changes every time the user types in email/password aka every time the component refreshes */

    return (
        <div className={Styles.master}>
            <form>
                <Link href='/' scroll={false}><a className={Styles.logo}/></Link>
                <h1>Log in.</h1>
                <InputText name='email' value={email} handleChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email here'/>
                <InputText name='password' value={password} handleChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password here'/>
                <div className={Styles.flex}>
                    <InputCheckbox name='rememberUser' checked={rememberUser} handleChange={(e) => setRememberUser(e.target.checked)} label='Remember me' styles={Styles.checkbox} />
                    <Link href='/register' scroll={false}><a>Forgot password?</a></Link>
                </div>
                <input type='submit' value='Log in' className={`primary ${Styles.submit}`} />
                <div>
                    <span>Don't have an account? </span>
                    <Link href='/register' scroll={false}><a>Register</a></Link>
                </div>
            </form>
            <div>
                <div>
                    <h2 className='h1'>{quote.quote}</h2>
                    <div className='p-2'>— {quote.name}</div>
                </div>
            </div>
        </div>
    )
}