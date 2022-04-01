import { useState } from 'react';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Styles from '../../styles/Posts.module.css';

export default function Posts() {
    const data = [
        {
            uploadedBy: 'South China Morning Post',
            title: `Junta forces beat and arrested a teenager in Palatwa`,
            time: '23min',
            tag: 'Atrocities',
            reps: '-158',
            comments: '9',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.'
        },
        {
            uploadedBy: 'Mutual Aid Myanmar',
            title: `KNU offensive on Pha-an a massive success`,
            time: '47min',
            tag: 'Resistance',
            reps: '211',
            comments: '2',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.'
        },
        {
            uploadedBy: 'Ye Htut',
            title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
            time: '3h',
            tag: 'World',
            reps: '-22',
            comments: '39',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.'
        },
        {
            uploadedBy: 'commie lay',
            title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
            time: '15h',
            tag: 'General',
            reps: '78',
            comments: '3',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.'
        },
    ];
    const tagOptions = ['All', 'Atrocities', 'Resistance', 'World', 'General', 'Opinion', 'Other'];
    const sortOptions = ['Title', 'Time', 'Reps', 'Comments'];
    const pageSizes = [20, 40, 80];
    const pages = [1, 2, 3];

    const [ popUpVisible, setPopUpVisible ] = useState(true);

    
    if (popUpVisible) setTimeout(() => setPopUpVisible(false), 3000)
    
    


    return (
        <>
        <div className={Styles.filters}>
            <div className={Styles.search}>
                <Search />
            </div>
            <div className={Styles.options}>
                <Select name='tag' options={tagOptions} />
                <Select label='Sort by' name='sortBy' options={sortOptions} />
                <Select label='Items' name='pageSizes' options={pageSizes} />
            </div>
        </div>
        {popUpVisible && (
            <div className={Styles.found}>
                <div className={Styles.iconWrapper}><i className={`fa-solid fa-lg fa-circle-check`}></i></div>
                <div>Found {data.length} posts that match the criteria.</div>
            </div>
        )}
        <div className={Styles.container}>
            {data.map((item, index) => (
                <div key={index} className={Styles.post}>
                    <div className={Styles.info}>
                        <div className={Styles.profile}>
                            <div className={Styles.circle}></div>
                            <div className={Styles.username}>{item.uploadedBy}</div>
                        </div>
                        <div className={Styles.time}>{item.time}</div>
                    </div>
                    <div className={Styles.tag}>{item.tag}</div>
                    <h2>{item.title}</h2>
                    <p>{item.short}</p>
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