function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  
  var deret = arr.length
  var deret1 = arr.length-1
  var deret2 = arr.length-2

  for (i = 0; i < deret; i++){
    if (arr[i+1] - arr[i] == arr[deret1] - arr[deret2]){
      return true
    } else {
      return false
    }
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false