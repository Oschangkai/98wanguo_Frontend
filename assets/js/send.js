/*解析url傳值（userID)*/
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
		function(m,key,value) {
			vars[key] = value;
		}
	);
	return vars;
}
/*end*/

$(document).ready(function(){
	var userID=getUrlVars()["userID"];
	var receive;
	var locked=false;
	var $sendButton=$(".send-button")
		,$sendIcon=$(".send-icon")
		,$successIcon=$(".success-icon")
		,$failIcon=$(".fail-icon")
		,$giftIcon = $(".gift-icon")
		,$successBg=$(".success-bg")
		,$errorBg=$(".error-bg")
		,$indicatorDots=$(".send-button,.send-indicator-dot")
	$sendButton.click(function(event) {
		inputKey();
	});

	function setFilter(filter){
		$(".send").css({
			webkitFilter:filter,
			mozFilter:filter,
			filter:filter,
		});
	}
	//黏在一起
	function setGoo(){
		setFilter("url(#goo)");
	}
	//不黏在一起
	function setGooNoComp(){
		setFilter("url(#goo-no-comp)");
	}

	function send(){
		if(locked) return;

		locked=true;

		TweenMax.to($sendIcon,0.3,{
			x:100,
			y:-100,
			ease:Quad.easeIn,
			onComplete:function(){
				setGooNoComp();
				$sendIcon.css({
					display:"none"
				});
			}
		});
		TweenMax.to($sendButton,0.6,{
			scale:0.5,
			ease:Back.easeOut
		});

		$indicatorDots.each(function(i){
			startCircleAnim($(this),50,0.1,1+(i*0.2),1.1+(i*0.3));
		})

		//待轉換Icon
		var $targetIcon;
		$targetIcon = $giftIcon;

		//轉換送出背景顏色
		var $sentBg = $successBg;

		// if 三個都通關
		for(var i in receive["process"]){
			if(receive["process"][i] == false && i !=0){
				$targetIcon = $successIcon;
			}
		}

		//key錯誤
		if(receive["status"] == false){
			$targetIcon = $failIcon;
			$sentBg = $errorBg;
		}


		setTimeout(function(){
			// success anim start
			// close circle
			$indicatorDots.each(function(i){
				stopCircleAnim($(this),0.8+(i*0.1));
			});
			TweenMax.to($sentBg,0.7,{
				delay:.7,
				opacity:1
			})

			// show icon$targetIcon
			setTimeout(function(){
				setGoo();

				TweenMax.fromTo($targetIcon,1.5,{
					display:"inline-block",
					opacity:0,
					scale:0.1
				},{
					scale:1,
					ease:Elastic.easeOut
				});
				TweenMax.to($targetIcon,0.5,{
					delay:0,
					opacity:1
				});
				TweenMax.to($sendButton,0.3,{
					scale:1,
					ease:Back.easeOut
				});

				// 如果都通關了
				// 中斷回復到原來
				// 跳轉
				if($targetIcon == $giftIcon){
					return;
				}
				// back to normal
				setTimeout(function(){
					TweenMax.to($sentBg,0.4,{
						opacity:0
					});
					TweenMax.to($targetIcon,0.2,{
						opacity:0,
						onComplete:function(){
							locked=false;
							$targetIcon.css({
								display:"none"
							})
							TweenMax.fromTo($sendIcon,0.2,{
								display:"inline-block",
								opacity:0,
								x:0,
								y:0
							},{
								opacity:1
							});
						}
					});
				},2000);

			},1000);

		},3000+(Math.random()*3000))
	} // End of send


	function setupCircle($obj){
		if(typeof($obj.data("circle"))=="undefined"){
			$obj.data("circle",{radius:0,angle:0});

			function updateCirclePos(){
				var circle=$obj.data("circle");
				TweenMax.set($obj,{
					x:Math.cos(circle.angle)*circle.radius,
					y:Math.sin(circle.angle)*circle.radius,
				})
				requestAnimationFrame(updateCirclePos);
			}
			updateCirclePos();
		}
	} // End of setupCircle


	function startCircleAnim($obj,radius,delay,startDuration,loopDuration){
		setupCircle($obj);
		$obj.data("circle").radius=0;
		$obj.data("circle").angle=0;
		TweenMax.to($obj.data("circle"),startDuration,{
			delay:delay,
			radius:radius,
			ease:Quad.easeInOut
		});
		TweenMax.to($obj.data("circle"),loopDuration,{
			delay:delay,
			angle:Math.PI*2,
			ease:Linear.easeNone,
			repeat:-1
		});
	} // End of startCircleAnim


	function stopCircleAnim($obj,duration){
		TweenMax.to($obj.data("circle"),duration,{
			radius:0,
			ease:Quad.easeInOut,
			onComplete:function(){
				TweenMax.killTweensOf($obj.data("circle"));
			}
		});
	}// End of stopCircleAnim

	// 輸入密鑰
	function inputKey() {
		swal({
			 title: "輸入密鑰",
			 text: "",
			 type: "input",
			 showCancelButton: true,
			 closeOnConfirm: false,
			 inputPlaceholder: "Place your key here"
		 },
		function(inputValue) {
			if (inputValue === false) return false;
			if (inputValue != "") sweetAlert.close();
			if (inputValue === "") {
				swal.showInputError("必須要有值");
				return false;
			}

			sendKey(inputValue,userID);
			return;
		});

	}

	// ajax 送出密鑰
	function sendKey(key,userID){
		var jsonForm={};
		jsonForm["key"] = key;
		jsonForm = JSON.stringify(jsonForm);
		$.ajax({
					//Data
          url: "https://98wanguobackend.itaclub.asia/api/v1.0/user/"+userID,
          data: {"jsonForm":jsonForm},
          type: "POST",
          datatype: "json",

					//If Success
          success: function(msg) {
            msg=JSON.parse(msg);
						receive = msg;
						send();
            if(msg["status"]!=true){
            	//alert(msg["reason"]);
            	return msg;
            }
          return msg;
          },
					//If Error
          error: function(xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
          }

        });
	}


})
