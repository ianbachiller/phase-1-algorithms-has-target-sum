function hasTargetSum(array, target) { 
  // Write your algorithm here
  for (let a = 0; a < array.length; a++) {
    for (let b = a+1; b < array.length; b++) {
      if (array[a] + array[b] === target) {
        console.log(`${array[a]} and ${array[b]}: true`);
        return true;
      }
    }
  }
  return false
}
//Problem in my own words
  //so there should be a function called hasTargetSum that will take two types of inputs: an array (full of integers) and an integer. ;=
  //The function should return true if there' two numbers in the array that when added will result in the integer that was given as an input.
//Test cases
  //array input: [1,3,6,32,12,4,3], 10
  //Will return true because 6 and 4 when added is 10
  //array input: [1,2,7,90,56,4,34], 10
  //will return false because no pair will result in 10
//

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
  //will use quadratic notation (O(n^2)
    //loop through the input
    //and for every element, add that element to the other elements
    //if for any instance during the loops there is equal to the integer input, stop, and return 
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
