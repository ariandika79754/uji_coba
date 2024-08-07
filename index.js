//Exercise Variable
// Deklarasi variabel menggunakan let
let name = "Ari Andika Leva Pratama";
let age = 20;
let university = "Politeknik Negeri Lampung";
let citizen = "Desa Rawa Selapan, Kec. Candipuro, Kab. Lamsel, Lampung, Indonesia";

// Cetak variabel-variabel tersebut ke console
console.log(`Nama saya ${name}, saya berusia ${age} tahun, saya dari universitas ${university} dan berasal dari ${citizen}.`);

//Exercise Function
// Mendefinisikan fungsi animal
function animal(name, type) {
    return `${name} merupakan binatang dengan jenis ${type}`;
}

// Memanggil fungsi animal dengan argumen
const result = animal("Anjing", "Hewan Mamalia");

// Mencetak hasilnya ke console
console.log(result);


// Exercise Loop
// Membuat array berisi lima nama teman
const friends = ["Adnan", "Angga", "Raka", "Ari", "Metha"];

// Menggunakan loop for untuk mencetak setiap nama ke console
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}


// Exercise Class

// Mendefinisikan class Mahasiswa
class Mahasiswa {
    // Constructor untuk menginisialisasi properti name dan department
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    // Method introduction untuk mencetak string perkenalan
    introduction() {
        console.log(`Halo, nama saya ${this.name} dan saya dari jurusan ${this.department}.`);
    }
}

// Membuat objek dari class Mahasiswa
const mahasiswa1 = new Mahasiswa("Ari Andika Leva Pratama", "Manajemen Informatika");

// Memanggil method introduction
mahasiswa1.introduction();

// BONUS 
// Mendefinisikan kelas Perpustakaan
class Perpustakaan {
    // Constructor untuk menginisialisasi properti books sebagai array kosong
    constructor() {
        this.books = [];
    }

    // Metode addBook untuk menambahkan buku ke dalam array books
    addBook(book) {
        this.books.push(book);
    }

    // Metode showBooks untuk mencetak setiap judul buku yang ada di perpustakaan
    showBooks() {
        console.log("Daftar Buku di Perpustakaan:");
        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i]);
        }
    }
}

// Membuat objek dari kelas Perpustakaan
const perpustakaan = new Perpustakaan();

// Menambahkan buku ke dalam perpustakaan
perpustakaan.addBook("Matematika");
perpustakaan.addBook("Bahasa Inggris");
perpustakaan.addBook("Pemrograman JavaScript");
perpustakaan.addBook("Bahasa Indonesia");

// Menampilkan daftar buku di perpustakaan
perpustakaan.showBooks();
