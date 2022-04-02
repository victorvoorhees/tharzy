import Post from '../../components/Post'
import Search from '../../components/Search'
import Select from '../../components/Select'

import Styles from '../../styles/Posts.module.css'

export default function Posts() {
    const data = [
        {
            uploadedBy: 'South China Morning Post',
            time: '23min',
            tag: 'Atrocities',
            title: `Junta forces beat and arrested a teenager in Palatwa`,
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.',
            likes: '231',
            dislikes: '3',
            comments: '9',
        },
        {
            uploadedBy: 'Mutual Aid Myanmar',
            time: '47min',
            tag: 'Resistance',
            title: `KNU offensive on Pha-an a massive success`,
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.',
            likes: '158',
            dislikes: '3',
            comments: '2'
        },
        {
            uploadedBy: 'Ye Htut',
            time: '3h',
            tag: 'International',
            title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.',
            likes: '58',
            dislikes: '43',
            comments: '39'
        },
        {
            uploadedBy: 'commie lay',
            time: '15h',
            tag: 'General',
            title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum ipsum quis est maximus mollis. Fusce finibus velit id mollis varius. Duis sagittis dui non odio eleifend pharetra. Mauris vel condimentum ante. Sed fringilla massa pharetra, efficitur erat volutpat, volutpat nisl. Proin molestie, odio eu auctor eleifend, nibh dolor vestibulum velit, tempus posuere nunc nulla non felis.',
            likes: '98',
            dislikes: '73',
            comments: '3'
        },
    ]
    const tagOptions = ['All', 'Atrocities', 'Resistance', 'International', 'General', 'Opinion', 'Other']
    const sortOptions = ['Title', 'Time', 'Engagement']
    const pageSizes = [20, 40, 80]
    const pages = [1, 2, 3]

    return (
        <>
            <div className={Styles.filters}>
                <Search />
                <div className={Styles.options}>
                    <Select name='tag' options={tagOptions} />
                    <Select label='Sort by' name='sortBy' options={sortOptions} />
                    <Select label='Items' name='pageSizes' options={pageSizes} />
                </div>
            </div>
            <div>
                {data.map((item, index) => (
                    <Post
                        key={index}
                        uploadedBy={item.uploadedBy}
                        time={item.time}
                        tag={item.tag}
                        title={item.title}
                        short={item.short}
                        likes={item.likes}
                        dislikes={item.dislikes}
                        comments={item.comments}
                    />
                ))}
            </div>
            <div className={Styles.pagination}>
                {pages.map((num, index) => <div key={index} className={num === 1 ? Styles.currentPage : ''}>{num}</div>)}
            </div>
        </>
    )
}