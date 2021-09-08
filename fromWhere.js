module.exports = function fromWhere(regPlate) {

    if (regPlate.startsWith('CY')) {
        return 'Bellville';
    }
    else if (regPlate.startsWith('CJ')) {
        return 'Paarl';
    }
    else if (regPlate.startsWith('CA')) {
        return 'Cape Town';
    }
    else {
        return 'Some other place!';
    }

}