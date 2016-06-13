Event.handler('Infrajs.onshow', function () {
	var ph=$('.magic-phone');
	if (sessionStorage["phone"]) {
		ph.css('visibility','visible');
	} else {
		ph.each(function () {
			if ($(this).data('phone')) return;
			var number=$(this).text();
			$(this).html(number.substr(0,5) + '<span style="cursor:pointer; color:#3d6e8e">...</span>');
			$(this).data('phone', number);
			$(this).css('visibility','visible');
			$(this).click(function () {
				
				var conf = infra.config('magic-phone');
				if (conf['yaCounter']) {
					//В метрике должна быть создана цель с индентификатором phone
					window['yaCounter'+conf['yaCounter']].reachGoal('phone');
				}

				sessionStorage.setItem("phone", true);
				ph.each(function () {
					$(this).text($(this).data('phone'));
				});
			});
		});
	}
});
