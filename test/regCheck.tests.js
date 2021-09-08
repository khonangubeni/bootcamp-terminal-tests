const regCheck = require("../regCheck.js");
const assert = require('assert');

describe('Reg check test function', function () {

    it('Test uses CY 123 123 as the regPlate & CY as the pCode', function () {
        assert.equal(true, regCheck("CY 123 123", "CY"));
    });

    it('Test uses CA 321 321 as the regPlate & CY as the pCode', function () {
        assert.equal(false, regCheck("CA 321 321", "CY"));
    });

    it('Test uses DC 55 YU GP as the regPlate & GP as the pCode', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('Test uses DC 55 YU GP as the regPlate & EC as the pCode', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

});