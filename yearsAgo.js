module.exports = function yearsAgo(numDate) {
    var date = new Date();
    var currentYear = date.getFullYear();
    return currentYear - numDate;
}