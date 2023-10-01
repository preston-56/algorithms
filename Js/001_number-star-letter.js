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
  // If n is less than 1, return an empty string
  if (n < 1) return "";

  // Initialize the output string with the first row, which is '1'
  var output = "1";

  // Start a loop from the second row (i = 2) up to the 'n' rows
  for (let i = 2; i <= n; ++i) {
    // Add a newline character to separate rows, then '1', followed by 'i-1' asterisks ('*'), and 'i'
    output += "\n1" + Array(i).join("*") + i;
  }

  // Return the generated pattern as a string
  return output;
}

// Test examples
console.log(pattern(3)); // Output the pattern for n = 3
console.log(pattern(10)); // Output the pattern for n = 10

/**Summary */

/**
 * The function generates a pattern with 'n' rows, where 'n' is a positive integer.
 * If 'n' is less than 1, it returns an empty string.
 * The pattern consists of rows, each starting with '1' and followed by asterisks ('*') increasing
 * in count by one, and then ending with the row number.
 * For example, the first row is '1', the second row is '1*2', the third row is '1**3', and so on.
 * The function uses a loop to construct each row and joins them with newline characters ('\n').
 * The generated pattern is returned as a string.
 */
