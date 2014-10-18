  --------------------
Language: Javascript
--------------------

-------------------- Links
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://github.com/mbostock/d3/wiki/
https://stackoverflow.com/questions/11088303/how-to-convert-to-d3s-json-format
http://www.w3schools.com/jsref/
http://jsperf.com/new-array-vs-splice-vs-slice/19
http://www.nodebeginner.org/#javascript-and-nodejs

-------------------- Inspection and Output:
typeof a;
console.log();

-------------------- Good Style
"use strict";

-------------------- Compilation
node <filename>

-------------------- Imports
---------- Web
<script src="myFile.js"></script>

---------- Node
var noiseModule = require("./perlinNoise"); 

Write Files as:
(function(){
    module.exports.funcName = funcName;
    function funName(){};
})();



-------------------- Comments
// and /* */

-------------------- Whitespace and Statements
terminate statement with ;
whitespace doesnt matter


-------------------- Memory Management
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

-------------------- Value vs Reference 

Always pass by value 'value' of an object/array is a reference
Changing the value of a variable never changes the underlying
primitive or object, it just points the variable to a new primitive or
object.  However, changing a property of an object referenced by a
variable does change the underlying object.


-------------------- Scope
//functions get their own scope.

//Closures:
//functions defined in other functions have access to that scope

---------------------------------------- Basic Data Types
64-bit double as base number type.
null
undefined
Boolean
String
Symbol (in version 6)

-------------------- Arithmetic
+- * ()
/ does decimals

Infinity;
-Infinity;
NaN;

+=, *=
++ --

Math.random();

-------------------- Bitwise
<< >>
float is converted to signed int up to 32 bits

-------------------- Strings
'abc';
"abc";

concatenated with +
"hello" + "world";

//Access:
"string".charAt(0);
"string".substring(0,5);
"string".length; //Not a function

-------------------- Booleans
! negates

// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.
// Note that 0 is falsy and "0" is truthy, even though 0 == "0".


-------------------- Comparisons and Logic
|| and && for logical or/and; //These short circuit
== != //These type convert
< > <= >=

=== and !== are strict comparison operators:

        Two strings are strictly equal when they have the same
        sequence of characters, same length, and same characters in
        corresponding positions.  Two numbers are strictly equal when
        they are numerically equal (have the same number value). NaN
        is not equal to anything, including NaN. Positive and negative
        zeros are equal to one another.  Two Boolean operands are
        strictly equal if both are true or both are false.  Two
        objects are strictly equal if they refer to the same Object.
        Null and Undefined types are == (but not
        ===). [I.e. Null==Undefined (but not Null===Undefined)]



-------------------- Variables
definition:
var someVar = 5 || "default"; //Short circuited
var someOther; //Set to undefined



---------------------------------------- Data Structures

-------------------- Arrays
var myArray = ["something",45,true];

Properties:
myArray.length;


Access: 
myArrray[1];

myArray.push("world");

-------------------- Objects
var myObj = {key1: "something", key2: "blah"};

myObj.hasOwnProperty("key1"); //Only if in the object, not prototype

Access:
myObj['key1'];
//Or dot syntax:
myObj.key1;

myObj.nonExistentKey; // = undefined;

// When functions attached to an object are called, they can access the object
// they're attached to using the this keyword.
myObj = {
    myString: "Hello world!",
    myFunc: function(){
        return this.myString;
    }
};
myObj.myFunc(); // = "Hello world!"


---------- Object Creation:
//object creation:
var Person = function(name){
    if(!this instanceof Person){
	return new Person(name);
    }
    this.name = name;
}

//Methods
Person.prototype.say = function(){
    return "blah";
}

var person1 = new Person('bob');


-------------------- Constructors
var child = Object.create(parent, {
    age : { value: 2}
    });

var Person = function(name){
    if(!(this instanceof Person)){
    	      return new Person(name);
    }   

    this.name = name;

}


// When you call a function with the new keyword, a new object is created, and
// made available to the function via the this keyword. Functions designed to be
// called like that are called constructors.

var MyConstructor = function(){
    this.myNumber = 5;
}
myNewObj = new MyConstructor(); // = {myNumber: 5}
myNewObj.myNumber; // = 5

// Every JavaScript object has a 'prototype'. When you go to access a property
// on an object that doesn't exist on the actual object, the interpreter will
// look at its prototype.

// Some JS implementations let you access an object's prototype on the magic
// property __proto__. While this is useful for explaining prototypes it's not
// part of the standard; we'll get to standard ways of using prototypes later.
var myObj = {
    myString: "Hello world!"
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase()
    }
};

myObj.__proto__ = myPrototype;
myObj.meaningOfLife; // = 42


// There's no copying involved here; each object stores a reference to its
// prototype. This means we can alter the prototype and our changes will be
// reflected everywhere.
myPrototype.meaningOfLife = 43;
myObj.meaningOfLife; // = 43



---------------------------------------- Control Structures

//IF
if(true || false){};

//WHILE
while(true){};
do {} while(true);

//FOR
for(var i = 0; i < 5; i++){}

for(var x in a){
    if(a.hasOwnProperty(x)){

    }
}

//Switch:
//checks for equality with ===
//uses break;
switch(something){
    case 'A':
    2+2;
    break;
}

------------------------------ Functions
//first class.
function myFunction(aParam){
    return aParam;
}

myFunction("foo");

//Self modifying function
var scareMe = function() {
    //first time through
    //then reassignment:
    scareMe = function(){
	//blah
    };
    
}

// We can also specify a context for a function to execute in when we
// invoke it using 'call' or 'apply'.

var anotherFunc = function(s){
    return this.myString + s;
}
anotherFunc.call(myObj, " And Hello Moon!"); // = "Hello World! And Hello Moon!"

// The 'apply' function is nearly identical, but takes an array for an
// argument list.

anotherFunc.apply(myObj, [" And Hello Sun!"]); // = "Hello World! And Hello Sun!"

// This is useful when working with a function that accepts a sequence
// of arguments and you want to pass an array.

Math.min(42, 6, 27); // = 6
Math.min([42, 6, 27]); // = NaN (uh-oh!)
Math.min.apply(Math, [42, 6, 27]); // = 6

// But, 'call' and 'apply' are only temporary. When we want it to
// stick, we can use bind.

var boundFunc = anotherFunc.bind(myObj);
boundFunc(" And Hello Saturn!"); // = "Hello World! And Hello Saturn!"

// Bind can also be used to partially apply (curry) a function.

var product = function(a, b){ return a * b; }
var doubler = product.bind(this, 2);
doubler(8); // = 16



------------------------------ Examples



---------------------------------------- Language Specific Concepts:

---------- Currying:
//general purpose curry function:
function curry(fn){
    var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1);
    return function() {
	var new_args = slice.call(arguments),
	args = store_args.concat(new_args);
	return fn.apply(null,args);
    };
}

//usage of curry function:
var curried = curry(add, 1);
curried(10,10,10); //will produce 31



---------- Regex
//g = global, m = multiline, i = case insensitive
var re = /\\/gm;
//Or for runtime creation of the regex:
var re = new RegExp("\\\\","gm");
//Regex application
"blah\\".replace(re,"");


-------------------- Browser stuff:
setTimeout(aFunction,5000); //Five seconds time


-------------------- D3:

