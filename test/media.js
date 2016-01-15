var assert = require('assert');
var mediaHandler = require('../lib/mediaHandler');

describe('Test mediaHanlder', function() {
  it('should return an object', function () {
    var data = mediaHandler();
    assert.equal(data.content, 'Media');
  });
});