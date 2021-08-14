// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// a.Programmatically subtract the value of the first element in the array from the value in the last element of the array. Print the result to the console.
console.log(ages.pop() - ages.shift());

// b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths.
ages.push(18)
console.log(ages.pop() - ages.shift());

// c.Use a loop to iterate through the array and calculate the average age. Print the result to the console.
for (let i = 0; i < ages.length; i++) {
    if (reducer = (accumulator, currentValue) => accumulator + currentValue);
}
let sumOfAges = ages.reduce(reducer)
let avergeOfAges = sumOfAges/ages.length
console.log(avergeOfAges);

// 2 a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let total = 0
for (let i = 0; i < names.length; i++) {
    total+=names[i].length
}
let average = total/names.length
console.log(average);

// 3.   How do you access the last element of any array?
// To access the last element of any array, I would use the array.length method and subracting 1 from the length array. 
// Subtracting 1 from the length array is due to indexs' in JavaScript start from 0. This means the last element's index would be the array length -1.

// 4.	How do you access the first element of any array?
// To acces the first element of any array, I would simply console.log the 0 index of the array. 
// ex. console.log(names[0]); returns the first element in names array.

// 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = []
for (let i = 0; i < names.length; i++) {
    total+=names[i].length
}
let lengths = names.map((element) => {
    return element.length;
});
console.log(lengths)
// b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for (let i = 0; i < names.lengths; i++); {
    console.log(names[0] + " " + names[1] + " " + names[2] + " " + names[3] + " " + names[4] + " " + names [5]);
} 

// 6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum = lengths.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
for (let i =0; i < names.length; i++); {
    console.log(sum);
}
// 7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
let word = "Hello";
let n = "2";

function howManyHellos(word, n) {
    do {
        word+=word;
        n--;
    } while (n > 0);
    return word
}
console.log(howManyHellos(word,n));

// 8.Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function createName (firstName, lastName) {
    console.log(firstName + " " + lastName)
}
console.log ('First', 'Last');

// 9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let array = [12, 2, 5 , 36 , 54]

 newTotal = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

if (newTotal > 100) {
    console.log(true);
} else {
    console.log(false);
}

// 10.Write a function that takes an array of numbers and returns the average of all the elements in the array.

let numbers = [2, 45, 87, 91, 21]

let totalTwo = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

let avg = totalTwo/numbers.length
console.log(avg);

// 11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let array1 = [14, 18, 89, 42, 5]

let array1Total= array1.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue    
});
let array1Avg = array1Total/array1.length
console.log(array1Avg);

let array2 = [5, 31, 54, 17, 21]

array2Total = array2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
let array2Avg = array2Total/array2.length

if(array1Avg > array2Avg) {
    console.log(true);
} else {
    console.log(false);
}

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true;
let moneyInPocket = "8";

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10) {
        return true;
    }
    return false;
} 

console.log(willBuyDrink(isHotOutside, moneyInPocket));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Create a new array from numberArray, with each element divisible by 2. 
let numberArray = [2, 18, 26, 82, 36]
let divisible = numberArray.map(function(numberArray) { // the array.map method is called with the numberArray as an argument. 
    return numberArray / 2 // the argument is then automatically called for each element as map loops through the original array. 
});

console.log(divisible)

// numberArray becomes new array, with each element now divisibe by 2. 