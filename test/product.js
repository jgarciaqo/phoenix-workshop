var assert = require('assert');
var productHanlder = require('../lib/productHandler');


describe('Test productHanlder', function() {
    it('should return an object', function () {
        var data = productHanlder();
        assert.equal(data.content, 'Cras justo odio from a fn');
    });
});