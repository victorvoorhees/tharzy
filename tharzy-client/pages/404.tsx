import Styles from '../styles/NotFound.module.css'
import returnQuote from "../utilities/quotes";

export default function NotFound() {
    const quote = returnQuote()
    return (
        <div className={Styles.container}>
            <h1>Page doesn't exist.</h1>
            <p className={Styles.quote}>{quote.quote}</p>
            <p className={Styles.name}>- {quote.name}</p>
        </div>
    )
}