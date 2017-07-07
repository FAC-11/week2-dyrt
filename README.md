# week2-dyrt
To Do List Project: Team DYRT
## Why did we create this app?
We thought that there weren't enough 'to do' list apps in the world, so wanted to make our own.

## What have we created?
Visiting our page, you will see three example to do items that will demonstrate the interface of this app.

Click on the rounded square on the left to mark an task as completed. Didn't mean to select that one? No worries! Click again to toggle the task as unfinished.

You'll also see a space where your task will be described.

To the right of the task description is a red cross that allows you to remove any tasks you've decided you don't want to do anymore. Don't worry, we won't judge.

Finally, below the list of tasks is a space for you to add a description of a new task. Press 'submit' and watch it appear, as if by JavaScript magic!

## How did we create it?
### Logic
As a team, we've been exploring Test Driven Development (TDD). So we used this app as an opportunity to practice our testing skills.

Using pair programming, we tackled the three core functions of a to-do list app:
* adding a task
* deleting a task
* toggling the 'completed' status of a task

For each of these functions, we first developed tests to ensure they would behave as expected.

### Interface
Our starting point for the visual design of the site was the checkbox buttons. The ones we decided to use leant themselves to a clean, minimalist design.

To style the buttons, we used CSS to set the background image and remove default button styling.

We sized up the font and the buttons from the default browser font size using rem units, to allow for a more comfortable user experience.

### Connecting the parts
We have an Immediately Invoked Function Expression (IIFE, pronounced 'iffey') that runs as soon as the page loads. This contains all of the code for interacting with the DOM, keeping this isolated from the logic of the to do functions, encouraging the creation of testable functions.


## What did you learn?

### Testing

It was our first time using TDD for a lot of the team. One thing we spent some time thinking about was how to test the things we were looking for. For example, when testing if the input argument had changed, one option was to look at the length of the argument rather than doing a deepEqual and looking at the contents of the object/array.

We also learnt about different types of tests. For example, the `d.ok()` test for booleans .

Additionally we learnt about keeping the pure functions from the DOM browser execution functions. This allowed us to keep our TDD tests distinct.


### Useful CSS

The `text-decoration` property will allow you to draw lines under, over, or through some text, and to change those line colours. For example we set this property to `text-decoration: line-through;` to show when tasks had been completed.

For accessibility, we learnt that it was not ideal to use CSS to change the order of elements. It was important to set it as we wanted in the DOM. This is because screen readers use the order DOM to decide on the order in which they read out text.  The CSS does not change the order of the DOM.

### Cloning Arrays & Objects

We learnt that if you set a new variable to equal a current array or object, any changes you make to that new variable will also happen to the original array or object. This is because the Javascript engine does not create a new object or array, but creates a reference to the existing one . In order to clone an existing array we can use `array.map` and for an object we can use `Object.assign ( {}, original object)` . 

## Useful links
* We found our icons on this [free icon site](https://iconmonstr.com/)
