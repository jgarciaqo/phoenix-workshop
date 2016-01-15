/**
 * Created by avelupula on 1/15/2016.
 */
var assert = require('assert');
var contactUS = require('../lib/contactus');


describe('Test contactUS', function() {
    it('should return an object', function () {
        var data = contactUS();
        assert.equal(data.phoneNo, '911');
    });
});
