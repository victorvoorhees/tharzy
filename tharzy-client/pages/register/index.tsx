import Link from 'next/link'
import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Styles from '../../styles/Register.module.css'
import {useState} from 'react'
import returnQuote from "../../utilities/quotes";

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAwareOfRisks, setIsAwareOfRisks] = useState(false)

    const [quote, setQuote] = useState(returnQuote()) /* without this, the quote changes every time the user types in email/password aka every time the component refreshes */

    return (
        <div className={Styles.master}>
            <form>
                <Link href='/' scroll={false}><a className={Styles.logo}/></Link>
                <h1>Register.</h1>
                <InputText name='username' value={username} handleChange={(e) => setUsername(e.target.value)} type='text' placeholder='Enter username here' />
                <InputText name='email' value={email} handleChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email here' />
                <InputText name='password' value={password} handleChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password here' />
                <div className={Styles.flex}>
                    <InputCheckbox name='awareOfRisks' checked={isAwareOfRisks} handleChange={(e) => setIsAwareOfRisks(e.target.checked)} label={<>I'm aware of the <Link href='/about#risks'><a className='underline'>risks</a></Link>.</>} styles={Styles.checkbox} />
                </div>
                <input type='submit' value='Register' className={`primary ${Styles.submit}`} />
                <div>
                    <span>Already have an account? </span>
                    <Link href='/login' scroll={false}><a>Log in</a></Link>
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