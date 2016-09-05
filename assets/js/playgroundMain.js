window.onload = function() {
  //解析userID
  var userID=getUrlVars()["userID"];
  if (userID == undefined) {
    sweetAlert ({
      title: "糟糕！",
      text: "您似乎忘記登入了QQ 我們將帶您到登入頁",
      type: "warning",
      allowEscapeKey: false
    },
    function(){
      window.location.href = "index.html";
    });
  }
  //end
  else document.getElementById("welcomeMessage").innerHTML += "{" + userID + "}";
  console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;');
};

/*解析url傳值（userID)*/
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
		function(m, key, value) {
			vars[key] = value;
		}
	);
	return vars;
}
/*end*/
