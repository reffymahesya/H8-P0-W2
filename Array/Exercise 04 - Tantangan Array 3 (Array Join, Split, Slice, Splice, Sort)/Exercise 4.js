var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
	input.splice(1, 1, "Roman Alamsyah Eshawary")
  input.splice(2, 1, "Provinsi Bandar Lampung")
  input.splice(5, 0, "Pria", "SMA Internasional Metro")
  console.log(input)

  var pisah = input[3].split("/")
  var rubah = pisah.join("-")

  switch(pisah[1]){
    case '05':
    pisah[1] = 'Mei'
    break
  }
  console.log(pisah[1])

  var tukar = pisah.sort(function(input, tukar){return tukar-input});
  console.log(tukar)

  console.log(rubah)

  var pisahNama = input[1].slice(0, 15)
  console.log(pisahNama)

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */