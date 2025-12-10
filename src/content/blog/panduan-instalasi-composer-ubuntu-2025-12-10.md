---
title: "Panduan Instalasi Composer di Ubuntu 22.04"
slug: "panduan-instalasi-composer-ubuntu"
excerpt: "Pelajari cara menginstal dan menggunakan Composer, tool manajemen dependensi PHP yang wajib dikuasai oleh setiap developer Laravel dan Symfony."
coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80"
category: "DevOps"
date: "2025-12-10T21:45:00"
author:
  name: "Nova Ardiansyah"
---

Sebagai developer PHP, mengelola library dan package pihak ketiga merupakan bagian penting dalam pengembangan aplikasi modern. Di sinilah **Composer** hadir sebagai solusi yang sangat membantu.

## Apa itu Composer?

Composer merupakan tool manajemen dependensi yang dirancang khusus untuk ekosistem PHP. Fungsi utamanya adalah mengotomatisasi proses pengunduhan dan pembaruan library yang dibutuhkan oleh proyek Anda. Selain itu, Composer juga sering digunakan untuk membuat proyek baru berbasis framework populer seperti Laravel, Symfony, atau CodeIgniter.

Dalam panduan ini, kita akan membahas langkah-langkah instalasi Composer pada sistem Ubuntu 22.04.

## Persiapan Awal

Sebelum memulai, pastikan Anda memiliki:
- Akses ke server Ubuntu 22.04
- User dengan hak akses sudo
- Koneksi internet yang stabil

## Langkah 1: Menyiapkan Dependensi yang Diperlukan

Composer membutuhkan beberapa paket pendukung agar dapat berjalan dengan baik. Paket-paket tersebut meliputi `php-cli` untuk menjalankan script PHP melalui terminal, serta `unzip` untuk mengekstrak file arsip.

Mulailah dengan memperbarui daftar paket sistem:

```bash
sudo apt update
```

Kemudian, instal paket-paket yang diperlukan:

```bash
sudo apt install php-cli unzip
```

Sistem akan meminta konfirmasi. Tekan `Y` lalu `Enter` untuk melanjutkan proses instalasi.

## Langkah 2: Mengunduh Installer Composer

Composer menyediakan script installer resmi yang dapat diunduh langsung dari situs mereka. Proses ini melibatkan pengunduhan file installer dan verifikasi integritas file tersebut.

Pindah ke direktori home Anda, kemudian unduh installer:

```bash
cd ~
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
```

## Langkah 3: Memverifikasi Installer

Demi keamanan, penting untuk memastikan file yang diunduh tidak rusak atau dimodifikasi. Kita perlu membandingkan hash SHA-384 dari file installer dengan hash resmi dari situs Composer.

Ambil hash signature terbaru:

```bash
HASH=`curl -sS https://composer.github.io/installer.sig`
```

Untuk melihat nilai hash yang didapat:

```bash
echo $HASH
```

Selanjutnya, jalankan perintah verifikasi:

```bash
php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

Jika muncul pesan `Installer verified`, berarti file installer aman untuk digunakan. Namun jika muncul `Installer corrupt`, Anda perlu mengunduh ulang file tersebut.

## Langkah 4: Menjalankan Instalasi

Untuk menginstal Composer secara global (dapat diakses dari direktori manapun), jalankan perintah berikut:

```bash
sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Perintah di atas akan menempatkan executable Composer di `/usr/local/bin` sehingga dapat dipanggil langsung menggunakan perintah `composer`.

## Langkah 5: Memastikan Instalasi Berhasil

Untuk memverifikasi bahwa Composer telah terinstal dengan benar, cukup jalankan:

```bash
composer
```

Jika instalasi berhasil, Anda akan melihat tampilan informasi Composer beserta daftar perintah yang tersedia. Logo ASCII art Composer yang khas menandakan bahwa tool ini siap digunakan.

## Tips Tambahan

**Instalasi Per-Proyek**: Jika Anda tidak memiliki akses root atau lebih memilih instalasi terpisah untuk setiap proyek, gunakan perintah berikut:

```bash
php /tmp/composer-setup.php
```

Perintah ini akan menghasilkan file `composer.phar` di direktori aktif, yang dapat dijalankan dengan `php composer.phar`.

## Kesimpulan

Composer merupakan tool yang sangat penting dalam pengembangan aplikasi PHP modern. Dengan mengikuti panduan ini, Anda kini memiliki Composer yang terinstal dan siap digunakan untuk mengelola dependensi proyek-proyek PHP Anda.
