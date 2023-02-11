// Exercise 1. Convert the following highlighted identifiers to Camel Case notation:
// let someMonth;
// function theMonth();
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

// Exercise 2 - Example of numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression
// 4.5                                             //numeric literal expression
// "Hola! How are you?"                            //string literal expression
// true                                            //Boolean literal expression
// null                                            //null literal expression

// Exercise - Two examples of complex/variable expressions
// myFirstComplexExpression = 1/2 * 48 + 17;       //complex expression
// mySecondComplexExpressoin = 0.5 + 3.75      
// myFirstVariableExpression = 1/2 * x + 4/5;      //variable expression
// mySecondVariabbleExpression = 3/4 * x**2 + 5
 
// STEP 4 - 4.	Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, 
//Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
// let strFirstName;
// let strLastName;
// let strAddress;
// let strCity;
// let strState;
// let intZipCode;
// let intYourAge;
// let strReferralSource;
// let boolMayWeContactYou;

// STEP 5 - Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// let strFirstName = "Jose";
// let strLastName;
// strLastName = "Pereda";
// let intZipCode = 92154, strLastName = "Pereda";

// STEP 6 - Create a variable. 
// Add a number and a string and display the coerced result in the browser’s console window
// let myAge = 45;
// alert("No way you are " + myAge);

// STEP 7 - Create two variables. 
// For the first variable, add a Boolean and a string and display the coerced result
// For the second variable, add a number and a Boolean and display the coerced result 
// let sumBoleanAndString = true + " or False?";
// alert(sumBoleanAndString);
// let sumNumberAndBolean = 15 + false;
// alert(sumNumberAndBolean);

// STEP 8 - Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
// window.console.log(someString);
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';  // Fix by adding an escape character prior to apostrophy in word "I'm"
// window.console.log(someString);

// STEP 9 - Create a variable that produces a null value in the console window. 
// Then, create a variable that produces an undefined value in the console window.
// let nullValueVariable = null;
// window.console.log(nullValueVariable);
// let undefinedValueVariable = undefined;
// window.console.log(undefinedValueVariable);

// STEP 10 - Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined
// typeof "What's going on?";                  // string
// typeof  245;                                // number
// typeof  true;                               // boolean
// let truck = new Object();
// typeof  truck;                              // object
// let y;
// alert(y);                                   // undefined

// STEP 11 - Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
// alert("Hello " + "Jose Pereda" + ", welcome to the JavaScript class!");

// STEP 12 - Declare a variable called name and set it equal to your name. 
// Substitute your name in the previous alert string with the variable instead.
// let studentName = "Jose Pereda";
// alert("Hello " + studentName + ", welcome to the JavaScript class!");

// STEP 13 - Declare a variable called course and set it equal to “JavaScript”. 
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// let studentName = "Jose Pereda";
// let course = "JavaScript";
// alert("Hello " + studentName + ", welcome to the " + course + " class!");

// STEP 14 - Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//Hello Zak Ruvalcaba.
//Welcome to the JavaScript class! 
// let studentName = "Jose Pereda";
// let course = "JavaScript";
// alert("Hello " + studentName + ".\n" + "Welcome to the " + course + " class!");

// STEP 15 - Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.  
// let course = "JavaScript";
// let studentName = prompt("Enter your first and last name: ");
// alert("Hello " + studentName + ".\n" + "Welcome to the " + course + " class!");

// STEP 16 - Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// let studentName = prompt("Enter your first and last name: ");
// let course = prompt("What class are you taking? ");
// alert("Hello " + studentName + ".\n" + "Welcome to the " + course + " class!");

// STEP 17 - Declare a variable called x and assign it a value of 10. 
// Declare a variable called y and assign it a value of 20. 
// Display the sum of those two numbers in the console window. 
// let x = 10;
// let y = 20;
// window.console.log(x+y);

// STEP 18 - Declare a variable called x and assign it a value of 20. 
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
// let x = 20;
// x += 20;
// window.console.log(x);

// STEP 19 - Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window. 
// The result should be 100.
// let x = 20;
// x *= 5;
// window.console.log(x);

// STEP 20 - Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window. 
// The result should be 2. If you got 6.66 try again.
// let x = 20 % 3;
// x /= 1;
// window.console.log(x);

// STEP 21 - Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// let x = Number(prompt("Enter a first number between 0 and 5: "));
// let y = Number(prompt("Enter a second number between 6 and 10: "));
// let z = (x !== 0) && (y+x === 10);
// if (z === true) {
// window.console.log(z);
// }

// STEP 22 - Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// let x = "San Diego";
// let y = "Los Angeles";
// let z = x === y;
// window.console.log(z);