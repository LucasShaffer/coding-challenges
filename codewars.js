// Generic testing function... may need to update this later to accomidate for more than one function parameter.
function test(myFunction, input, exptected) {
  console.log(myFunction(input), exptected);
  console.log(myFunction(input) === exptected ? 'passed' : 'failed');
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  // Go for it
  let words = str.split(' ');
  let result = [];
  for (let i = 0; i < words.length; i++){
    result.push(words[i].split('').reverse().join(''));
  }
  return result.join(' ');
}

test(reverseWords, 'The quick brown fox jumps over the lazy dog.', 'ehT kciuq nworb xof spmuj revo eht yzal .god');
test(reverseWords, 'apple', 'elppa');
test(reverseWords, 'a b c d', 'a b c d');
test(reverseWords, 'double  spaced  words', 'elbuod  decaps  sdrow');
