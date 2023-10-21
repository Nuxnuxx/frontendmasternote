# NOTE

## DOM && DATATYPES

- when getElementById it select the first element with this id

- # = id
- . = class

- getByTagName exist (get h1,p,div,section) --------DEPRECATED QUERY SELECTOR EXIST-------

  - return a HTMLCollection

- use QUERYSELECTOR OR QUERYSELECTORALL

- .length give size of the collection return by a query

- .textContent get the text inside of an element

- append can add text to a DOM element already existing

- each character in string have a space in the array string[0] = first character of the string

- indexOf -> get index of a first defined occurence of a character into a string | take substring too

  - case sensitive : true

- includes -> get a substring defined occurence into a string

  - retur true or false
  - case sensitive as always

- toLowerCase | toUppercase

compiler work as math () to group

variable point to a value

variable dont contain a value

let busta = scrub

dont point busta to scrub

but evaluate scrub and assign it to busta

statement vs expression

an expression "asks" JS for a value
6 + 4

a statement "tell" JS to do something (declare/assign)
let sausage = "saucisse"

## ARRAYS && OBJECTS

### ARRAYS

index start 0 in array

array is mutable =| not string and other primitives

push change array in place
concat create a new array and change it

const on a mutable array, can still change array

### Objects

make immutable object with freeze() function

this in a method lets us reference other properties of the object

string is wrap around a string object

## FUNCTIONS && EVENTS

> operator return true or false
= too

=> arrow function for small little function call anonymous function 
  - useful for handler and callback

const add = (x, y) => x + y;
  need to always return when using arrow functions
  the this keyword work different in function then arrow functions

var doesnt create a new variable just use it from outer scope
let create a new variable if not on the same scope

## BRANCHES && LOOPS

if condition is sus javascript evaluate is trushy and falsy %

object are trustly by default

primitive are falsy if empty not object

for (let x of array) {

}

it is of not in deadass

for loop on string too

### map and filter


...variable iterate over the variable like a for

## FETCHING DATA

asynchronous is code run at different then when javascript execute it  (read it)

let [uno, ...otros] = [1,2,3,4]

get 1 in uno and the rest in otros

## REAL WORLD JS


await is only possible in a type module js file

module create his own scope


debugger keyword
stop code in browser
