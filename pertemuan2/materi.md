# pertemuan kedua
## latihan membuat login

<img src="./contoh gambar/Cuplikan layar 2025-05-29 004142.png"></img>

- html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- pembungkus element -->
  <div class="container">
    <!-- form login -->
    <div class="form-login">
      <!-- logo -->
      <h2 class="logo">Login</h2>
      <!-- form inputan -->
      <div class="form-inputan">
        <!-- input -->
        <input class="input" type="text" placeholder="username">
        <input class="input" type="text" placeholder="password">
        <!-- tombol -->
        <button class="tombol">Login</button>
      </div>
    </div>
  </div>
</body>
</html>
```

- css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background-color: green;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-login {
  background-color: white;
  width: 500px;
  height: 340px;
}

.logo {
  text-align: center;
  margin-top: 20px;
}

.form-inputan {
  width: 100%;
  height: 300px;
  padding: 20px;
}

.input {
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}

.tombol {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: green;
  color: white;
  border-radius: 10px;
}
```