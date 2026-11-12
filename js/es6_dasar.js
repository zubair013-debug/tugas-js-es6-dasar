// 01-manipulasi-array.js


// Demonstrasi push(), pop(), dan length
let keranjang = ['apel', 'pisang'];
console.log('Awal:', keranjang, '| Jumlah:', keranjang.length); // 2

// Menambah 1 data di akhir
keranjang.push('jeruk');
console.log('Setelah push:', keranjang, '| Jumlah:', keranjang.length); // 3

// Menghapus 1 data di akhir
keranjang.pop();
console.log('Setelah pop:', keranjang, '| Jumlah:', keranjang.length); // 2 (kembali ke jumlah awal)

// 02-operator-perbandingan.js

// Perbedaan == (Loose Equality) dan === (Strict Equality)
const angka = 10;
const teksAngka = '10';

console.log('10 == "10" :', angka == teksAngka);   // true (nilai sama)
console.log('10 === "10":', angka === teksAngka);  // false (tipe data beda: number vs string)

console.log('0 == false :', 0 == false);           // true
console.log('0 === false:', 0 === false);          // false

//03-perulangan-akumulasi.js
// Perulangan for dan variabel accumulator
let totalBelanja = 0;
const daftarHarga = [15000, 20000, 5000, 10000];

for (let i = 0; i < daftarHarga.length; i++) {
  totalBelanja += daftarHarga[i]; // Mengakumulasi nilai tiap iterasi
  console.log(`Iterasi ke-${i + 1}: total sementara = ${totalBelanja}`);
}

console.log('Total Akhir Belanja:', totalBelanja); // 50000

//  04-struktur-data-set.js
// Perbedaan Array (boleh duplikat) vs Set (wajib unik)
const daftarAbsensi = ['Budi', 'Siti', 'Budi', 'Andi', 'Siti'];
console.log('Data Array (dengan duplikat):', daftarAbsensi);

// Menghapus duplikat menggunakan Set
const absensiUnik = new Set(daftarAbsensi);
console.log('Data Set (unik):', absensiUnik);
console.log('Jumlah siswa hadir sebenarnya:', absensiUnik.size); // 3

// 05-pencarian-array.js
// Perbedaan indexOf() dan includes()
const peranUser = ['admin', 'editor', 'viewer'];

// indexOf() mengembalikan posisi index (atau -1 jika tidak ketemu)
console.log('Posisi index "editor":', peranUser.indexOf('editor')); // 1
console.log('Posisi index "guest" :', peranUser.indexOf('guest'));  // -1

// includes() mengembalikan boolean (true / false)
console.log('Apakah ada "admin"?', peranUser.includes('admin'));    // true
console.log('Apakah ada "guest"?', peranUser.includes('guest'));    // false