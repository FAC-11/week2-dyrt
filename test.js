var test = require('tape');
var logic = require('./logic');

/* test for add to do function */

test('Add to do', function(t) {
const actual = logic.addTodo([], {});
  t.ok (Array.isArray(actual), "check return value is an array");
  t.end();
});
