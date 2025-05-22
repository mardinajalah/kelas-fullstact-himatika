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
  <link rel="stylesheet" href="style.css">
</head>
```

## C. latihan membuat card sederhanah
