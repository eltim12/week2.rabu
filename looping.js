console.log("while-loop pertama")
var angka = 0;

while(angka < 20) {
  angka = angka + 2;
  console.log(angka+ " - i love coding")
}

console.log("while-loop kedua")
var nomor = 22;

while(nomor > 2) {
  nomor = nomor - 2;
  console.log(nomor+ " - i love coding");
}

console.log("========================")

console.log("for-loop pertama")
for (var angka1 = 1; angka1 < 21; angka1++) {
    console.log(angka1+ " - i love coding");
}

console.log("for-loop kedua")
for (var angka2 = 20; angka2 > 0; angka2--) {
    console.log(angka2+ " - i will become fullstack developer")
}

console.log("========================")

console.log("=====counter=====");

for (var counter = 1; counter <= 100; counter++) {
  console.log(counter);
}


console.log("=====ganjil genap=====");

for (var counter = 1; counter < 101; counter++) {
  if (counter % 2) {
    console.log("genap");
  } else {
    console.log("ganjil");
  }
}


console.log("=====pertambahan 2 kelipatan 3=====");

for (var counter = 1; counter < 101; counter+=2) {
  if (counter % 3 === 0) {
    console.log(counter+" kelipatan 3");
  } else {
    console.log(counter);
  }
}

console.log("=====pertambahan 5 kelipatan 6=====");

for (var counter = 1; counter < 101; counter+=5) {
  if (counter % 6 === 0) {
    console.log(counter+" kelipatan 6");
  } else {
    console.log(counter);
  }
}

console.log("=====pertambahan 9 kelipatan 10=====");

for (var counter = 1; counter < 101; counter+=9) {
  if (counter % 10 === 0) {
    console.log(counter+" kelipatan 10");
  } else {
    console.log(counter);
  }
}
