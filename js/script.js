// ==========================================
// SCRIPT NAVIGASI SEDERHANA (YUKHEMAT)
// ==========================================

// 1. Ambil elemen tombol HP dan menu dari HTML
const tombolHp = document.getElementById('tombolHp');
const menuNavigasi = document.getElementById('menuNavigasi');

// 2. Fungsi untuk buka/tutup menu saat tombol HP diklik
if (tombolHp) {
  tombolHp.addEventListener('click', function() {
    menuNavigasi.classList.toggle('buka');
  });
}

// 3. Fungsi untuk menutup menu otomatis setelah link menu diklik
const semuaLink = document.querySelectorAll('.menu a');

semuaLink.forEach(function(link) {
  link.addEventListener('click', function() {
    menuNavigasi.classList.remove('buka');
  });
});