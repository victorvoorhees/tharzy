import Search from '../../components/Search'
import Select from '../../components/Select'
import Post from '../../components/Post'
import Pagination from '../../components/Pagination';
import Styles from '../../styles/Posts.module.css'

export default function Posts() {
    const data = [
        {
            uploadedBy: 'Michael Smith',
            time: '23min',
            tag: 'Atrocities',
            title: `Junta forces violently arrested an innocent teenager in Palatwa`,
            likes: '231',
            dislikes: '3',
            comments: '9',
        },
        {
            uploadedBy: 'karen revolutionary',
            time: '47min',
            tag: 'Resistance',
            title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
            likes: '158',
            dislikes: '3',
            comments: '2'
        },
        {
            uploadedBy: 'Ye Htut',
            time: '3h',
            tag: 'International',
            title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
            likes: '58',
            dislikes: '43',
            comments: '39'
        },
        {
            uploadedBy: 'commie lay',
            time: '15h',
            tag: 'General',
            title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
            likes: '98',
            dislikes: '73',
            comments: '3'
        },
    ]
    const tagOptions = ['All categories', 'Atrocities', 'Resistance', 'International', 'General', 'Opinion', 'Other']
    const sortOptions = ['Title', 'Time', 'Engagement']
    const pageSizes = [20, 40, 80]
    const pages = [1, 2, 3]

    return (
        <div className={Styles.container}>
            <div className='wrapper'>
                <div className={Styles.filters}>
                    <Search />
                    <div className={Styles.options}>
                        <Select name='tag' options={tagOptions} />
                        <Select name='sortBy' options={sortOptions} />
                        <Select name='pageSizes' options={pageSizes} />
                    </div>
                </div>
                <div className={Styles.posts}>
                    {data.map((item, index) => (
                        <Post
                            key={index}
                            uploadedBy={item.uploadedBy}
                            time={item.time}
                            tag={item.tag}
                            title={item.title}
                            likes={item.likes}
                            dislikes={item.dislikes}
                            comments={item.comments}
                        />
                    ))}
                </div>
                <Pagination array={pages} />
            </div>
        </div>
    )
}