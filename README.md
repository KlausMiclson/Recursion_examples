# Recursion_examples
Recursion Algorithm: Fibonacci Sequence Generator
This is a JavaScript implementation of the Fibonacci sequence generator using recursion and memoization.

Overview
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers. For example, the first six Fibonacci numbers are:

0, 1, 1, 2, 3, 5

This algorithm uses recursion to generate the Fibonacci numbers, with memoization to improve performance. Memoization is a technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. This prevents redundant calculations and improves the overall performance of the algorithm.

Usage
To use this algorithm, simply call the 'fibonacciSequence' function with the index of the Fibonacci number to be calculated. For example:

// Calculate the 10th Fibonacci number
let fibonacciNumber = fibonacciSequence(10);

// Print the result
console.log(fibonacciNumber); // Output: 55

You can also generate a sequence of Fibonacci numbers by calling the fibonacciSequence function with a series of indices. For example:

// Generate the first 10 Fibonacci numbers
let sequence = '';
for (let i = 0; i < 10; i++) {
    sequence += fibonacciSequence(i) + ' ';
}

// Print the result
console.log(sequence); // Output: 0 1 1 2 3 5 8 13 21 34

Performance
This algorithm has a time complexity of O(n) and a space complexity of O(n), where n is the index of the Fibonacci number to be calculated. The use of memoization improves the performance of the algorithm by preventing redundant calculations.

License
This algorithm is released under the MIT License. Feel free to use, modify, and distribute it as needed.




