import returnCountries from "./countries";

function generate(a: string[]) {
    let n = Math.floor(Math.random() * a.length)
    return a[n]
}


function returnBody() {
    return ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae velit ante. Vivamus felis ipsum, convallis a risus non, posuere imperdiet arcu. Sed odio erat, eleifend vel accumsan vel, varius sit amet dolor. Praesent mollis feugiat nisi a eleifend. Ut lobortis dictum congue. Curabitur vitae arcu porta, semper nulla sit amet, mollis enim. Fusce posuere et odio ac dictum.\n' +
        '\n' +
        'Donec non neque eu lorem sagittis lacinia. Aliquam nisi purus, aliquet eu arcu eget, accumsan pulvinar nisl. Morbi in lobortis mauris. Duis maximus commodo nisi, ut condimentum metus bibendum nec. Cras maximus sem at condimentum interdum. Quisque sit amet neque ex. Vestibulum sollicitudin aliquam orci, non fermentum tortor iaculis eleifend. Donec augue lacus, aliquam a sapien fringilla, tincidunt fermentum turpis. Nulla a porttitor dui. Duis nec semper nulla, vitae consequat metus. Nulla iaculis bibendum tempus.')
}

function returnComments() {
    return ([
        {
            id: 1,
            user: 'martin22',
            body: 'Another year, another Mickey Mouse league table from the Guardian.\n' +
                'Would say that one benefit could be to add pressure to the established Russell Groups to improve teaching, but when all the other league tables still have them comfortably ahead, and when a survey on teaching is highly subjective anyway (can expect Russell Group students to be more demanding on standards), the whole publication seems unable to escape from being a joke.',
            time: '21h',
            like: {
                count: 7,
                pressed: false
            },
            dislike: {
                count: 3,
                pressed: false
            },
        },
        {
            id: 2,
            user: 'mad-a-loe',
            body: 'What about all those pictures of pretty girls in safety glasses and lab coats staring wistfully at empty test tubes?',
            time: '20h',
            replyTo: 1,
            like: {
                count: 7,
                pressed: false
            },
            dislike: {
                count: 3,
                pressed: false
            },
        },
        {
            id: 3,
            user: 'basedcommie',
            body: 'So I take it that you think Oxford and Cambridge, who at at the top of this table and did well in the TEF have been \'dumming\' everything down\'?\n' +
                'According to your logic, all the so called elite Russell Group should be languishing in the bottom half of the table, which is patently not the case.',
            time: '18h',
            like: {
                count: 7,
                pressed: false
            },
            dislike: {
                count: 3,
                pressed: false
            },
        },
        {
            id: 4,
            user: 'taw_thar_lay',
            body: 'It\'s probably easy to pick apart the whole methodology, but hardly worth it. Just for two - how can Oxford and Cambridge be scored well below others for staff student ration when the whole core approach of their teaching is the extremely student intensive tutorial method that no other university can even remotely come close to. And second, if we\'re to promote disadvantaged candidates getting into better institutions through lower grades, why are grades still in there?',
            time: '15h',
            like: {
                count: 7,
                pressed: false
            },
            dislike: {
                count: 3,
                pressed: false
            },
        },
        {
            id: 5,
            user: 'junglewarrior',
            body: 'min a may ko loe nay no lar ngar loe ma thar lay',
            time: '12h',
            replyTo: 2,
            like: {
                count: 7,
                pressed: false
            },
            dislike: {
                count: 3,
                pressed: false
            },
        },
    ])
}





function returnPostCategories() {
    interface ICategories {
        category: string,
        count: number
    }

    let o: ICategories[] = []
    returnPostCategoriesArray().forEach(i => {
        o.push({
            category: i,
            count: Math.ceil(Math.random() * 50)
        })
    })
    return o
}

function returnPostCategoriesArray() {
    return ['atrocities', 'china', 'economy', 'international', 'opinion', 'other', 'resistance', 'russia']
}

function returnPosts(n) {
    let a = []
    for (let i = 0; i < n; i++) {
        let l = Math.ceil(Math.random() * 99)
        let d = Math.ceil(Math.random() * 99)
        let c = Math.ceil(Math.random() * 99)
        let p = Math.ceil(Math.random() * 99)
        let b = Math.ceil(Math.random() * 99)

        a.push({
            uploadedBy: Math.random().toString(36).slice(2, 7),
            time: new Date(2022, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28)).getTime(),
            category: generate(returnPostCategoriesArray()),
            title: returnBody().slice(p, p + 100),
            body: returnBody().slice(b, b + 200),
            engagement: l + d + c,
            like: l,
            dislike: d,
            comments: c,
        })
    }
    return a
}






