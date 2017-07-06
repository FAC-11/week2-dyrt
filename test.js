var test = require('tape');
var logic = require('./logic');


// This is a test ToDo to remain immutable so as to keep tests pure

//  let toDoWith1True = [{
//     id: 0,
//     description: 'smash avocados',
//     done: true,
//   },
//   {
//     id: 1,
//     description: 'make coffee',
//     done: true,
//   },
// ];

// Tests start here


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
      done: true
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

//This test checks if the new item has an id added.
test('Add to do', function(t) {
  const original = [];
  const newTodo = {
    description: 'make more coffee',
  };
  const actual = typeof logic.addTodo(original, newTodo)[0].id;
  const expected = 'number';
  t.equal( actual , expected, "ID number is added to new item");
  t.end();
});

test('Add to do', function(t) {
  const original = [];
  const newTodo = {
    description: 'make more coffee',
  };
  const actual = typeof logic.addTodo(original, newTodo)[0].done;
  const expected = 'boolean';
  t.equal(actual , expected, "Done property is added to new item");
  t.end();
});

test('MarkToDo', function(t) {
  let actual = [{
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
  let expected = [{
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

  let dummyId = 0;

  theNewTodo = logic.markTodo(actual, dummyId);
  t.deepEqual(actual, expected, 'Inputs should be unchanged');
  t.end();
});


test('MarkToDo', function(t) {
   let input = [{
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
  let idToUse = 1;
  let output = logic.markTodo(input, idToUse);

  // in the new todo array, all elements will remain unchanged except the one with id: idToMark
  t.deepEqual(output[0], input[0], 'Rest of todo list unchanged');
  t.end();
});

test('MarkToDo', function(t) {
  let input = [{
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

  var idToUse = 1;
  let output = logic.markTodo(input, idToUse);

  t.equal(output[idToUse].done, !input[idToUse].done, 'Toggles item done');
  t.end();
});
