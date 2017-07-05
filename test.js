var test = require('tape');
var logic = require('./logic');


// This is a test ToDo to remain immutable so as to keep tests pure
const theconstantTodo = [{
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
const toDoWith1True = [{
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: true,
  },
];

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

//These tests are for markToDo

test('Does it leave input arguments unchanged?', function(t) {

  let ourmutableToDo = theconstantTodo.map(x => x); //this may be in logic.js
  let theNewTodo = [];
  let dummyId = 0;

  // should leave the input argument todos unchanged
  logic.markTodo(ourmutableToDo, dummyId);
  t.deepEqual(theconstantTodo, ourmutableToDo);
  t.end();
});


test('original array els unchanged?', function(t) {
  let ourmutableToDo = theconstantTodo.map(x => x);
  let expectedResult = toDoWith1True.map(x => x);

  let theNewTodo = [];
  let idToUse = 1;

  // in the new todo array, all elements will remain unchanged except the one with id: idToMark
  logic.markTodo(ourmutableToDo, idToUse);
  t.deepEqual(expectedResult, ourmutableToDo);

  //  t.pass();
  t.end();
});

test('toggled ok?', function(t) {
  let ourmutableToDo = theconstantTodo.map(x => x);

  let theNewTodo = [];
  let idToUse = 1;

    // this element will have its done value toggled
  logic.markTodo(ourmutableToDo, idToUse);
  t.deepEqual(true, ourmutableToDo[1].done);
  logic.markTodo(ourmutableToDo, idToUse);
  t.deepEqual(false, ourmutableToDo[1].done);

  //  t.pass();
  t.end();
});
