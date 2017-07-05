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
  t.deepEqual(original.length, 2, "Input is unchanged");
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

//These tests are for deleteTodo
// should leave the input argument todos unchanged
test('Delete To Do', function (t) {
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
  const newList = logic.deleteTodo(original, 1);
  t.deepEqual(original.length, 2, "Input is unchanged");
  t.end();
});
// return a new array, this should not contain any todo with an id of idToDelete
test('Delete To Do', function (t){
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
  const newList = logic.deleteTodo(original, 1);
  console.log('fuction output', newList);
  const check = newList.filter(function (x){return x.id === 1});
  console.log('check', check);
  t.deepEqual(check.length, 0, 'New array should not contain deleted ID');
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
