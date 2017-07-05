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
  t.ok(Array.isArray(actual), "check return value is an array");

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
  let expectedResult = toDoWith1True.map(x => x);

  let theNewTodo = [];
  let idToUse = 1;

  // in the new todo array, all elements will remain unchanged except the one with id: idToMark
  t.deepEqual(expectedResult, logic.markTodo(theconstantTodo, idToUse));

  //  t.pass();
  t.end();
});

test('toggled ok?', function(t) {
  let ourmutableToDo = [];

  let theNewTodo = [];
  let idToUse = 1;

    // this element will have its done value toggled
  if (ourmutableToDo.length) {
    ourmutableToDo = logic.markTodo(theconstantTodo, idToUse);
    t.deepEqual(true, ourmutableToDo[1].done);
    ourmutableToDo = logic.markTodo(theconstantTodo, idToUse);
    t.deepEqual(false, ourmutableToDo[1].done);
  }

  //  t.pass();
  t.end();
});
