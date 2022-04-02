import Card from '../../components/Card';
import Search from '../../components/Search'
import Select from '../../components/Select'

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
            tag: 'Resistance',
            title: 'Zomi expat community in Argentina raising funds for Burmese refugees',
            deadline: '44 days left',
            likes: '58',
            dislikes: '43',
            comments: '39'
        },
        {
            uploadedBy: 'basedrevolutionary',
            time: '15h',
            tag: 'General',
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
        <>
            <div className={Styles.filters}>
                <Search />
                <div className={Styles.options}>
                    <Select name='tag' options={tagOptions} />
                    <Select label='Sort by' name='sortBy' options={sortOptions} />
                    <Select label='Items' name='pageSizes' options={pageSizes} />
                </div>
            </div>
            <div className={Styles.contentGrid}>
                {data.map((item, index) => (
                    <Card
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
            <div className={Styles.pagination}>
                {pages.map((num, index) => <div key={index} className={num === 1 ? Styles.currentPage : ''}>{num}</div>)}
            </div>
        </>
    )
}