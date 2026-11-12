// 01-manipulasi-array.js
// Membuat array awal berisi daftar hobi
let daftarHobiBudi = ["Membaca", "Coding", "Bersepeda"];

// Menambahkan elemen baru ke akhir array menggunakan push()
daftarHobiBudi.push("Fotografi");
console.log("Setelah push:", daftarHobiBudi);

// Menghapus elemen terakhir dari array menggunakan pop()
let hobiDihapus = daftarHobiBudi.pop();
console.log("Elemen yang dihapus:", hobiDihapus);
console.log("Setelah pop:", daftarHobiBudi);

// Menghitung jumlah total elemen di dalam array menggunakan length
console.log("Jumlah hobi sekarang:", daftarHobiBudi.length);

// 02-operator-perbandingan.js
let angkaBudi = 10;      // Tipe data Number
let teksBudi = "10";     // Tipe data String

// Operator == (Loose Equality): hanya membandingkan nilai tanpa peduli tipe data
console.log("Apakah 10 == '10'?", angkaBudi == teksBudi); // Hasil: true

// Operator === (Strict Equality): membandingkan nilai DAN tipe data secara ketat
console.log("Apakah 10 === '10'?", angkaBudi === teksBudi); // Hasil: false

// 03-perulangan-akumulasi.js
let nilaiUjianBudi = [80, 90, 75, 85, 95];
let totalNilai = 0; // Variabel akumulator untuk menampung jumlah nilai

// Perulangan for untuk menjumlahkan seluruh isi array ke dalam totalNilai
for (let i = 0; i < nilaiUjianBudi.length; i++) {
  totalNilai += nilaiUjianBudi[i];
}

console.log("Total akumulasi nilai:", totalNilai);
console.log("Rata-rata nilai:", totalNilai / nilaiUjianBudi.length);

// 04-set-unique.js
// Array biasa mengizinkan adanya data ganda (duplikat)
let angkaDuplikatBudi = [1, 2, 2, 3, 4, 4, 5, 1];

// Set adalah struktur data yang otomatis menghapus nilai duplikat (hanya menyimpan data unik)
let angkaUnik = new Set(angkaDuplikatBudi);

// Mengembalikan Set menjadi Array menggunakan spread operator (...)
let hasilArrayUnik = [...angkaUnik];

console.log("Array awal:", angkaDuplikatBudi);
console.log("Array tanpa duplikat:", hasilArrayUnik);

// 05-pencarian-array.js
let daftarBuahBudi = ["Apel", "Jeruk", "Mangga", "Pisang"];

// indexOf() mencari posisi indeks elemen (mengembalikan -1 jika tidak ditemukan)
let posisiMangga = daftarBuahBudi.indexOf("Mangga");
console.log("Mangga berada di indeks ke:", posisiMangga);

// includes() mengecek apakah elemen ada di dalam array (hasilnya true atau false)
let adaAnggur = daftarBuahBudi.includes("Anggur");
console.log("Apakah ada Anggur di dalam daftar?", adaAnggur);

// 06-objek.js
// Membuat object literal yang memiliki objek di dalamnya (nested object)
let profilBudi = {
  nama: "Budi Santoso",
  kelas: "XI RPL",
  alamat: {
    jalan: "Jl. Merdeka No. 10",
    kota: "Makassar",
    kodePos: 90111
  }
};

// Mengakses properti utama dan properti di dalam nested object menggunakan tanda titik (.)
console.log("Nama Siswa:", profilBudi.nama);
console.log("Kota Tinggal:", profilBudi.alamat.kota);

// 07-fungsi.js
// Bentuk function biasa (Function Declaration)
function sapaBiasa(nama) {
  return "Halo, " + nama;
}

// Bentuk Arrow Function (=>) dilengkapi Default Parameter jika argumen kosong
const sapaBudi = (nama = "Teman") => {
  return "Selamat belajar JavaScript, " + nama + "!";
};

console.log(sapaBudi("Andi")); // Menggunakan argumen yang dikirim
console.log(sapaBudi());       // Menggunakan nilai default ("Teman")

//  08-dom.js
// Mengambil elemen HTML berdasarkan atribut id menggunakan getElementById
const elemenJudulBudi = document.getElementById("judul-budi");
const tombolUbah = document.getElementById("tombol-ubah");

// Mengubah isi teks elemen HTML saat tombol diklik
tombolUbah.addEventListener("click", () => {
  elemenJudulBudi.textContent = "Teks Berhasil Diubah Lewat DOM!";
  elemenJudulBudi.style.color = "blue";
});

// 09-template.js
let namaSiswaBudi = "Budi";
let materiBelajar = "JavaScript ES6";
let jumlahTugas = 9;

// Template Literals menggunakan tanda backtick (`) dan ${} untuk menyisipkan variabel langsung
let kalimatLaporan = `Halo, saya ${namaSiswaBudi}. Hari ini saya telah menyelesaikan ${jumlahTugas} file tugas materi ${materiBelajar}.`;

console.log(kalimatLaporan);


