//狀態物件
var receive;
//
window.onload = function() {
  console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;');
  //解析userID
  var userID=getUrlVars()["userID"];
  checkStatus(userID);
  var giftStauts = receive.process[0];
  var mission1 = receive.process[1];
  var mission2 = receive.process[2];
  var mission3 = receive.process[3];
  //使用者未登入
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
  //有未作答完的情況
  else if (mission1 == false || mission2 == false || mission3 == false) {
    sweetAlert ({
      title: "糟糕！",
      text: "您似乎有未解決的謎題QQ 我們將帶您到登入頁",
      type: "warning",
      allowEscapeKey: false
    },
    function(){
      window.location.href = "index.html";
    });
  }
  //全部作答完成，領過禮物
  else if (mission1 && mission2 && mission3 && giftStauts) {
    sweetAlert ({
      title: "注意！",
      text: "恭喜您解完了所有謎題，並領取過禮物，破完了整個活動了！",
      type: "warning",
      allowEscapeKey: false
    });
    //禮物按鈕變灰
    document.getElementById("giftBtn").style.backgroundColor = "grey";
    //
    document.getElementById("welcomeMessage").innerHTML += "{" + userID + "}";
  }
  else {
    if(giftStauts != true) {
      $(function(){
      $('div.giftBtn').mouseup(function(){
        sendKeyGift(userID);
        //禮物按鈕變灰
        document.getElementById("giftBtn").style.backgroundColor = "grey";
        });
      });
    }
  document.getElementById("welcomeMessage").innerHTML += "{" + userID + "}";
  }
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

function checkStatus(userID) {
    $.ajax({
      type: "GET",
      url: "https:"+ "//"+"98wanguobackend.itaclub.asia/api/v1.0/user/"+ userID,
      dataType: "json",
      success: function(Jdata)
      {
        //測試用：取回數據使用
        //alert("SUCCESS!!!");
        //解析json,並叫出各值
        var jsdata = jQuery.parseJSON(Jdata);
        receive = jsdata;
        /*
        alert("狀態："+jsdata.status);
        alert("是否註冊："+jsdata.isRegister);
        alert("禮物取得："+jsdata.process[0]);
        alert("第一題："+jsdata.process[1]);
        alert("第二題："+jsdata.process[2]);
        alert("第三題："+jsdata.process[3]);
        */
      },
      /*  jqXHR.status
      0 - (未初始化)還沒有調用send()方法
      1 - (载入)以調用send()方法，正在發送請求
      2 - (載入完成)send()方法執行完成，
      3 - (交互)正在解析響應內容
      4 - (完成)響應內容解析完成，可以在客戶端調用了
      */
      error: function(jqXHR)
      {
        alert("錯誤(jqXHR.status):"+jqXHR.status);
      },
      //（是否非同步請求）不加這個參數，chrome,safari,皆會ajax請求錯誤(jqXHR.status==0)
      //用來在跳頁之前處理好ajax請求
      async : false
      })
} //End of checkStatus

  // ajax 送出密鑰
  function sendKeyGift(userID) {
    var jsonForm={};
    jsonForm["key"] = "gift";
    jsonForm = JSON.stringify(jsonForm);
    $.ajax({
          //Data
          url: "https://98wanguobackend.itaclub.asia/api/v1.0/user/"+ userID,
          data: {"jsonForm":jsonForm},
          type: "POST",
          datatype: "json",

          //If Success
          success: function(Jdata)
          {
            var jsdata = jQuery.parseJSON(Jdata);
            receive = jsdata;
          },
          //If Error
          error: function(jqXHR)
          {
            alert("錯誤(jqXHR.status):"+jqXHR.status);
          },
          //（是否非同步請求）不加這個參數，chrome,safari,皆會ajax請求錯誤(jqXHR.status==0)
          //用來在跳頁之前處理好ajax請求
          async : false

          });
} //End of sendKey
