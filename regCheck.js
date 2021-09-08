module.exports = function regCheck(regPlate, pCode) {
    return regPlate.startsWith(pCode) || regPlate.endsWith(pCode);
  };