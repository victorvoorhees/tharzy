interface IPost {
    uploadedBy: string,
    time: number,
    category: string,
    title: string,
    body: string,
    engagement: number,
    likes: number,
    dislikes: number,
    comments: number
}

interface IFundraiser {
    deadline: number,
    uploadedBy: string,
    time: number,
    category: string,
    title: string,
    body: string,
    engagement: number,
    likes: number,
    dislikes: number,
    comments: number
}

interface IEvent {
    from: number,
    to: number,
    country: string,
    uploadedBy: string,
    time: number,
    category: string,
    title: string,
    body: string,
    engagement: number,
    likes: number,
    dislikes: number,
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

export type { IPost, IFundraiser, IEvent, IComment }