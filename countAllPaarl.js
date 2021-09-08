module.exports = function allPaarl(regPlate) {
    var arrNumplates = regPlate.split(/,\s*/);
    var paarlPlates = [];
    for (var i = 0; i < arrNumplates.length; i++) {
      if (arrNumplates[i].startsWith('CJ')) {
        paarlPlates.push(arrNumplates[i]);
      };
    };
    return paarlPlates;
  }