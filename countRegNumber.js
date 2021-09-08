module.exports = function countRegNumber(reg) {
	var countNum = reg.split(',');
	return countNum.length;
};