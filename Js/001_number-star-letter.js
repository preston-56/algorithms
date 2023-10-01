/**
 * Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)

Examples

pattern(3) should return "1\n1*2\n1**3", e.g. the following:

1
1*2
1**3

pattern(10): should return the following:

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10

 */

function pattern(n) {
  let output = "";

  // Outer loop: Iterate from 1 to "n" (inclusive)
  for (let i = 1; i <= n; i++) {
    // Inner loop: Iterate from 1 to "i" (inclusive)
    for (let j = 1; j <= i; j++) {
      // Check if "j" is 1 (the first iteration in the inner loop)
      if (j === 1) {
        // If it's the first iteration, add "1" to the "output"
        output += "1";
      } else {
        // If it's not the first iteration, add "*" followed by "i" (current outer loop value) to the "output"
        output += "*" + (i === j ? i : "");
      }
    }

    /** After each inner loop completes, add a newline character "\n" to the "output"
     unless it's the last iteration of the outer loop
    */
    output += i === n ? "" : "\n";
  }

  // Return the final "output" string, which contains the pattern
  return output;
}

// Test examples
console.log(pattern(3)); // Output the pattern for n = 3
console.log(pattern(10)); // Output the pattern for n = 10

/**
 * The code defines a function called "pattern" that takes a single parameter "n," representing the number of rows in the pattern.
 * It initializes an empty string variable called "output" to store the pattern to be generated.
 * The code then uses nested loops: an outer loop (controlled by the variable "i") iterates from 1 to "n" to determine the number of rows in the pattern,
 * while an inner loop (controlled by the variable "j") iterates from 1 to "i" to determine the number of characters in each row.
 * Inside the inner loop, conditional statements are used to decide whether to add "1" or asterisks followed by the current row number (i) to the "output" string.
 * After each inner loop completes for a row, a newline character ("\n") is added to "output" unless it's the last row.
 * Finally, the function returns the "output" string, which contains the complete pattern.
 * Test examples are provided to demonstrate the function's functionality.
 */
