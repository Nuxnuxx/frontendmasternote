# NOTE

## Intro

### types

- null, undefined the same

 - || or (one of them is true so it is true)

 - && and (both of them are true then it is true)

 - null is an object !?!?!?!?
 - array is an object

### variables

- = and == not the same (assign a value or do a comparaison)

- var age; give undefined

- array is zero indexed (first element is at index 0)

- ++ and += add 1 or other and then reassign it to the variables

### Expression and statement

- statement is intiate a variable or a object || add more thing to it

- expression is in age = 1 + (age * 2) it is 
    - 2
    - age * 2
    - 1 + (age * 2)
    - age = 1 + (age * 2)

### Decision

- group statement with curly brace

- if (true) else (false)


### Loops

- iterator are the for (let student of students)

- while stop when condition is false


### Functions

- backtitle `` interpolate string where you can put variable in it

## Three pillar of JS

### Types / Coercion

- not all is object is js

- variable dont have type, value do

- undefined can say it doesnt exist or it doesnt has been declare for now

#### Nan value

- NaN is here to indicate that there is an invalid mathematics operator

#### new

- dont use it on string number or boolean

#### Converting types

- coercion is converting from one type to another it is the action

- + operator is overloaded to do string concatenation if at least one element is a string

- trick : do 42+"" transform 42 to a string because of the before talked overload

- only do math operation if all type are number

- all data that come from DOM are string

- implicit boolean coercion is done in if condition and in the while loop condition

- !! call the boolean coercion

#### Equality


- == doesnt check value but allow coercion (type different)
- === doesnt check value and type but disallow coercion (type same)

- if type are the same and you are 100% sure == and === do the same

### Scopes / Closures

#### Nested Scope

- if declared value no prefix (let,var,const) global scope for initialize variable

- undefined /= undeclared
- undefined = declared but no value
- undeclared = not declared at all

#### Closure

#### Function Expressions

- fonction themselve value 
- can be assing to variable like a simple string,number

var name = function(){

} == anonymous function

var name = functoin name() {

} == named function expression

named function expression because it is descriptive on usage

#### IIFE

- Immediately invoked Function Expression

( function test() {
    console.log("saucisse")
}) (); -> get executed by the last parenthesis

- it create a scope in the block on the first parenthesis

#### Block Scoping

- let do the same as IIFE on the scope aspects

### Closure

- closure is when a function "rembers" the variables outside of it, even if you pass that function elsewher.

function ask(question){
    return function hodYourQuestion(){
        console.log(question)
    }
}

var myQuestion = ask("What is closure?")

myQuestion(); // What is closure ?

### this / prototypes

#### this

- A function's this references the execution context for that call, determined entrerly by how the function was calle

- ALL ABOUT THE CALL NOT THE FUNCTION ITSELF

- 4 rules to know which context will use this 
    - implicit binding rules : take the parent of the function that use this (at left of the dot)
    - with .call you can pass it in parameter (the context)

#### Prototypes

- prototypes work as a constructor like java

#### class

- like c++,java

class Test {
    constructor(teacher){
        this.teacher = teacher;
    }

    ask(question){
        console.log(this.teacher,question)
    }
}
