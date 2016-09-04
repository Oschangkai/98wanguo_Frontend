function start(){
  var userID = $("#userID")[0].value;

  if (userID == "") {
    sweetAlert({
      title: "哎呀！",
      text: "你忘記填入學號囉！",
      type: "error",
    })
  }
  else if (userID.search(/^(10)[0-9]{5}/) == -1) {
    sweetAlert({
      title: "Oops~",
      text: "請確認一下你的學號有沒有正確喔ξ( ✿＞◡❛)",
      type: "error",
    })
  }
  else {
    //GET userID 到server，以此註冊
    login(userID);
    //跳轉頁面，並傳值userID
    this.location.href="playground.html"+"?userID="+userID;
  }
};
function qa() {
  sweetAlert({
    title: "遊戲說明",
    text: "<p style=\"text-align: left;\">從提示訊息中尋找校園三隅(限操場及操場附近)，並把紙上的密碼輸入到泡泡中，完成所有的點後即可通關！</p><br /><p style=\"text-align: left;\"><b>注意：</b>完成後會跳轉到禮物領取頁，請回到63號攤位由學長姐幫忙按下領取鍵唷！獎品數量有限，恕不多發</p>",
    html: true,
    type: "info",
  })
};
//（註冊）jquery ajax 使用get傳送userID以此註冊
function login(userID)
{
  $(document).ready(function()
    {
      $.ajax({
        type: "GET",
        url: "https:"+ "//"+"98wanguobackend.itaclub.asia/api/v1.0/user/"+ userID,
        dataType: "json",
        success: function(Jdata)
        {
          /* 測試用：取回數據使用
          alert("SUCCESS!!!");
          //解析json,並叫出各值
          var jsdata = jQuery.parseJSON(Jdata);
          alert("狀態："+jsdata.status);
          alert("是否註冊："+jsdata.isRegister);
          alert("全部完成："+jsdata.process[0]);
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
    })
}
window.onload = function() {
  console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;')
}
