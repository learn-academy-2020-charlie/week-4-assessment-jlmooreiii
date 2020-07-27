// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return “The array is empty.”
var collections = ['purple', 'blue', 'green', 'yellow', 'pink']
// Expected output example1 (can be a different order): [“yellow”, “blue”, “pink”, “green”]
// Expected output example2 (can be a different order): [“blue”, “green”, “pink”]
// Expected output example3 (can be a different order): [“pink”, “green”]
// Declare a function that can take in any array
const deleteAndShuffle = (array) => {
    if (array.length == 0) {
        return "The array is empty."
    } else {
        // Remove the first item of the array using .shift
        array.shift();
        //Create an array that is a copy of the arg array, so you can mess around with is as you do the randomizing
        let newArray = array.slice();
        // Create an empty array to hold the newly sorted array
        let newShiftedArray = [];
        while (newShiftedArray.length < array.length) {
            // Get a random number from the lenth of the OG array (minus the first value that was removed from the start.)
            let newRandom = Math.floor((Math.random() * (newArray.length)));
            // Select the random numbnereth element in the OG array and      .push it into the new array
            newShiftedArray.push(newArray[newRandom]);
            //Remove the randomth element from the OG array so it is no longer an option
            newArray.splice(newRandom, 1);
        }
        // Now that we have our newShiftedArray, reassign the arg array to be this new array
        array = newShiftedArray;
        return array;
    }
    return array;
}
// Test to see that the method works
console.log("-----CHALLENGE 1-----");
console.log("This is the original test array:");
console.log(collections);
console.log("Calling the method three times on the test array:");
console.log(deleteAndShuffle(collections));
console.log(deleteAndShuffle(collections));
console.log(deleteAndShuffle(collections));
console.log("\n");



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
// Declare a function that takes in any array.
const cubeAndSum = (array) => {
    // .map throught the array and get the cubed result of each number
    let cubedArray = array.map(value => {
        // If the element is not a number, skip the element
        if (typeof value == "number") {
            return value * value * value;
        }
    })
    // loop through the cubedArray and add the numbers together
    let sum = 0;
    for(let i = 0; i < cubedArray.length; i++) {
        sum = sum + cubedArray[i];
    }
    return sum
    // Return the sum
}
// Test to see that the method works
console.log("-----CHALLENGE 2-----");
console.log("This is the original test array: cubeAndSum1");
console.log(cubeAndSum1);
console.log("Calling the method on cubeAndSum1");
console.log(cubeAndSum(cubeAndSum1));
console.log("This is the original test array: cubeAndSum2");
console.log(cubeAndSum2);
console.log("Calling the method on cubeAndSum2");
console.log(cubeAndSum(cubeAndSum2));
console.log("\n");

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// Create a function that can take in any array of numbers
const getLeastAndGreatest = (array) => {
    // Just in case the user gives me a mixed array, I'm gonna throw all the numbers into a new array
    let justNumsArray = array.filter(value => typeof value == "number");
    // Then I will sort the array from least to greatest
    let sortedArray = justNumsArray.slice().sort((a,b) => a-b);
    // Then I will just take the first and last indexes ad add them to the new array.
    let leastAndGreatestArray = [];
    leastAndGreatestArray.push(sortedArray[0]);
    leastAndGreatestArray.push(sortedArray[sortedArray.length-1]);
    // Return the array of the least
    return leastAndGreatestArray;
}
// Test to see that the method works
console.log("-----CHALLENGE 3-----");
console.log("This is the original test array: nums1");
console.log(nums1);
console.log("Calling the method on nums1");
console.log(getLeastAndGreatest(nums1));
console.log("This is the original test array: nums2");
console.log(nums2);
console.log("Calling the method on nums2");
console.log(getLeastAndGreatest(nums2));
console.log("\n");

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
var myTest1 = "alt text"

// Declare a fucntion that can take any string as a param
const altCasing = (string) => {
    // Make an array of chars from the string arg
    let charArray = string.split("");
    // Declare a boolean of when to uppercase
    let timeToUpCase = false
    // Loop through the string
    for (let i = 0; i < charArray.length; i++) {
        // If there is a space, the function will skip to the next character and the casing sequence will not flip
        if (charArray[i] == " ") {
            timeToUpCase = timeToUpCase;
        // Else if the boolean is false, then make lower case
        } else if (timeToUpCase == false) {
            charArray[i] = charArray[i].toLowerCase();
            timeToUpCase = true;
        // Else if the boolean is true, then make upper case
          } else if (timeToUpCase == true) {
            charArray[i] = charArray[i].toUpperCase();
            timeToUpCase = false;
            }
    }
    // Join the array of changed chars to make the new string and return
    return charArray.join("");
}
// Test to see that the method works
console.log("-----CHALLENGE 4-----");
console.log("This is the original test array: testString1");
console.log(testString1);
console.log("Calling the method on testString1");
console.log(altCasing(testString1));
console.log("This is the original test array: testString2");
console.log(testString2);
console.log("Calling the method on testString2");
console.log(altCasing(testString2));

console.log("This is the original test array: myTest1");
console.log(myTest1);
console.log("Calling the method on myTest1");
console.log(altCasing(myTest1));
console.log("\n");




// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// Declare a function that takes two arrays
const combineArrays = (array1, array2) => {
    // First, I am going to join the arrays together
    newArray = array1.concat(array2);
    // Starting with the first element, compare it to the following numbers
    for (let i = 0; i < newArray.length; i++) {
        let testNumber = newArray[i];
        for (let j = i + 1; j < newArray.length; j++) {
            // If the test number has another instance of it, then delete the second instance of it
            if (testNumber == newArray[j]) {
                newArray.splice(j, 1);
            }
        }
    }
    return newArray;
}
// Test to see that the method works
console.log("-----CHALLENGE 5-----");
console.log("This is the original test array: arr1 and arr2");
console.log(arr1);
console.log(arr2);
console.log("Calling the method on arr1 and arr2");
console.log(combineArrays(arr1, arr2));


