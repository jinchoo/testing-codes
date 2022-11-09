const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function containscommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containscommonItems(array1, array2));
// the solution above is O(a*b) because we have two nested loops but the array1 and array2 are not the same length.  If they were the same length, then the solution would be O(n^2) because we would have one nested loop.
