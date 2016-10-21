Event.handler('Controller.onshow', function ()
{
	var ph=$('.magic-phone');
	ph.css('visibility','visible');
	
	ph.each(function ()
	{
		if ($(this).data('phone')) return;

		$(this).click(function ()
		{	
			var conf = Config.get('magic-phone');
			if (conf['yaCounter']) {
				//В метрике должна быть создана цель с индентификатором phone
				if (window['yaCounter'+conf['yaCounter']]) {
					window['yaCounter'+conf['yaCounter']].reachGoal('phone');
				}	
			}
			if (window.ga) {
			 	ga('send', 'event', 'Телефон', 'Клик');
			}
			
			//alert('olol');
			sessionStorage.setItem("phone", true);
			ph.removeClass('magic-phone');
		});
	});
});
