const transportFee = require("../transportFee.js");
const assert = require('assert');

describe('Transport fee test function', function () {

    it('Test uses morning as the shift', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('Test uses afternoon as the shift', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('Test uses night as the shift', function () {
        assert.equal(transportFee('nightshift'), 'free');
    });

    it('Test uses mornin as the shift', function () {
        assert.equal(transportFee('mornin'), 'R20');
    });

    it('Test uses aNoon as the shift', function () {
        assert.equal(transportFee('aNoon'), 'R10');
    });

});