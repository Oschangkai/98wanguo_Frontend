window.onload = function() {
  document.getElementById("welcomeMessage").innerHTML += "{{userID}}";
  console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;');
};
