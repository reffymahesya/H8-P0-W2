//Tugas 1

// function shoutOut(){
//   console.log('Halo Function!')
// }
// shoutOut()

function shoutOut1(){
  var halo = 'Halo Function!'
  return halo
}
console.log(shoutOut1())

// function shoutOut2(){
//   return 'Halo Function!'
// }
// console.log(shoutOut2())


//Tugas 2
var num1 = 5
var num2 = 6

function calculateMultiply(num1, num2){
  return num1 * num2
}
var hasilPerkalian = (calculateMultiply(num1, num2))
console.log(hasilPerkalian)

//Tugas 3
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name, age, address, hobby){
  return 'Nama saya ' + name + ', Umur saya ' + age + ', Alamat saya ' + address +', dan saya punya Hobby yaitu ' + hobby + '!'
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);