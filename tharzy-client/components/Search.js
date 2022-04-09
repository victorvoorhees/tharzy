import Styles from '../styles/Search.module.css';

export default function Search() {
    return (
        <div className={Styles.wrapper}>
            <input type='text' name='search' placeholder='Type a keyword' />
            <i className='fa-solid fa-magnifying-glass'></i>
        </div>
    );
}