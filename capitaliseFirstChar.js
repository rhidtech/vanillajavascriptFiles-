// create a var that stores the name user dnters via prompt
var name = prompt("what is your name");

// isolate the first character
var firstChar = name.slice(0,1);

// capitalise the first character  firstChar = firstChar.toUpperCase();
var UpperCaseFirstChar = firstChar.toUpperCase();

// isolate the rest of the name
var restOfName = name.slice(1, name.length);

// change restOfName to lower case :
 restOfName = restOfName.toLowerCase();

// concactenate the first Character with the rest  of the name
var CapitalisedName = UpperCaseFirstChar + restOfName;

// use capitalised version of their name to get an alert
alert = ( "Hello, " + CapitalisedName);
