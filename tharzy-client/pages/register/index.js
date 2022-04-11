import Link from 'next/link'
import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Styles from '../../styles/Register.module.css'

export default function Register() {
    return (
        <form className={Styles.wrapper}>
            <h1 className={Styles.title}>Create an account</h1>
            <InputText name='username' className={Styles.input} />
            <InputText name='email' className={Styles.input} />
            <InputText type='password' name='password' className={Styles.input} />
            <InputCheckbox label={<>I'm aware of the <Link href='/about#risks'><a className='styled'>risks</a></Link>.</>} />
            <input type='submit' value='Register' className={`btn md main ${Styles.submit}`} />
        </form>
    )
}