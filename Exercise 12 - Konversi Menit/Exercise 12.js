//Cara 1

function konversiMenit(menit) {
  // you can only write your code here!
  var Angka = menit
  var Jam = (menit/60)
  var pembulatanJam = Math.floor(Jam)
  var Menit1 = (Jam - pembulatanJam) * 60
  var pembulatanMenit1 = Math.round(Menit1)
  if (pembulatanMenit1 <= 9){
    return pembulatanJam + ':0' + pembulatanMenit1
  } else {
    return pembulatanJam + ':' + pembulatanMenit1
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//Cara 2
function konversiMenit(menit) {
  // you can only write your code here!
  var Menit1 = menit%60
  var Jam = (menit - Menit1) / 60
  if (Menit1 <= 9){
    return Jam + ':0' + Menit1
  } else {
    return Jam + ':' + Menit1
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00