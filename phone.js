window.MagicPhone = {
    reset: function () {
        sessionStorage.phone="";
        location.reload();
    },
	init: function() {
        var $ = jQuery;
        var ph = $('.magic-phone');
        if ( sessionStorage["phone"] ) {
            ph.removeClass('magic-phone');
        } else {
            ph.each(function () {
                if ($(this).data('phone')) return;
                var conf = Config.get('magic-phone');
                var number = $(this).text();
                var len = number.length;
                var textEnd;
                switch (conf['design']) {
                    case 'dotted':
                        textEnd = '<span style="cursor:pointer; color:#3d6e8e">...</span>';
                        break;
                    case 'blur':
                        textEnd = '<span style="filter:blur(1px); -webkit-filter:blur(1px); opacity: 0.8;">-</span><span style="filter:blur(3px); -webkit-filter:blur(3px); opacity: 0.5;">8</span><span style="filter:blur(4px); -webkit-filter:blur(4px); opacity: 0.3;">8</span>';
                        break;
                    case 'background':
                        textEnd = '<span style="position: absolute; margin-left:-40px; top:0; width: 40px; height:100%; background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));"></span><span style="color:#CCC">&nbsp;&nbsp;&nbsp;&nbsp;</span>';
                        break;
                }
                $(this).html(number.substr(0, len-3) + textEnd);
                $(this).data('phone', number);
                $(this).css('visibility', 'visible');
                $(this).click(function () {
                    Goal.reach('phone');
                    sessionStorage.setItem("phone", true);
                    ph.each(function () {
                        $(this).text($(this).data('phone'));
                    });
                    ph.removeClass('magic-phone');
                });
            });
        }
    }
}
