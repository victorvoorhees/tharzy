import {IEvent, IFundraiser, IPost} from "./types";

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





function returnPosts(): IPost[] {
    return (
        [
            {
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 1).getTime(),
                category: 'atrocities',
                title: `The Ukrainian army pushed the line of fire from Kryvyi Rih district.`,
                engagement: 243,
                likes: 231,
                dislikes: 3,
                comments: 9,
            },
            {
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 2).getTime(),
                category: 'resistance',
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                engagement: 163,
                likes: 158,
                dislikes: 3,
                comments: 2
            },
            {
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 3).getTime(),
                category: 'international',
                title: 'For the first time since the coup, China condemns Tatmadaw',
                engagement: 140,
                likes: 58,
                dislikes: 43,
                comments: 39
            },
            {
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 4).getTime(),
                category: 'other',
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                engagement: 174,
                likes: 98,
                dislikes: 73,
                comments: 3
            },
            {
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 5).getTime(),
                category: 'atrocities',
                title: `Junta forces violently arrested an innocent teenager in Pyae`,
                engagement: 243,
                likes: 231,
                dislikes: 3,
                comments: 9,
            },
            {
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 6).getTime(),
                category: 'resistance',
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                engagement: 163,
                likes: 158,
                dislikes: 3,
                comments: 2
            },
            {
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 7).getTime(),
                category: 'international',
                title: 'For the first time since the coup, China condemns Tatmadaw',
                engagement: 140,
                likes: 58,
                dislikes: 43,
                comments: 39
            },
            {
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 8).getTime(),
                category: 'other',
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                engagement: 174,
                likes: 98,
                dislikes: 73,
                comments: 3
            },
        ]
    )
}



function returnFundraisers(): IFundraiser[] {
    return (
        [
            {
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 1).getTime(),
                category: 'humanitarian',
                title: `The Ukrainian army pushed the line of fire from Kryvyi Rih district deep into Kherson region.`,
                deadline: new Date(2022, 2, 20).getTime(),
                engagement: 243,
                likes: 231,
                dislikes: 3,
                comments: 9,
            },
            {
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 2).getTime(),
                category: 'resistance',
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                deadline: new Date(2022, 2, 19).getTime(),
                engagement: 163,
                likes: 123,
                dislikes: 2,
                comments: 1
            },
            {
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 3).getTime(),
                category: 'resistance',
                title: 'For the first time since the coup, China condemns Tatmadaw',
                deadline: new Date(2022, 2, 18).getTime(),
                engagement: 140,
                likes: 35,
                dislikes: 22,
                comments: 98
            },
            {
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 4).getTime(),
                category: 'other',
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                deadline: new Date(2022, 2, 17).getTime(),
                engagement: 174,
                likes: 123,
                dislikes: 34,
                comments: 1
            },
            {
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 5).getTime(),
                category: 'humanitarian',
                title: `Junta forces violently arrested an innocent teenager in Pyae`,
                deadline: new Date(2022, 2, 16).getTime(),
                engagement: 139,
                likes: 112,
                dislikes: 23,
                comments: 4,
            },
            {
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 6).getTime(),
                category: 'resistance',
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                deadline: new Date(2022, 2, 15).getTime(),
                engagement: 215,
                likes: 213,
                dislikes: 1,
                comments: 1
            },
            {
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 7).getTime(),
                category: 'humanitarian',
                title: 'For the first time since the coup, China condemns Tatmadaw',
                deadline: new Date(2022, 2, 14).getTime(),
                engagement: 26,
                likes: 23,
                dislikes: 2,
                comments: 1
            },
            {
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 8).getTime(),
                category: 'other',
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                deadline: new Date(2022, 2, 13).getTime(),
                engagement: 298,
                likes: 234,
                dislikes: 55,
                comments: 9
            },
        ]
    )
}



function returnEvents(): IEvent[] {
    return (
        [
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 4).getTime(),
                uploadedBy: 'gingerman',
                time: new Date(2022, 3, 1).getTime(),
                category: 'protest',
                location: {
                    address: '111 Lenin Lane Stalingrad, 11966',
                    country: 'China'
                },
                title: `The Ukrainian army pushed the line of fire from Kryvyi Rih district deep into Kherson region.`,
                engagement: 243,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 9,
            },
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 3).getTime(),
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 2).getTime(),
                category: 'meetup',
                location: {
                    address: '111 Lenin Lane Stalingrad 11966',
                    country: 'China'
                },
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                engagement: 163,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 2
            },
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 3).getTime(),
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 3).getTime(),
                category: 'fundraising',
                location: {
                    address: '111 Lenin Lane Stalingrad 11966',
                    country: 'China'
                },
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
                engagement: 140,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 39
            },
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 3).getTime(),
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 4).getTime(),
                category: 'other',
                location: {
                    address: '111 Lenin Lane Stalingrad 11966',
                    country: 'China'
                },
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                engagement: 174,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 3
            },
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 3).getTime(),
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 5).getTime(),
                category: 'fundraising',
                location: {
                    address: '111 Lenin Lane Stalingrad 11966',
                    country: 'China'
                },
                title: `Junta forces violently arrested an innocent teenager in Pyae`,
                engagement: 243,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 9,
            },
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 3).getTime(),
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 6).getTime(),
                category: 'protest',
                location: {
                    address: '111 Lenin Lane Stalingrad 11966',
                    country: 'China'
                },
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                engagement: 163,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 2
            },
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 3).getTime(),
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 7).getTime(),
                category: 'meetup',
                location: {
                    address: '111 Lenin Lane Stalingrad 11966',
                    country: 'China'
                },
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
                engagement: 140,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 39
            },
            {
                from: new Date(2023, 9, 3).getTime(),
                to: new Date(2023, 9, 3).getTime(),
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 8).getTime(),
                category: 'other',
                location: {
                    address: '111 Lenin Lane Stalingrad 11966',
                    country: 'China'
                },
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                engagement: 174,
                like: {
                    count: 22,
                    pressed: false
                },
                dislike: {
                    count: 22,
                    pressed: false
                },
                comments: 3
            },
        ]
    )
}





export { returnBody, returnComments, returnPosts, returnFundraisers, returnEvents }