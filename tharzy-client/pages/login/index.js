import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Styles from '../../styles/Login.module.css'
import Link from 'next/link';

export default function Login() {
    return (
        <form className={Styles.wrapper}>
            <h1 className={Styles.title}>Log in to Tharzy</h1>
            <InputText name='email' className={Styles.input} />
            <InputText type='password' name='password' className={Styles.input} />
            <InputCheckbox label='Remember me on this device' />
            <input type='submit' value='Log in' className={`btn main md ${Styles.submit}`} />
        </form>
    )
}