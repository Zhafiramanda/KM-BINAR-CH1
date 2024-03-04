// Meminta untuk memasukkan nama
var nama = prompt("Siapa nama mu?");

// Meminta untuk menentukan apakah mereka ingin masuk universitas
var studentWish = prompt("Apakah kamu ingin masuk universitas?");

// Memeriksa apakah ingin masuk universitas
if (studentWish === "MAU") {
    // Jika ingin masuk universitas, meminta nilai akhir SMA/SMK
    var nilaiAkhirSMA = Number(prompt("Berapa nilai akhir SMA/SMK mu?"));

    // Memeriksa apakah nilai akhir SMA/SMK memenuhi syarat untuk masuk universitas
    if (nilaiAkhirSMA < 30) {
        // Jika nilai akhir di bawah 30, menampilkan pesan ngga mungkin masuk universitas
        alert("Tidak mungkin masuk universitas.");
    } else {
        // Jika nilai akhir memenuhi syarat, menghitung peluang masuk universitas
        var chanceGetUniv = Math.random() * 100;

        // Memeriksa kategori nilai akhir SMA/SMK dan peluang masuk universitas
        if (nilaiAkhirSMA < 50) {
            // Jika nilai akhir di bawah 50, menampilkan pesan berdasarkan peluang masuk universitas
            if (chanceGetUniv < 50) {
                alert("Hmm, kemungkinan kamu kecil masuk universitas.");
            } else {
                alert("Hmm, kemungkinan kamu bisa masuk universitas.");
            }
        } else {
            // Jika nilai akhir di atas atau sama dengan 50, menampilkan pesan berdasarkan peluang masuk universitas dan nilai akhir
            if (chanceGetUniv > 70 && nilaiAkhirSMA > 60) {
                alert("Hei, pasti kamu bisa masuk universitas dengan nilai SMA yang besar itu!");
            } else if (chanceGetUniv > 70 || nilaiAkhirSMA > 80) {
                alert("Hei, pasti kamu bisa masuk universitas dengan nilai SMA yang besar itu!");
            }
        }
    }
} else {
    alert("Terima kasih!");
}
