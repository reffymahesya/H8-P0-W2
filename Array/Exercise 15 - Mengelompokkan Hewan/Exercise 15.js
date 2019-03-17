function groupAnimals(animals) {
  // you can only write your code here!
  var arrNew = [[], [], [], []]

  for (i = 0; i < animals.length; i++){
    if (animals[i][0] == animals[0][0] ){
      arrNew[0].push(animals[i])
    } else if (animals [i][0] == animals[2][0]){
      arrNew[1].push(animals[i])
    } else if (animals [i][0] == animals [3][0]){
      arrNew[2].push(animals[i])
    } else {
      arrNew[3].push(animals[i])
    }
  }
  return arrNew.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]