const btn_input = document.getElementById("btn_input");
const input_text = document.getElementById("input_text");
const ol = document.getElementById("ol")

btn_input.addEventListener("click", function () {
  const value = input_text.value;
  const li = document.createElement("li");
  const btn = document.createElement("button");

  btn.setAttribute("class", "btn_input");
  btn.textContent = "hapus";
  li.textContent = value;
  ol.appendChild(li);
  li.appendChild(btn);

  input_text.value = ""
});
