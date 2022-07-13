(function () {
  var words = ["life", "work", "hobbies", "passions"],
    i = 0;
  setInterval(function () {
    $("#words").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 3000);
})();

/*
(function () {
  var words = [
      "Willkommen",
      "أهلا بك",
      "欢迎",
      "Добро пожаловать",
      "Welcome",
      "Välkommen",
      "Hoş geldin",
      "어서 오십시오",
    ],
    i = 0;
  setInterval(function () {
    $("#words").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 3000);
})();*/

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
