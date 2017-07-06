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
   actual = logic.addTodo([], {});
  t.ok(Array.isArray(actual), "check return value is an array");

  t.end();

});

//These tests are for markToDo

test('Does it leave input arguments unchanged?', function(t) {

  //let ourmutableToDo = theNewTodo.map(x => x);
  let ourmutableToDo = [{
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


  let theNewTodo = [];
  let dummyId = 0;

  // should leave the input argument todos unchanged
  theNewTodo = logic.markTodo(ourmutableToDo, dummyId);
  t.deepEqual(ourmutableToDo, theNewTodo);
  t.end();
});             ///checked once Thursday 10:50 OK
                /// not checked whether tests desirabel result


test('original array els unchanged?', function(t) {
  //  let expectedResult = toDoWith1True.map(x => x);

   let ourmutableToDo = [{
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

  let expectedResult = [{
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


  let theNewTodo = [];
  let idToUse = 1;

  // in the new todo array, all elements will remain unchanged except the one with id: idToMark

  t.deepEqual(logic.markTodo(ourmutableToDo, idToUse), expectedResult);

  //  t.pass();
  t.end();
});         //Checked Thursday 10:52 looks OK

test('toggled ok?', function(t) {
  let ourConstantToDo = [{
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

  let ourmutableToDo = [{
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

  let theNewTodo = [];
  var idToUse = 1;

  // this element will have its done value toggled
  ourmutableToDo = logic.markTodo(ourmutableToDo, 1);
  if (ourmutableToDo.length) {
    t.deepEqual(true, ourmutableToDo[1].done);
    ourmutableToDo = logic.markTodo(ourmutableToDo, 1);
    t.deepEqual(false, ourmutableToDo[1].done);
  }

  //  t.pass();
  t.end();
});     //Checked Thursday 10:54 looks OK
