const postCategoryArray = ['atrocities', 'international', 'opinion', 'other', 'resistance']
type PostCategory = 'all' | 'atrocities' | 'resistance' | 'international' | 'opinion' | 'other'
interface IPost {
    uploadedBy: string,
    time: number,
    category: PostCategory,
    title: string,
    engagement: number,
    likes: number,
    dislikes: number,
    comments: number
}

const fundraiserCategoryArray = ['humanitarian', 'other', 'resistance']
type FundraiserCategory = 'all' | 'humanitarian' | 'resistance' | 'other'
interface IFundraiser {
    uploadedBy: string,
    time: number,
    category: FundraiserCategory,
    title: string,
    deadline: number,
    engagement: number,
    likes: number,
    dislikes: number,
    comments: number
}

const eventCategoryArray = ['fundraising', 'meetup', 'other', 'protest']
type EventCategory = 'all' | 'protest' | 'fundraising' | 'meetup' | 'other'
interface IEvent {
    from: number,
    to: number,
    uploadedBy: string,
    time: number,
    category: EventCategory,
    location: {
        address: string,
        country: string
    }
    title: string,
    engagement: number,
    like: {
        count: number,
        pressed: boolean
    },
    dislike: {
        count: number,
        pressed: boolean
    },
    comments: number
}

interface IComment {
    id: number,
    user: string,
    body: string,
    time: string,
    replyTo?: number,
    like: {
        count: number,
        pressed: boolean
    },
    dislike: {
        count: number,
        pressed: boolean
    }
}

export type { PostCategory, IPost, FundraiserCategory, IFundraiser, EventCategory, IEvent, IComment }
export { postCategoryArray, fundraiserCategoryArray, eventCategoryArray }