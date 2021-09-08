module.exports = function transportFee(shift) {
    if (shift == 'morning'|| shift.startsWith('mornin')) {
        return 'R20';
    } else if (shift == 'afternoon'|| shift.endsWith('aNoon')) {
        return 'R10';
    } else {
        return 'free';
    }
}