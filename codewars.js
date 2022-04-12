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


function findArithmatic(arr) {
  function findSteps(arr) {
    let steps = [];
    for (let i = 1; i < arr.length; i++) {
      let step = arr[i] - arr[i - 1];
      steps.push(step);
    }
    return steps;
  }

  function countSteps(arr) {
    let stepCounts = [];
    let stepCount = 1;
    //[3, 3, 1, 1, 1, 3, 1, 1, 1]
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === arr[i + 1]) {
        stepCount++;
      } else if (stepCount > 1) {
        stepCounts.push(stepCount + 1);
        stepCount = 1;
      } else {
        stepCount = 1;
      }
    }
    return stepCounts;
  }

  function countArith(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      let n = arr[i] - 2;
      result += (n*(n+1))/2;
    }
    return result;
  }
  let steps = findSteps(arr);
  let stepCounts = countSteps(steps);
  return countArith(stepCounts);
}

test(findArithmatic, [1, 3, 5, 9], 1);
test(findArithmatic, [1, 3, 5, 7], 3);
test(findArithmatic, [-10, -7, -4, -3, -2, -1, 2, 3, 4, 5], 7);
test(findArithmatic, [1, 2, 3, 4, 5], 6);
test(findArithmatic, [1, 2, 3, 4, 5, 6], 10);
