function returnTime(t) {
    t = t/1000
    let l = t + 's';
    if ((t/60) > 1) {
        t = t/60
        l = Math.floor(t) + 'min'
    }
    if ((t/60) > 1) {
        t = t/60
        l = Math.floor(t) + 'h'
    }
    if ((t/24) > 1) {
        t = t/24
        l = Math.floor(t) + 'd'
    }
    if ((t/7) > 1) {
        t = t/7
        l = Math.floor(t) + 'w'
    }

    return l
}

export {returnTime}