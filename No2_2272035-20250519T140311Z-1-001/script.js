$(document).ready(function () {
  $(".box").each(function () {
    $(this).data("count", 0);

    $(this).on("click", function () {
      let prevCount = $(this).data("count");
      let newCount = prevCount + 1;
      $(this).data("count", newCount);
      updateBox($(this), prevCount, newCount);
    });

    $(this).on("contextmenu", function (e) {
      e.preventDefault();
      let prevCount = $(this).data("count");
      let newCount = prevCount - 1;
      $(this).data("count", newCount);
      updateBox($(this), prevCount, newCount);
    });
  });

  function updateBox(element, prev, current) {
    element.text(current);

    if (current === 0) {
      element.css("background-color", "white"); 
    } else if (current < prev) {
      element.css("background-color", "red"); 
    } else {
      element.css("background-color", "#4CAF50"); 
    }
  }
});
