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
    this.location.href="/playground.html";
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
window.onload = function() {
  console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;')
}
