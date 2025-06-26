const btn_input = document.getElementById("btn_input");
const input_text = document.getElementById("input_text");
const ol = document.getElementById("ol")

btn_input.addEventListener("click", function () {
  const value = input_text.value;
  const li = document.createElement("li");
  li.textContent = value;
  ol.appendChild(li);

  input_text.value = ""
});
