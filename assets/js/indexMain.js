function start(){
  var userID = $("#userID")[0].value;

  if (userID == "") {
    sweetAlert({
      title: "哎呀！",
      text: "你忘記填入學號囉！",
      type: "error",
    })
  }
  else if (userID.search(/^(105)[0-9]{4}/) == -1) {
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
    text: "<p style=\"text-align: left;\"><b>遊戲任務：</b><br />從提示訊息中找出校園中的三個點(限操場及操場附近)，並把紙上的密碼輸入到三個泡泡中。完成所有的點後，按下中間的泡泡即可通關！</p><br /><p style=\"text-align: left;\"><b>注意：</b><br />完成後會跳轉到禮物領取頁，請回到攤位(63號)由學長姐幫忙按下領取鍵唷！</p>",
    html: true,
    type: "info",
  })
};
window.onload = function() {
  console.log('%c不要亂翻拉！', 'color: #f00; font-size: 50px;')
}
