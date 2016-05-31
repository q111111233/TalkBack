$(document).ready(function() {
  $("img#dog").click(function() {
    $("ul#woof").append("<li>Woof!</li>");
    $("ul#meow").append("<li>Meow!</li>");
  });

  $("img#cat").click(function() {
    $("ul#woof").append("<li>Arf arf!</li>");
    $("ul#meow").append("<li>Raaawwrrrrr!</li>");
  });

});
