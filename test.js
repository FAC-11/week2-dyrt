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









//test('Example test', function(t) {
//  t.pass();
//    t.end();
//}); //blah
