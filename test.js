var test = require('tape');
var logic = require('./logic');

// This is a test ToDo to remain immutable so as to keep tests pure
const theconstantTodo=
[
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


// Tests start here


//These tests are for markToDo

test('Does it leave input arguments unchanged?', function(t) {

let ourmutableToDo = theconstantTodo.map (x=>x);    //this may be in logic.js
let theNewTodo = [];

// should leave the input argument todos unchanged
markTodo (ourmutableToDo);
t.equal (theconstantTodo,ourmutableToDo);
}


test('Does it leave input arguments unchanged?', function(t) {

let ourmutableToDo = theconstantTodo.map (x=>x);    //this may be in logic.js
let theNewTodo = [];

// in the new todo array, all elements will remain unchanged except the one with id: idToMark
markTodo (ourmutableToDo);
t.equal (expectedresult,ourmutableToDo);

}


    // this element will have its done value toggled
    // hint: array.map

  t.pass();
  t.end();
});

  





test('Example test', function(t) {
  t.pass();
  t.end();
});
