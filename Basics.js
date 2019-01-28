var quantity;
// This is how to create a variable
var quantity = 3;
// This is how to assign a value to the variable.
/*************** | Arrays |  ******************/
var colors;
colors = ['white', 'black', 'custom'];
//This is the preferred way of creating arrays.

var colors2;
colors2 = new Array('white', 'black', 'custome');
//This is least preferred because it uses the Array Constructor, however it accomplishes the same thing.

//Accessing values in an Array
//To retrieve the value from array, you meed to specify the index where it is located.

itemTwo = colors[1];
//This line will retrieve the second item in the array.

//To change a value in the array
colors[1] = 'blue';
//the second item in the array will change from black to blue.

var lengthOfArray;
lengthOfArray = colors.length;
//To find the length of an Array use this method.

/* ****************** | String Operator | ******************* */

//This is how to add two strings together.
var firstName   = 'Slim ';
var lastName    = 'Jim';
var fullName    = firstName + lastName;

//Sometimes may need to mix strings and numbers together.
var birthMonth  = 'May';
var birthDay    = 29;
var birthYear   = 1994 
var fullBirth   = birthMonth + ' ' + birthDay + ' ' + birthYear;
