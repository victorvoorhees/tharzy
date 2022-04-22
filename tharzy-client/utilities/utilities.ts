function sortObject<T extends object[]>(arrayOfObjects: T, sortBy: string): T {
    if (typeof arrayOfObjects[0][sortBy] === 'number') {
        arrayOfObjects.sort((a, b) => {
            return b[sortBy] - a[sortBy]
        })
    }
    if (typeof arrayOfObjects[0][sortBy] === 'string') {
        arrayOfObjects.sort((a, b) => {
            const A = a[sortBy].toUpperCase()
            const B = b[sortBy].toUpperCase()
            if (A < B) {
                return -1
            }
            if (A > B) {
                return 1
            }
            return 0
        });
    }
    return arrayOfObjects
}

function setTimeLabel(time: number, options?: { long: boolean }): string {
    let timeLabel = 's';
    let elapsedTime = (new Date().getTime() - time) / 1000;
    if (60 < elapsedTime && elapsedTime < 3600) {
        elapsedTime = Math.floor(elapsedTime / 60);
        timeLabel = 'min';
    }
    if (3600 < elapsedTime && elapsedTime < 86400) {
        elapsedTime = Math.floor(elapsedTime / 3600);
        timeLabel = 'h';
    }
    if (86400 < elapsedTime) {
        elapsedTime = Math.floor(elapsedTime / 86400);
        timeLabel = 'd';
    }
    if (options && options.long) return `${elapsedTime}${timeLabel} left`
    return `${elapsedTime}${timeLabel}`
}



function returnPosts(): any {
    return (
        [
            {
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 1).getTime(),
                category: 'atrocities',
                title: `The Ukrainian army pushed the line of fire from Kryvyi Rih district deep into Kherson region, liberating more than 15 populated localities`,
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
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
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
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
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

function returnFundraisers(): any {
    return (
        [
            {
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 1).getTime(),
                category: 'humanitarian',
                title: `The Ukrainian army pushed the line of fire from Kryvyi Rih district deep into Kherson region, liberating more than 15 populated localities`,
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
                category: 'international',
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
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
                engagement: 243,
                likes: 546,
                dislikes: 23,
                comments: 4,
            },
            {
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 6).getTime(),
                category: 'resistance',
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                deadline: new Date(2022, 2, 15).getTime(),
                engagement: 163,
                likes: 213,
                dislikes: 1,
                comments: 1
            },
            {
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 7).getTime(),
                category: 'international',
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
                deadline: new Date(2022, 2, 14).getTime(),
                engagement: 140,
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
                engagement: 174,
                likes: 234,
                dislikes: 55,
                comments: 9
            },
        ]
    )
}

function returnEvents(): any {
    return (
        [
            {
                date: new Date(2022, 2, 20).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 1).getTime(),
                category: 'protest',
                country: 'Japan',
                title: `The Ukrainian army pushed the line of fire from Kryvyi Rih district deep into Kherson region, liberating more than 15 populated localities`,
                engagement: 243,
                likes: 231,
                dislikes: 3,
                comments: 9,
            },
            {
                date: new Date(2022, 2, 23).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 2).getTime(),
                category: 'meetup',
                country: 'UK',
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                engagement: 163,
                likes: 158,
                dislikes: 3,
                comments: 2
            },
            {
                date: new Date(2022, 2, 18).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 3).getTime(),
                category: 'fundraising',
                country: 'USA',
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
                engagement: 140,
                likes: 58,
                dislikes: 43,
                comments: 39
            },
            {
                date: new Date(2022, 2, 17).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 4).getTime(),
                category: 'other',
                country: 'Australia',
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                engagement: 174,
                likes: 98,
                dislikes: 73,
                comments: 3
            },
            {
                date: new Date(2022, 2, 15).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'Michael Smith',
                time: new Date(2022, 3, 5).getTime(),
                category: 'fundraising',
                country: 'Australia',
                title: `Junta forces violently arrested an innocent teenager in Pyae`,
                engagement: 243,
                likes: 231,
                dislikes: 3,
                comments: 9,
            },
            {
                date: new Date(2022, 2, 13).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'karen revolutionary',
                time: new Date(2022, 3, 6).getTime(),
                category: 'protest',
                country: 'Canada',
                title: `KNU offensive on Pha-an a 'massive success', says KNU chief Pha-Htee`,
                engagement: 163,
                likes: 158,
                dislikes: 3,
                comments: 2
            },
            {
                date: new Date(2022, 2, 13).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'Ye Htut',
                time: new Date(2022, 3, 7).getTime(),
                category: 'meetup',
                country: 'Thailand',
                title: 'For the first time since the coup, China condemns atrocities by Tatmadaw',
                engagement: 140,
                likes: 58,
                dislikes: 43,
                comments: 39
            },
            {
                date: new Date(2022, 2, 11).getTime(),
                duration: '23:00 - 23:59',
                uploadedBy: 'commie lay',
                time: new Date(2022, 3, 8).getTime(),
                category: 'other',
                country: 'Singapore',
                title: 'Resurgent Communist Party of Burma welcomed warmly by rural peasants',
                engagement: 174,
                likes: 98,
                dislikes: 73,
                comments: 3
            },
        ]
    )
}

export { sortObject, setTimeLabel, returnPosts, returnFundraisers, returnEvents }