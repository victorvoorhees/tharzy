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


function produceCalendar(n) {
    const now = new Date().getFullYear()

    let o = {}
    o[String(now)] = []

    for (let i = 1; i < n; i++) {
        o[String(now + i)] = []
    }

    let d = new Date(now, 0, 1)

    while (d.getFullYear() < (now + n)) {
        o[String(d.getFullYear())][d.getMonth()] = d.getDate()
        d.setDate(d.getDate() + 1)
    }

    return o
}


function produceTime() {
    let m = [];
    let h = [];
    for (let i = 0; i < 60; i++) {
        m.push(i)
    }
    for (let i = 0; i < 24; i++) {
        h.push(i)
    }
    return {m, h}
}




export { sortObject, setTimeLabel, produceCalendar, produceTime }