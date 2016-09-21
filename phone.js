Event.handler('Infrajs.onshow', function () {
	var ph=$('.magic-phone');
	if (sessionStorage["phone"]) {
		ph.css('visibility','visible');
	} else {
		ph.each(function () {
			if ($(this).data('phone')) return;
			var number=$(this).text();
			var len = number.length;
			$(this).html(number.substr(0,len-3) + '<span style="cursor:pointer; color:#3d6e8e">...</span>');
			$(this).data('phone', number);
			$(this).css('visibility','visible');
			$(this).click(function () {
				
				var conf = infra.config('magic-phone');
				if (conf['yaCounter']) {
					//В метрике должна быть создана цель с индентификатором phone
					window['yaCounter'+conf['yaCounter']].reachGoal('phone');
				}
				if (window.ga) {
				 	ga('send', 'event', 'Телефон', 'Клик');
				}
				sessionStorage.setItem("phone", true);
				ph.each(function () {
					$(this).text($(this).data('phone'));
				});
			});
		});
	}
});
