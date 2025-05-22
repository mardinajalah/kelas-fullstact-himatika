# 1. pertemuan pertama

## A. pengenalan struktur html

- elemnt html dan propertinya

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <div
      class="red"
      id="red"
    ></div>
    dll
  </body>
</html>
```

## B. pemangilan css dan properti css

- inline css
- internal css
- external css

```html
inline css
<div style="color: white; background-color: red;">contoh text</div>

internal css
<head>
  <style>
    div {
      color: white;
      background-color: red;
    }

    .class {
      color: white;
      background-color: red;
    }

    #id {
      color: white;
      background-color: red;
    }
  </style>
</head>
```

external css
membuat file terpisa dengan file html
dan pasang di tag head nya seperti ini

```html
<head>
  <link
    rel="stylesheet"
    href="style.css"
  />
</head>
```

## C. latihan membuat card sederhanah

```html
<html>
  <head>
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card {
        width: 300px;
        height: 450px;
      }

      .image {
        width: 100%;
        height: 50%;
        background-color: #b5b4b4;
        border-radius: 20px 20px 0 0;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content-card {
        border: 1px solid black;
        padding: 10px;
        width: 100%;
        height: 50%;
        border-radius: 0 0 20px 20px;
      }

      .title-card {
        margin-bottom: 10px;
      }

      .text-card {
        margin-bottom: 15px;
      }

      .button-card {
        padding: 15px 30px;
        border: none;
        background-color: #5555e0;
        color: white;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="image">
          <h1>image cap</h1>
        </div>
        <div class="content-card">
          <h1 class="title-card">card title</h1>
          <p class="text-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos excepturi recusandae Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, perferendis?</p>
          <button class="button-card">Go someware</button>
        </div>
      </div>
    </div>
  </body>
</html>
```
