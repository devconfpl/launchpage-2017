(function ($, window) {
    'use strict';

    var w = $(window),
    	boxes = $('.box'),
    	descs = $('.desc'),
    	wrap = $('.wrap'),
    	wrapInit = false,
    	ww, wh, space = 20,
    	wrapw, wraph,

        onWindowResize = function () {
            ww = w.width();
            wh = w.height();
            wraph = wrap.height();

            var calc = (wh - wraph) / 2;

            wrap.stop(true, true).animate({
    			'margin-top': calc < space ? space : calc
    		},{
    			duration: !wrapInit ? 0 : 1000,
    			complete: function()
    			{
    				if(!wrapInit)
    				{
    					wrapInit = true;
    					wrap.hide();
    					wrap.css('visibility', 'visible');
    					wrap.fadeIn(1000);
    				}
    			}
    		});
        };


    w.resize(onWindowResize);
	onWindowResize();

    $('.sbtn').click(function () {
        $('form').submit();
    });
})($, window);
