import Styles from '../styles/Search.module.css';

export default function Search() {
    return (
        <div className={Styles.wrapper}>
            <i className='fa-solid fa-magnifying-glass'></i>
            <input type='text' name='search' placeholder='Type a keyword' />
        </div>
    );
}