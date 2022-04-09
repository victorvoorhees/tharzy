import Styles from '../styles/InputCheckbox.module.css'

export default function InputCheckbox({ label, name, className }) {
    function handleSelect(e) {
        console.log(e.target.checked)
    }

    return (
        <div className={className}>
            <div className={Styles.wrapper}>
                <div className={Styles.input}>
                    <input type='checkbox' name={name} id={name} onChange={handleSelect} />
                    <div className='box'></div>
                </div>
                <label htmlFor={name}>{label || name}</label>
            </div>
        </div>
    )
}