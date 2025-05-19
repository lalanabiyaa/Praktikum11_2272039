$(document).ready(function () {
  let stack = [];

  function renderStack() {
    $("#stackContainer").empty();
    for (let i = 0; i < stack.length; i++) {
      const item = $("<div class='stack-item'></div>").text(stack[i]);
      $("#stackContainer").append(item);
      item.hide().fadeIn(500);
    }
  }

  $("#pushBtn").click(function () {
    let value = prompt("Masukkan data untuk push:");
    if (value !== null && value.trim() !== "") {
      stack.push(value.trim());
      renderStack();
    }
  });

  $("#popBtn").click(function () {
    if (stack.length > 0) {
      stack.pop();
      renderStack();
    }
  });
});