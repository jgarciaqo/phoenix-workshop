var assert = require('assert');
var aboutusHanlder = require('../lib/about-us');


describe('Test aboutusHanlder', function() {
  it('should return an object', function () {
    var data = aboutusHanlder();
    assert.equal(data.content, 'About-us in handler');
  });
});
