// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [{
      id: -3,
      description: 'Do shopping',

    },
    {
      id: -2,
      description: 'Buy shoes',

    },
    {
      id: -1,
      description: 'Call Dave',

    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);

      update(newState);

    });
    if (todo.done === true ) {
      markButtonNode.classList.add('todo__markbutton', 'todo__markbutton--marked');
      markButtonNode.setAttribute('aria-label', 'Click to mark task as not completed');
    }
      else {
        markButtonNode.classList.add('todo__markbutton');}
        markButtonNode.setAttribute('aria-label', 'Click to mark task as complete');
    todoNode.appendChild(markButtonNode);

    // add span holding description
    var descriptionNode = document.createElement('span');
    descriptionNode.textContent = todo.description;
    if (todo.done === true ) {
      descriptionNode.classList.add('todo__description' , 'todo__description--marked', 'text-overflow');
      markButtonNode.setAttribute('aria-label', 'This task has been done');
    } else {
      descriptionNode.classList.add('todo__description', 'text-overflow' ) ;
      markButtonNode.setAttribute('aria-label', 'This task has not been done');
    }

    todoNode.appendChild(descriptionNode);
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.setAttribute('aria-label', 'Click to delete this task');
    deleteButtonNode.classList.add('todo__deletebutton');
    todoNode.appendChild(deleteButtonNode);



    //add a feature (maybe here) to change the class to --marked if the todo has a "done" of "true"
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      event.preventDefault();
      var newDescription = document.getElementById("add-todo").description.value;
      var newState = todoFunctions.addTodo(state, newDescription);
      // what is inside event.target? - The entire form
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
