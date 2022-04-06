import Search from '../../components/Search';
import Select from '../../components/Select';
import Post from '../../components/Post'
import Pagination from '../../components/Pagination';
import Styles from '../../styles/Events.module.css'

export default function Events() {
    const data = [
        {
            date: '8 Aug 2022',
            duration: {
                start: '10:00',
                end: '16:00'
            },
            uploadedBy: 'Michael Smith',
            time: '23min',
            tag: 'Fundraising',
            country: 'Japan',
            title: `Promotional event for Myanmar's democracy by NUG`,
            likes: '231',
            dislikes: '3',
            comments: '9',
        },
        {
            date: '8 Aug 2022',
            duration: {
                start: '10:00',
                end: '16:00'
            },
            uploadedBy: 'karen revolutionary',
            time: '47min',
            tag: 'Meetup',
            country: 'USA',
            title: `Speech: the role of communists in Myanmar's revolution`,
            likes: '158',
            dislikes: '3',
            comments: '2'
        },
        {
            date: '8 Aug 2022',
            duration: {
                start: '10:00',
                end: '16:00'
            },
            uploadedBy: 'Ye Htut',
            time: '3h',
            tag: 'Fundraising',
            country: 'Germany',
            title: 'Shan traditional arts and crafts sale',
            likes: '58',
            dislikes: '43',
            comments: '39'
        },
        {
            date: '8 Aug 2022',
            duration: {
                start: '10:00',
                end: '16:00'
            },
            uploadedBy: 'commie lay',
            time: '15h',
            tag: 'Protest',
            country: 'Australia',
            title: `Hold Woodside accountable for their cooperation with Myanmar junta`,
            likes: '98',
            dislikes: '73',
            comments: '3'
        },
    ]
    const tagOptions = ['All', 'Fundraising', 'General', 'Meetup', 'Protest']
    const countryOptions = ['All', 'Australia', 'Canada', 'Japan', 'Myanmar', 'United Kingdom', 'United States']
    const sortOptions = ['Duration', 'Engagement', 'Time', 'Title']
    const pageSizes = [20, 40, 80]
    const pages = [1, 2, 3]

    return (
        <div className={Styles.container}>
            <div className='wrapper'>
                <div className={Styles.filters}>
                    <Search />
                    <div className={Styles.options}>
                        <Select name='tag' options={tagOptions} />
                        <Select name='country' options={countryOptions} />
                        <Select label='Sort by' name='sortBy' options={sortOptions} />
                        <Select label='Items' name='pageSizes' options={pageSizes} />
                    </div>
                </div>
                <div className={Styles.posts}>
                    {data.map((item, index) => (
                        <Post
                            key={index}
                            date={item.date}
                            duration={item.duration}
                            uploadedBy={item.uploadedBy}
                            time={item.time}
                            tag={item.tag}
                            country={item.country}
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