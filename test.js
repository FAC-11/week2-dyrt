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
  t.equal(original.length, 2, "Input is unchanged");
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
  t.equal(original.length, 2, "Input is unchanged");
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
  const check = newList.filter(function (x){return x.id === 1});
  t.deepEqual(check.length, 0, 'New array should not contain deleted ID');
  t.end();
});

//return all other elements of original array
test ( "Delete To Do", function (t) {
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
  const expected =  [ {
    id: 0,
    description: 'smash avocados',
    done: true
  },] ;

  const newList = logic.deleteTodo(original, 1);
  t.deepEqual(newList, expected , 'All non-deleted elements are returned');
  t.end();
});

// Mark todo tests
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
    }];

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
  }];
  let expected = [{
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: true,
  }];

  var id = 1;

  let actual = logic.markTodo(input, id);

  t.deepEqual(actual, expected, 'Toggles item done');
  t.end();
});
