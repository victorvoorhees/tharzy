import Search from '../../components/Search'
import Select from '../../components/Select'
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';
import Styles from '../../styles/Fundraisers.module.css'

export default function Fundraisers() {
    const data = [
        {
            uploadedBy: 'CDM Myanmar',
            time: '23min',
            tag: 'Humanitarian',
            title: `Kachin refugees in Yunnan needs immediate assistance`,
            deadline: '1 day left',
            likes: '58',
            dislikes: '43',
            comments: '39'
        },
        {
            uploadedBy: 'Mutual Aid Myanmar',
            time: '47min',
            tag: 'Humanitarian',
            title: `Help for Karen refugees in UN camps`,
            deadline: '23 days left',
            likes: '58',
            dislikes: '43',
            comments: '39'
        },
        {
            uploadedBy: 'Aung Htoo Win',
            time: '3h',
            tag: 'General',
            title: 'Help a Zomi asylum seeker in United States go to college',
            deadline: '44 days left',
            likes: '58',
            dislikes: '43',
            comments: '39'
        },
        {
            uploadedBy: 'basedrevolutionary',
            time: '15h',
            tag: 'Resistance',
            title: `Contribute to the revolutionary efforts of the people's liberation army`,
            deadline: 'Ongoing',
            likes: '58',
            dislikes: '43',
            comments: '39'
        }
    ]
    const tagOptions = ['All', 'Humanitarian', 'General', 'Resistance']
    const sortOptions = ['Deadline', 'Engagement', 'Time', 'Title']
    const pageSizes = [20, 40, 80]
    const pages = [1, 2, 3]

    return (
        <div className={Styles.container}>
            <div className='wrapper'>
                <div className={Styles.filters}>
                    <Search />
                    <div className={Styles.options}>
                        <Select name='category' options={tagOptions} />
                        <Select label='sort by' name='sortBy' options={sortOptions} />
                        <Select label='items' name='pageSizes' options={pageSizes} />
                    </div>
                </div>
                <div className={Styles.found}>Found {data.length} items matching the criteria.</div>
                <div className={Styles.posts}>
                    {data.map((item, index) => (
                        <Post
                            key={index}
                            uploadedBy={item.uploadedBy}
                            time={item.time}
                            tag={item.tag}
                            title={item.title}
                            deadline={item.deadline}
                            likes={item.likes}
                            dislikes={item.dislikes}
                            comments={item.comments}
                        />
                    ))}
                </div>
                <div className={Styles.pg}>
                    <Pagination array={pages} />
                </div>
            </div>
        </div>
    )
}