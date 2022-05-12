import Link from 'next/link'
import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Styles from '../../styles/Register.module.css'
import {useState} from 'react'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAwareOfRisks, setIsAwareOfRisks] = useState(false)

    return (
        <form className={Styles.master}>
            <h1 className={Styles.title}>Create an account</h1>
            <InputText name='username' value={username} handleChange={(e) => setUsername(e.target.value)} styles={Styles.input} placeholder='Enter username here' />
            <InputText name='email' value={email} handleChange={(e) => setEmail(e.target.value)} styles={Styles.input} placeholder='Enter email here' />
            <InputText name='password' type='password' value={password} handleChange={(e) => setPassword(e.target.value)} styles={Styles.input} placeholder='Enter password here' />
            <InputCheckbox name='awareOfRisks' checked={isAwareOfRisks} handleChange={(e) => setIsAwareOfRisks(e.target.checked)} label={<>I'm aware of the <Link href='/about#risks'><a className='styled'>risks</a></Link>.</>} styles={Styles.checkbox} />
            <input type='submit' value='Register' className={Styles.submit} />
        </form>
    )
}