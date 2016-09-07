var Animated = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
window.onload = function() {
  //解析userID
  var userID = getUrlVars()["userID"];
  if (userID == undefined) {
    userID = null;
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
  else
  {
    document.getElementById("welcomeMessage").innerHTML += "{" + userID + "}";
    console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;');
  }

};

function animateBtn1() {
  if ($("#btn1").is(':disabled') == false) {
    $("#btn1").addClass('rubberBand').one(Animated, function(){
      $(this).removeClass('rubberBand');
    });
    setTimeout("animateBtn1()", 7888);
  }
}
function animateBtn2() {
  if ($("#btn2").is(':disabled') == false) {
    $("#btn2").addClass('rubberBand').one(Animated, function(){
      $(this).removeClass('rubberBand');
    });
    setTimeout("animateBtn2()", 9111);
  }
}
function animateBtn3() {
  if ($("#btn3").is(':disabled') == false) {
    $("#btn3").addClass('rubberBand').one(Animated, function(){
      $(this).removeClass('rubberBand');
    });
    setTimeout("animateBtn3()", 8444);
  }
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
  sweetAlert ("提示2", "眾裡尋她千百度，驀然回首，那人卻在燈火闌珊處", "info");
}
function hint3() {
  /*sweetAlert ("提示3", "碎念碎念碎念，多少亡魂矗立於炙熱之中，多少言語迴盪在耳邊風", "info");*/
  /*sweetAlert ("提示3", "哲學的盡頭，兩盞車燈，在無盡的輪迴中，吞吐", "info");*/
  sweetAlert ("提示3", "何不坐下，放下你那死盯遠方來車的視線", "info");
}
animateBtn1();
animateBtn2();
animateBtn3();
