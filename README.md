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

_write some more here_

## What did you learn?
### something about testing
### something about separating logic and DOM
### something about cloning arrays of objects

## Useful links
* We found our icons on this [free icon site](https://iconmonstr.com/)
