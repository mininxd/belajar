// Array warna dengan hex code, bisa 3digit bisa 6digit
var warna = [
 '#f00',
 '#0f0',
 '#00f',
 '#ff0',
 '#0ff',
 '#f0f',
 '#7af',
 '#f7a',
 '#7fa',
 '#a7f',
 '#af7'
]

setInterval(function() {
 // Variabel acak dan acakBg
var acak = Math.floor(Math.random() * warna.length);
var acakBg = Math.floor(Math.random() * warna.length);

//Masukan data warna kedalam html dengan class "text"
$('.text').css('color',warna[acak]);

//Untuk menghindari kesamaan dari warna teks kita acak ulang jika kedeteksi untuk backgroundnya
if(acak.toString().includes(acakBg.toString())) {
  acakBg = Math.floor(Math.random() * warna.length);
  // jika gk ada yg sama acak seperti biasa
} else {
$('.text').css('background-color',warna[acakBg]);
}

//milisecond 
}, 250); 
