const isFromBellville = require("../isFromBellville.js");
const assert = require('assert');

describe('Is from Bellville test function', function () {

    it('Test uses CY as the regPlate', function () {
        assert.equal(true, isFromBellville("CY"));
    });

    it('Test uses CA 123 123 as the regPlate', function () {
        assert.equal(false, isFromBellville("CA 123 123"));
    });

    it('Test uses CY 321 321 as the regPlate', function () {
        assert.equal(true, isFromBellville("CY 321 321"));
    });

    it('Test uses CY 123 as the regPlate', function () {
        assert.equal(isFromBellville('CY 123'), true);
    });

});