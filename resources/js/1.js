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
})();
