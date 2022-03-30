import Styles from '../../styles/Posts.module.css';

export default function Posts() {
    const data = [
        {
            uploadedBy: 'TheOneTrueBasedChad',
            title: `Junta forces beat and arrested a teenager in Palatwa`,
            time: '23min',
            tag: 'Atrocities',
            reps: '-158',
            comments: '9'
        },
        {
            uploadedBy: 'Mutual Aid Myanmar',
            title: `KNU offensive on Pha-an a massive success`,
            time: '47min',
            tag: 'Resistance',
            reps: '211',
            comments: '2'
        },
        {
            uploadedBy: 'Ye Htut',
            title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
            time: '3h',
            tag: 'World',
            reps: '-22',
            comments: '39'
        },
        {
            uploadedBy: 'commie lay',
            title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
            time: '15h',
            tag: 'General',
            reps: '78',
            comments: '3'
        },
    ];
    const filterOptions = ['All', 'Atrocities', 'Resistance', 'World', 'General', 'Opinion', 'Other'];
    const sortOptions = ['Title', 'Time', 'Reps', 'Comments'];
    const pageSizes = [20, 40, 80];
    const pages = [1, 2, 3];



    return (
        <>
        <div className={Styles.options}>
            <div className={Styles.filters}>
                <div className={Styles.filter}>
                    <label htmlFor='filter'>Tag</label>
                    <select name='filter' id='filter'>
                        {filterOptions.map((option, index) => <option key={index}>{option}</option>)}
                    </select>
                </div>
                <div className={Styles.filter}>
                    <label htmlFor='sort'>Sort by</label>
                    <select name='sort' id='sort'>
                        {sortOptions.map((option, index) => <option key={index}>{option}</option>)}
                    </select>
                </div>
                <div className={Styles.filter}>
                    <label htmlFor='pageSize'>Items</label>
                    <select name='pageSize' id='pageSize'>
                        {pageSizes.map((option, index) => <option key={index}>{option}</option>)}
                    </select>
                </div>
            </div>
            <div className={Styles.search}>
                <i className='fa-solid fa-lg fa-magnifying-glass'></i>
                <input type='search' name='search' placeholder='Type a keyword' />
            </div>
        </div>
        <div className={Styles.container}>
            {data.map((item, index) => (
                <div key={index} className={Styles.post}>
                    <div>
                        <div className={Styles.info}>
                            <div className={Styles.profile}>
                                <div className={Styles.circle}></div>
                                <div className={Styles.username}>{item.uploadedBy}</div>
                            </div>
                            <div className={Styles.time}>{item.time}</div>
                        </div>
                        <h2>{item.title}</h2>
                        <div className={Styles.tag}>{item.tag}</div>
                    </div>
                    <div className={Styles.interact}>
                        <div>
                            <i className={`fa-solid fa-lg fa-star`}></i>
                            <span>{item.reps}</span>
                        </div>
                        <div>
                            <i className='fa-solid fa-lg fa-comment'></i>
                            <span>{item.comments}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className={Styles.pagination}>
            {pages.map((num, index) => <div key={index} className={num === 1 ? Styles.currentPage : ''}>{num}</div>)}
        </div>
        </>
    );
}