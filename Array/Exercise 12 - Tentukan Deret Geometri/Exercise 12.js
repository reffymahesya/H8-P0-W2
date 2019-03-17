function tentukanDeretGeometri(arr) {
  // you can only write your code here!

  var deret = arr.length
  var deret1 = arr.length-1
  var deret2 = arr.length-2

  for (i = 0; i < deret; i++){
    if (arr[i+1] / arr[i] == arr[deret1] / arr[deret2]){
      return true
    } else {
      return false
    }
  }
}


// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false