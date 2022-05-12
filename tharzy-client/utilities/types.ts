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

type EventCategory = 'all' | 'protest' | 'fundraising' | 'meetup' | 'other'
interface IEvent {
    date: number,
    duration: string,
    uploadedBy: string,
    time: number,
    category: EventCategory,
    country: string,
    title: string,
    engagement: number,
    likes: number,
    dislikes: number,
    comments: number
}

export type { PostCategory, IPost, FundraiserCategory, IFundraiser, EventCategory, IEvent }