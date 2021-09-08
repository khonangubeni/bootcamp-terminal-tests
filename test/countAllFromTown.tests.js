const allFromTown = require("../countAllFromTown.js");
const assert = require('assert');

describe('Count all from town test function', function () {

    it('Test uses CL 124,CY 567,CL 345, CJ 456,CL 341 as the regPlate & CL as the pCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), ['CL 124', 'CL 345', 'CL 341'])
    });

    it('Test uses CL 124,CY 567,CL 345, CJ 456,CL 341 as the regPlate & CJ as the pCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ'), ['CJ 456']);
    });

    it('Test uses CL 124,CY 567,CL 345, CJ 456,CL 341 as the regPlate & CF as the pCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF'), []);
    });

    it('Test uses CL 124,CY 567,CL 345, CJ 456,CL 341 as the regPlate & CL as the pCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL').length, 3)
    });

    it('Test uses CL 124,CY 567,CL 345, CP 456,CL 341 as the regPlate & CA as the pCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CP 456,CL 341', 'CA'), []);
    });

});