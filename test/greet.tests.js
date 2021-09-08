const greet = require("../greet.js");
const assert = require('assert');

describe('The Greet test function' , function(){

    it('Test uses Khona as the name' , function(){
        assert.equal("Hello, Khona",greet("Khona"));
    });
});