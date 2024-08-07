// Deklarasi variabel menggunakan let
let name = "Ari Andika Leva Pratama";
let age = 23;
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
