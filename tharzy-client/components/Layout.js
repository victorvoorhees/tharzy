import Styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
        <div className={Styles.wrapper}>
            {children}
        </div>
        </>
    )
}