import Styles from '../../styles/Register.module.css'
import {useState} from 'react'
import Link from "next/link";
import Check from "../../icons/check";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    return (
        <form className={Styles.master}>
            <h1>Log in</h1>
            <div>Don't have an account? <Link href='/register' scroll={false}><a>Sign up</a></Link></div>
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
                    <input name='remember' id='remember' type='checkbox' checked={remember} onChange={(e) => setRemember(!remember)} />
                    <label htmlFor='remember'>
                        <div><Check /></div>
                        <div>Remember me</div>
                    </label>
                </div>
                <Link href='/register' scroll={false}><a>Forgot password?</a></Link>
            </div>
            <input type='submit' value='Log in' className={`primary ${Styles.submit}`} />
        </form>
    )
}




/*


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
        </div>


 */