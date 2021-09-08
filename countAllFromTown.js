module.exports = function allFromTown(regPlate, pCode) {
    var arrNumplates = regPlate.trim().split(/,\s*/);
    console.log(arrNumplates);
    var townPlates = [];
    for (var i = 0; i < arrNumplates.length; i++) {
      if (arrNumplates[i].startsWith(pCode)) {
        townPlates.push(arrNumplates[i]);
      };
    };
    return townPlates;
  }