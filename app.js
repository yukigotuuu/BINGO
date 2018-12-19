
$(function(){
	let array = [];
	let value = Math.floor(Math.random() *75)+1;
	let timer = null;

	$('#start').click(function(){
		//ボタンカラー
		$('#start').css('color','#2F516D');
		$('#stop').css('color','#FE2530');

		//2度押し防止
		$('#start').attr("disabled","disabled");
		$('#stop').removeAttr("disabled");

		timer = setInterval(Random,70);
		function Random(){
			value = Math.floor(Math.random() *75)+1;
			$('#div').text(value);
		};
	});

	$('#stop').click(function(){
		$('#start').css('color','#1393FD');
		$('#stop').css('color','#91373C');

		$('#start').removeAttr("disabled");
		$('#stop').attr("disabled","disabled");

		clearInterval(timer);

		//数字の振り分け
		while(jQuery.inArray(value, array) >= 0){
			value = Math.floor(Math.random() *75)+1;
		}

		if (jQuery.inArray(value, array) == -1) {
			array.push(value);
			$('#div').text(value);
		};

		$.each(array, function(i, num){
			$('td').eq(num-1).css({
				'background-color':'rgba(254,138,225,.7)','color':'#FFF'
			});
		});
	});


	$('#restart').click(function(){
		location.reload();
	});

});

$(window).keyup(function(e){
	switch(e.which){
		case 38:
		$('#start').click();
		break;

		case 40:
		$('#stop').click();
		break;

		case 16:
		$('#restart').click();
		break;
	}
});