var test = require('tape');
var logic = require('./logic');

/* test for add to do function */

test('Add to do', function(t) {
  const actual = logic.addTodo([], {});
  t.ok (Array.isArray(actual), "Return value is an array");
  t.end();
});

test('Add to do', function(t) {
  const original = [
    {
      id: 0,
      description: 'smash avocados',
      done: true,
    },
    {
      id: 1,
      description: 'make coffee',
      done: false,
    },
  ];
  const newTodo = {
    id: 2,
    description: 'make more coffee',
    done: false,
  };
  const newList = logic.addTodo(original, newTodo);
  t.deepEqual(original, newTodo, "Input is unchanged");
  t.end();
});
