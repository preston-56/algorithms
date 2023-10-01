/**
 * Sum of two positive integers
 
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
 * No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

 */

function sumTwoSmallestNumbers(numbers) {
  // Sort the array in ascending order
  numbers.sort((a, b) => a - b);

  // Sum the first two elements (the two lowest positive numbers)
  return numbers[0] + numbers[1];
}

// Example usage:
const result1 = sumTwoSmallestNumbers([19, 5, 42, 2, 77]); // Output: 7
const result2 = sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]); // Output: 3453455

console.log(result1);
console.log(result2);

/**
 * SUMMARY:
 * This code defines a function called `sumTwoSmallestNumbers` that calculates
 * the sum of the two smallest positive integers in an input array. The process
 * begins by sorting the input array in ascending order using the `sort` method,
 * ensuring that the smallest numbers are at the beginning of the array. Then,
 * it returns the sum of the first two elements of the sorted array, which are
 * the two lowest positive integers. This approach is efficient and concise,
 * making it an effective solution for finding the sum of the two smallest
 * numbers in an array of positive integers.
 */
