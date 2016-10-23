Event.handler('Controller.onshow', function ()
{
	var ph = $('.magic-phone');
	if ( sessionStorage["phone"] ) {
		ph.removeClass('magic-phone');
	} else {
		ph.each(function () {
			if ($(this).data('phone')) return;
			var number = $(this).text();
			var len = number.length;
			$(this).html(number.substr(0, len-2));
			$(this).data('phone', number);
			$(this).css('visibility', 'visible');
			$(this).click(function () {	
				var conf = Config.get('magic-phone');
				if (conf['yaCounter']) {
					//В метрике должна быть создана цель с индентификатором phone
					if (window['yaCounter'+conf['yaCounter']]) {
						window['yaCounter'+conf['yaCounter']].reachGoal('phone');
					}
					if (window.ga) {
					 	ga('send', 'event', 'Телефон', 'Клик');
					}
					
					sessionStorage.setItem("phone", true);
					ph.each(function () {
	 					$(this).text($(this).data('phone'));
	 				});
	 				ph.removeClass('magic-phone');
				}
			});
		});
	}
});
