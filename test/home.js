var assert = require('assert');
var homeHanlder = require('../lib/homeHandler');


describe('Test homeHanlder', function() {
  it('should return an object', function () {
    var data = homeHanlder();
    assert.equal(data.content, 'HEllO THIS IS THE FIRST PAGE from a fn');
  });
});
