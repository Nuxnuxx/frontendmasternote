# JAVASCRIPT PRINCIPLES

## run code line by line
it is called the thread of execution

## Save data like string and array to use later
it is called memory
also save code as ('function')

## Function
code we save to use later ("call", "invoke")

## Execution context
Create to run the code of a function
    - Thread of execution
    - Memory

## Call stack
stack which put on top funciton when needed to be run and come back to global after it can put function on top of each other

## DRY
Don't repeat yourself
we got function to respect this principles

Higer order functions follow this same principles
    - we dont know exaactly what some of our functionality is until we run our function

## Function
function have all features of objects

if take a function or return a function is a higher order function

## Closure
Function with memories
function that remind their last running

function created in a function when returned also returned the whole local memory function they were write in
    this property is named [[scope]]
scope is individual for each function even if the same
only keep waht is used in the function returned

State = is the variable at a certain point in time of the app


## Web api

### setTimeOut
a feature of browser not javascript it is just a facade for the timer of the browser it is why it continue to run the next line and get call after the end of the timer

### Core feature to learn code

#### callback queue 
is for facade function which send function get run by the browser
to put function from callback queue to call stack need to finish the global execution context
This checks between if global execution context is finish or if there is any function in the callback is called
### Event loop

## Promises

### Micro task queue
Any function to a promise object via the then method go to this queue which has the priority on the callback queue


## Classes

### object have a hidden proterty call __proto__ which link to the object prototype if not changed by the dev
if change with object.create(functionToBeInlInkInProto) the function pass in argument will be reference in __Proto__ but the function pass in argument will also link to Object.prototype in his __proto_ propertie

### this
refer to the objet at the left of the .

### function vs arrow function with this
in normal function the this refer to the windows global object need to use function.call(this) to make it works with the good this if concatenate in a already function

with arrow function the this will be the object we refer too by default by the "this where the function was stored"

### WARNING : use normal function for method of object but arrow function for the function inside of the method of the object

### new
