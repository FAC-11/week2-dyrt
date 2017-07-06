// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    var newId = this.generateId();
    var newItem = {
      id: newId,
      description: newTodo.description,
      done: false
    };
    return todos.concat([newItem]);
  },
  deleteTodo: function(todos, idToDelete) {
    var newArray = todos.map(function(el) {
      return Object.assign({}, el);
    });
    return newArray.filter(function(el) {
      return el.id !== idToDelete;
    });
  },

  // markTodo spec: leave the input argument todos unchanged;   in the new todo array, all elements will remain unchanged except the one with id: idToToggle - this element will have its done value toggled
  markTodo: function(todos, idToToggle) {
    let withToggle = todos.map(function(el) {
      if (el.id!==idToToggle) {
        return Object.assign({}, el);
      }
      else {
        var newObj = Object.assign({}, el);
        newObj.done = !newObj.done;

        return (newObj)
      }
    });
    return withToggle;

  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
