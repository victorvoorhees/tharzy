import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Styles from '../../styles/Login.module.css'

export default function Login() {
    return (
        <div className='wrapper'>
            <form className={Styles.container}>
                <h1 className={Styles.title}>Log in to Tharzy</h1>
                <InputText name='email' className={Styles.input} />
                <InputText type='password' name='password' />
                <input type='submit' value='Log in' className={Styles.submit} />
            </form>
        </div>
    )
}