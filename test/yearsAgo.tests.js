const yearsAgo = require("../yearsAgo.js");
const assert = require('assert');

describe('Years ago test function', function () {

    it('Test uses 1976 as the numDate', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('Test uses 2000 as the numDate', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});