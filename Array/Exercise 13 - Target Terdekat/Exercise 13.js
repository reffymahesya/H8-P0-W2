function targetTerdekat(arr) {
  // you can only write your code here!

 if (arr.indexOf('x') == -1){
    return 0
  }
  var nilaiO = arr.indexOf('o')
  var a = arr.length

  for (i = 0; i < a; i++){
    if (arr[i] == 'x'){
      var kalkulasi = Math.abs(i - nilaiO)
        if (kalkulasi < i){
          return kalkulasi
        }
    }
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2