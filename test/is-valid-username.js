var test = require('tape');
var isValidUsername = require('../is-valid-username');

test('is valid username', function (t) {
  t.plan(8);

  t.equal(isValidUsername('foobar'), true);
  t.equal(isValidUsername('fooBar5'), true);
  t.equal(isValidUsername('455'), true);
  t.equal(isValidUsername('foo_bar'), false);
  t.equal(isValidUsername('foo-bar'), false);
  t.equal(isValidUsername('foo.bar'), false);
  t.equal(isValidUsername({}), false);
  t.equal(isValidUsername(), false);
});