function returnFundraiserCategories() {
    let o = []
    returnFundraiserCategoriesArray().forEach(i => {
        o.push({
            category: i,
            count: Math.ceil(Math.random() * 50)
        })
    })
    return o
}

function returnFundraiserCategoriesArray() {
    return ['humanitarian', 'knu', 'other', 'pdf', 'resistance']
}

function returnFundraisers(n) {
    let a = []
    for (let i = 0; i < n; i++) {
        let l = Math.ceil(Math.random() * 99)
        let d = Math.ceil(Math.random() * 99)
        let c = Math.ceil(Math.random() * 99)
        let p = Math.ceil(Math.random() * 99)
        let b = Math.ceil(Math.random() * 99)

        a.push({
            deadline: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).getTime(),
            uploadedBy: Math.random().toString(36).slice(2, 7),
            time: new Date(2022, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28)).getTime(),
            category: generate(returnFundraiserCategoriesArray()),
            title: returnBody().slice(p, p + 100),
            body: returnBody().slice(b, b + 200),
            engagement: l + d + c,
            like: l,
            dislike: d,
            comments: c,
        })
    }
    return a
}










function returnCountriesMentioned() {
    let o = []
    returnCountries().forEach(i => {
        o.push({
            category: i,
            count: Math.ceil(Math.random() * 50)
        })
    })
    return o
}

function returnEventCategories() {
    let o = []
    returnEventCategoriesArray().forEach(i => {
        o.push({
            category: i,
            count: Math.ceil(Math.random() * 50)
        })
    })
    return o
}

function returnEventCategoriesArray() {
    return ['fundraising', 'meetup', 'other', 'protest']
}

function returnEvents(n) {
    let a = []
    for (let i = 0; i < n; i++) {
        let l = Math.ceil(Math.random() * 99)
        let d = Math.ceil(Math.random() * 99)
        let c = Math.ceil(Math.random() * 99)
        let p = Math.ceil(Math.random() * 99)
        let b = Math.ceil(Math.random() * 99)

        a.push({
            from: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).getTime(),
            to: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).getTime(),
            country: generate(returnCountries()),
            uploadedBy: Math.random().toString(36).slice(2, 7),
            time: new Date(2022, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28)).getTime(),
            category: generate(returnEventCategoriesArray()),
            title: returnBody().slice(p, p + 100),
            body: returnBody().slice(b, b + 200),
            engagement: l + d + c,
            like: l,
            dislike: d,
            comments: c,
        })
    }
    return a
}


function returnUserDefinitions() {
    let a = []
    for (let i = 0; i < 9; i++) {
        let l = Math.ceil(Math.random() * 99)
        let d = Math.ceil(Math.random() * 99)
        let c = Math.ceil(Math.random() * 99)
        let b = Math.ceil(Math.random() * 99)

        a.push({
            uploadedBy: Math.random().toString(36).slice(2, 7),
            time: new Date(2022, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28)).getTime(),
            body: returnBody().slice(b, b + 200),
            engagement: l + d + c,
            like: l,
            dislike: d,
            comments: c,
        })
    }
    return a
}


function returnSingleEvent() {
    return ({
        content: {
            from: new Date(2023, 9, 3).getTime(),
            to: new Date(2023, 9, 3).getTime(),
            uploadedBy: 'commielay',
            time: new Date(2022, 3, 8).getTime(),
            category: 'other',
            location: {
                address: '111 Lenin Lane Stalingrad 11966',
                country: 'Japan'
            },
            title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
            body: returnBody().slice(0, 800),
            like: {
                count: 28,
                pressed: false
            },
            dislike: {
                count: 13,
                pressed: false
            }
        },
        comments: returnComments()
    })
}


function returnProfile() {
    return ({
        username: 'spooky spectre of communism',
        name: 'Kate Granger',
        phone: '063249024',
        location: 'United States',
        email: 'kate2222222@gmail.com',
        twitter: '@comradekeyboard',
        facebook: 'sss2232',
        about: 'I have a profound revolutionary love for the proletariat of the US. I do not have a sense of attachment or love for the Yankee state. Hence why I am not a patriot.'
    })
}








function listCategories(array: object[], property: string) {
    let already = []
    let result = []
    array.forEach(object => {
        if (!already.includes(object[property])) {
            let o = {};
            o[property] = object[property]
            o['count'] = Math.ceil(Math.random() * 50)
            result.push(o)
        }
        already.push(object[property])
    })
    return result
}





export { returnBody, returnComments, returnPostCategories, returnPosts, returnFundraiserCategories, returnFundraisers, returnCountriesMentioned, returnEventCategories, returnEvents, returnSingleEvent, returnUserDefinitions, returnProfile, listCategories }