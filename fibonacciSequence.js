function fibonacciSequence(index, memo = []) {
    // Base cases: if index is 0 or 1, return the corresponding Fibonacci number
    if (index == 0) {
        return 0;
    } else if (index == 1) {
        return 1;
    }
    
    // If the Fibonacci number has already been calculated, return it
    if (memo[index] !== undefined) {
        return memo[index];
    }

    // Calculate the Fibonacci number recursively
    let fibonacciNumber = fibonacciSequence(index - 1, memo) + fibonacciSequence(index - 2, memo);

    // Store the calculated Fibonacci number in the memoization cache for future use
    memo[index] = fibonacciNumber;

    // Return the calculated Fibonacci number
    return fibonacciNumber;
}

// Calculate the first six Fibonacci numbers and store them in the 'sequence' variable
let sequence = '';
for (let i = 0; i < 6; i++) {
    sequence += fibonacciSequence(i) + ' ';
}

// Print the first six Fibonacci numbers separated by spaces
console.log(sequence);
