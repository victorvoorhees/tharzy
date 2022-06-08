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





export { sortObject, setTimeLabel }