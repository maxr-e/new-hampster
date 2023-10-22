function isPalindrome(str) {
  // Step 1: Convert the string to lowercase and remove non-alphanumeric characters
  var processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Compare characters from both ends of the string
  var left = 0;
  var right = processedStr.length - 1;

  while (left < right) {
    if (processedStr[left] !== processedStr[right]) {
      return false; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }

  // Step 3: All characters matched, it is a palindrome
  return true;
}

// Example usage
var input = "level";
var isPalindromeValue = isPalindrome(input);
console.log(isPalindromeValue); // Output: true



function reverseString(str) {
  // Step 1: Use the split() method to convert the string into an array of characters
  var charArray = str.split("");

  // Step 2: Use the reverse() method to reverse the order of elements in the array
  var reversedArray = charArray.reverse();

  // Step 3: Use the join() method to convert the array back into a string
  var reversedString = reversedArray.join("");

  // Step 4: Return the reversed string
  return reversedString;
}

// Example usage
var input = "hello";
var reversed = reverseString(input);
console.log(reversed); // Output: "olleh"


// A program that prints the numbers from 1 to 100.
//But for multiples of three, print "Fizz" instead of the number,
//and for the multiples of five, print "Buzz." For numbers that are
//multiples of both three and five, print "FizzBuzz."
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}



function fibonacciSequence(n) {
  var sequence = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers

  // Calculate the subsequent Fibonacci numbers
  for (var i = 2; i <= n; i++) {
    var nextNumber = sequence[i - 1] + sequence[i - 2];
    if (nextNumber <= n) {
      sequence.push(nextNumber);
    } else {
      break;
    }
  }

  return sequence;
}

// Example usage
var input = 8;
var fibonacciSequenceArray = fibonacciSequence(input);
console.log(fibonacciSequenceArray); // Output: [0, 1, 1, 2, 3, 5, 8]



function sumPositiveNumbers(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }

  return sum;
}

// Example usage
var input = [1, -2, 3, -4, 5];
var positiveSum = sumPositiveNumbers(input);
console.log(positiveSum); // Output: 9



function findLargestElement(arr) {
  if (arr.length === 0) {
    return null; // Handle empty array case
  }

  var largest = arr[0]; // Assume the first element is the largest

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if a larger element is found
    }
  }

  return largest;
}

// Example usage
var array = [5, 9, 2, 15, 7];
var largestElement = findLargestElement(array);
console.log(largestElement); // Output: 15



//using Set() to store unique values
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Example usage
var array = [1, 2, 3, 3, 4, 5, 5];
var uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]



//sort array in ascending order using 'Array.sort()'
function sortArrayAscending(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

// Example usage
var array = [5, 2, 9, 1, 7];
var sortedArray = sortArrayAscending(array);
console.log(sortedArray); // Output: [1, 2, 5, 7, 9]



//find the missing number in a consecutive sequence
function findMissingNumber(arr) {
  var n = arr.length + 1; // Length of the expected consecutive sequence
  var sumExpected = (n * (n + 1)) / 2; // Sum of the expected sequence
  var sumActual = arr.reduce((sum, num) => sum + num, 0); // Sum of the given array

  return sumExpected - sumActual; // The difference is the missing number
}

// Example usage
var array = [1, 2, 3, 5, 6];
var missingNumber = findMissingNumber(array);
console.log(missingNumber); // Output: 4



// function that performs a pre-order traversal on a binary tree

// Definition for a binary tree node
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function preOrderTraversal(root) {
  if (root === null) {
    return []; // Return an empty array if the tree is empty
  }

  var result = []; // Array to store the pre-order traversal elements

  // Recursive function to perform the pre-order traversal
  function traverse(node) {
    if (node === null) {
      return;
    }

    result.push(node.val); // Visit the current node

    traverse(node.left); // Traverse the left subtree
    traverse(node.right); // Traverse the right subtree
  }

  traverse(root); // Start the traversal from the root node

  return result;
}

// Example usage
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

var preOrder = preOrderTraversal(root);
console.log(preOrder); // Output: [1, 2, 4, 5, 3]




//To write a Node.js script that reads a file, counts the occurrences of each word
//and outputs the results to the console, you can use the fs module for file system
//operations and basic JavaScript programming concepts. Here's an example of how you can accomplish this:
const fs = require('fs');

function countWordOccurrences(filename) {
  // Read the file asynchronously
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Remove punctuation and convert to lowercase
    const cleanedData = data.replace(/[^\w\s]/g, '').toLowerCase();

    // Split the cleaned data into an array of words
    const words = cleanedData.split(' ');

    // Create an object to store word occurrences
    const occurrences = {};

    // Iterate over each word and count its occurrences
    for (let word of words) {
      if (occurrences[word]) {
        occurrences[word]++;
      } else {
        occurrences[word] = 1;
      }
    }

    // Output the word occurrences to the console
    for (let word in occurrences) {
      console.log(`${word}: ${occurrences[word]}`);
    }
  });
}

// Usage: node script.js input.txt
const filename = process.argv[2];
countWordOccurrences(filename);


//Save the above code into a file (e.g., script.js) and run it using Node.js from the command line,
//providing the input file as an argument:
//node script.js input.txt
// with 'input.txt' replaced with the path of the file in question.




//To implement a RESTful API endpoint in Node.js that retrieves a list of users from
//a database and returns it as JSON, you can use a combination of the Express.js framework
//and a database library such as Mongoose for MongoDB. Here's an example:
const express = require('express');
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Create an Express application
const app = express();

// Define a route to retrieve all users
app.get('/users', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();

    // Return the users as JSON
    res.json(users);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//Make sure you have MongoDB installed and running locally, and replace the 'mongodb://localhost/mydatabase'
//with the appropriate connection string for your MongoDB database.

//Save the above code into a file (e.g., server.js) and run it using Node.js from the command line:

//node server.js

//This will start the server on port 3000. You can then make a GET request to http://localhost:3000/users to
//retrieve the list of users from the database, and the server will respond with the users as JSON.




//To create a Node.js server that listens on a specific port and responds with "Hello, World!" when accessed,
//you can use the http module that comes with Node.js. Here's an example:
const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response status and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//Save the above code into a file (e.g., server.js) and run it using Node.js from the command line:

//node server.js

//This will start the server on port 3000. You can then access the server by visiting http://localhost:3000 in
//your web browser or sending a GET request to that URL using a tool like cURL or Postman. The server will respond
//with "Hello, World!" as the response body.
