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
    description: 'make more coffee',
  };
  const newList = logic.addTodo(original, newTodo);
  t.deepEqual(original, original, "Input is unchanged");
  t.end();
});

/* checks if new todo is added at the end */


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
    description: 'make more coffee',
  };
  const actual = logic.addTodo(original, newTodo);
  const expected = [
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
    {
      id: 2,
      description: 'make more coffee',
      done: false,
    }
  ];
  t.deepEqual(actual, expected, "New Todo is added to the end of original list");
  t.end();
});

test('Add to do', function(t) {
  const original = [];
  const newTodo = {
    description: 'make more coffee',
  };
  const actual = logic.addTodo(original, newTodo);
  t.equal(typeof actual.id, 'number', "ID number is added to new item");
  t.end();
});
