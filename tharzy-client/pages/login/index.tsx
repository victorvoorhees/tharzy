import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Styles from '../../styles/Register.module.css'
import {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberUser, setRememberUser] = useState(false)

    return (
        <form className={Styles.master}>
            <h1 className={Styles.title}>Log in to tharzy</h1>
            <InputText name='email' value={email} handleChange={(e) => setEmail(e.target.value)} placeholder='Enter email here' styles={Styles.input} />
            <InputText name='password' value={password} handleChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password here' styles={Styles.input} />
            <InputCheckbox name='rememberUser' checked={rememberUser} handleChange={(e) => setRememberUser(e.target.checked)} label='Remember me on this device' styles={Styles.checkbox} />
            <input type='submit' value='Log in' className={`btn main md ${Styles.submit}`} />
        </form>
    )
}