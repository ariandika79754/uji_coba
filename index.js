// Deklarasi variabel menggunakan let
let name = "Ari Andika Leva Pratama";
let age = 20;
let university = "Politeknik Negeri Lampung";
let citizen = "Indonesia";

// Cetak variabel-variabel tersebut ke console
console.log(`Nama saya ${name}, saya berusia ${age} tahun, saya dari universitas ${university} dan berasal dari ${citizen}.`);


// Mendefinisikan fungsi animal
function animal(name, type) {
    return `${name} merupakan binatang dengan jenis ${type}`;
}

// Memanggil fungsi animal dengan argumen
const result = animal("Ari", "Manusia");

// Mencetak hasilnya ke console
console.log(result);

// Membuat array berisi lima nama teman
const friends = ["Adnan", "Angga", "Raka", "Ari", "Metha"];

// Menggunakan loop for untuk mencetak setiap nama ke console
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

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
