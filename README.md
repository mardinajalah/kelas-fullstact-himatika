# materi kelas web himatika
## A. pengenalan html dan css
## 1. apa itu html ?
HTML adalah singkatan dari Hyper Text Markup Language. HTML mendeskripsikan struktur halaman sebuah website. Sebuah halaman HTML dibangun oleh blok-blok konten yang disebut elemen HTML.

contoh

<img src="./gambar/Cuplikan layar 2025-05-30 173316.png"></img>

  - struktur html
```html
<html>
  <head>
    <title>text title</title>
    <!-- style css 1 -->
    <style>
      /* di sini struktur css */
    </style>
    <!-- style css 2 -->
     <!-- pisah file -->
     <link rel="stylesheet" href="nama_file_css_mu.css" />
  </head>
  <body>
    di sini tempat struktur element atau tag html
  </body>
</html>
```
- element atau tag html
```html
1. <h1></h1>
2. <div></div>
3. <p></p>
4. <a></a>
5. dll
```

- atribut tag html
1. style
2. class
3. id
4. onClick
5. href
6. dll
```html
<div style="" class="" id="" onClick="" href=""></div>
```

## 2. apa itu css ?
adalah singkatan dari Cascading Style Sheets, artinya sebuah bahasa sederhana yang digunakan untuk menambahkan gaya/styling (misalnya, font, warna, spasi) ke sebuah halaman website. Jika diibaratkan, HTML merupakan sebuah kerangka, CSS ini bertindak sebagai kulit/penutup dari kerangka tersebut.

contoh

<img src="./gambar/Cuplikan layar 2025-05-30 174451.png" />

- truktur css

<img src="./gambar/Cuplikan layar 2025-05-30 175351.png" />

- slector, atribut dan value css
```css
div {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: green;
  color: white;
  border-radius: 10px;
}

.text {
  color: white;
}

#text {
  color: white;
}

```

# belaja html css lengkap menggunakan video

### <a href="https://www.youtube.com/watch?v=NBZ9Ro6UKV8&list=PLFIM0718LjIVuONHysfOK0ZtiqUWvrx4F" >1. belajar html dasar </a>

### <a href="https://www.youtube.com/watch?v=CleFk3BZB3g&list=PLFIM0718LjIUBrbm6Gdh6k7ZUvPIAZm7p" >2. belajar css dasar </a>

<br />

# B Pengenalan Dom

## 1 apa itu DOM

DOM adalah singkatan dari Document Object Model. DOM adalah representasi struktur halaman web yang dimuat oleh browser dalam bentuk pohon (tree). Dengan DOM, kita bisa mengakses dan memanipulasi elemen HTML menggunakan JavaScript.

DOM membuat setiap elemen HTML seperti ```<h1>```, ```<div>```, ```<p>```, dan lain-lain, bisa dikenali sebagai objek yang bisa diubah isinya, gayanya, atau bahkan bisa dihapus atau ditambahkan elemen baru secara dinamis.


### A Mengakses DOM dengan JavaScript

```html

<p id="teks">Halo!</p>

<script>
  const elemen = document.getElementById("teks");
  console.log(elemen.innerText); // Output: Halo!
</script>

```

### B Mengubah gaya (CSS) elemen

```html

<div id="box">Kotak</div>

<script>
  const box = document.getElementById("box");
  box.style.backgroundColor = "blue";
  box.style.color = "white";
</script>

```

### D. Event Listener (Mendeteksi aksi pengguna)

```html

<button id="tombol">Klik saya</button>

<script>
  const tombol = document.getElementById("tombol");
  tombol.addEventListener("click", () => {
    alert("Tombol diklik!");
  });
</script>

```