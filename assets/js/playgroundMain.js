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
      //window.location.href = "/";
    });
  }
  //end
  else document.getElementById("welcomeMessage").innerHTML += "{" + userID + "}";
  console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;');
  animation();
};
function animation() {
  var Animated = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

  $("#btn1").addClass('btn1Animation').one(Animated, function(){
    $(this).removeClass('btn1Animation').delay(3780);//3780
  });

  $("#btn2").addClass('btn2Animation').one(Animated, function(){
    $(this).removeClass('btn2Animation').delay(5210);//5210
  });

  $("#btn3").addClass('btn3Animation').one(Animated, function(){
    $(this).removeClass('btn3Animation').delay(4330);//4330
  });
}
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

function hint1() {
  sweetAlert ("提示1", "所謂伊人，在水一方", "info");
}
function hint2() {
  sweetAlert ("提示2", "眾裡尋她千百度 驀然回首 那人卻在燈火闌珊處", "info");
}
function hint3() {
  sweetAlert ("提示3", "碎念碎念碎念，多少亡魂矗立於炙熱之中，多少言語迴盪在耳邊風", "info");
}
