const fromWhere = require("../fromWhere.js");
const assert = require('assert');

describe('From where test function', function () {

    it('Test uses CY 123 123 as the regPlate', function () {
        assert.equal('Bellville', fromWhere("CY 123 123"));
    });

    it('Test uses CY as the regPlate', function () {
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('Test uses CJ as the regPlate', function () {
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('Test uses CA as the regPlate', function () {
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('Test uses CC as the regPlate', function () {
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

});