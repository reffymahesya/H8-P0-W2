function groupAnimals(animals) {
  // you can only write your code here!
  var arrNew1 = []
  var arrNew2 = []
  var arrNew3 = []
  var arrNew4 = []
  var result = []

  for (i = 0; i < animals.length; i++){
    if (animals[i][0] == animals[0][0] ){
      arrNew1.push(animals[i])
    } else if (animals [i][0] == animals[2][0]){
      arrNew2.push(animals[i])
    } else if (animals [i][0] == animals [3][0]){
      arrNew3.push(animals[i])
    } else {
      arrNew4.push(animals[i])
    }
  }
  result.push(arrNew3)
  result.push(arrNew1)
  result.push(arrNew2)
  if (arrNew4.length >= 1){
    result.push(arrNew4)
  }
return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// function groupAnimals(animals) {
//   // you can only write your code here!
//   var arrNew1 = []
//   var arrNew2 = []
//   var arrNew3 = []
//   var arrNew4 = []
//   var result = []

//   for (i = 0; i < animals.length; i++){
//     if (animals[i][0] == animals[0][0] ){
//       arrNew1.push(animals[i])
//     } else if (animals [i][0] == animals[2][0]){
//       arrNew2.push(animals[i])
//     } else if (animals [i][0] == animals [3][0]){
//       arrNew3.push(animals[i])
//     } else {
//       arrNew4.push(animals[i])
//     }
//   }
//   result.push(arrNew3)
//   result.push(arrNew1)
//   result.push(arrNew2)
//   if (arrNew4.length >= 1){
//     result.push(arrNew4)
//   }
//   return result
// }

// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// function groupAnimals(animals) {
//     // you can only write your code here!
//     var i = 0;
//     var check = [];
//     var output1 = [];
//     var output2 = [];
//     var output3 = [];
//     var output4 = [];
//     var result1 = [];
//     var l = animals.length;
//     while (i < l){
//         if (output1.length == check.length || output1[0][0] == animals[i][0]){
//             output1.push(animals[i]);
//         } 
//         else if (output2.length == check.length || animals[i][0] == output2[0][0]){
//             output2.push(animals[i]);
//         }
//         else if (output3.length == check.length || animals[i][0] == output3[0][0]){
//             output3.push(animals[i]);
//         }
//         else if (output4.length == check.length || animals[i][0] == output4[0][0]){
//             output4.push(animals[i]);
//         }
//     i++
//     }
//     result1.push(output2);
//     result1.push(output1);
//     result1.push(output3);
//     if (output4.length >= 1){
//     result1.push(output4);
//     }
//     return result1;
//   }
  
  
//   // TEST CASES
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


// function groupAnimals(animals) {
//   // you can only write your code here!
  
//   var a= animals.length
//   var urut0 = []
//   var urut1 = []
//   var urut2 = []
//   var hasil =0

//   for(var i=0; i< a; i++){
//     if (animals[i][0] === 'a'){
//       urut0.push(animals[i])
//     } if(animals[i][0] === 'c'){
//       urut1.push(animals[i])
//     } if(animals[i][0] === 'k'){
//       urut2.push(animals[i])
//     }
//   }
// return urut0 + urut1 + urut2
// }

// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


// function groupAnimals(animals){
//   animals.sort()
//   var result = []

//   for (var i = 0; i < animals.length; i++){
//     var found = false
//     for (var j = 0; j < result.length; j++){
//       if (result[j][0][0] == animals[i][0]){
//         found = true
//         result[j].push(animals[i])
//       }
//     }
//     if (found == false){
//       result.push([animals[i]])
//     }
//   }
//   return result
// }

// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]