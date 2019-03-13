//input "hello world!"
//output
//"!dlrow olleh"

function balikString(kata) {
  var balik = ''
	for (i = kata.length - 1; i >= 0 ; i--){
		balik += kata[i]
	}
	return balik
}
console.log(balikString('Hello world!'))

