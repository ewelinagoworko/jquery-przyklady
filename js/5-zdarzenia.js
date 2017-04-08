'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){
	
	
	$('h1').on({
		'click': function() { //po kliknieciu na h1 zmienia sie kolor czcionki na czerwony
			$(this).css('color', 'red');
		},
		'mouseover': function() { //po najechaniu myszka na h1 to zmienia sie kolor tla na niebieski
			$(this).css('background-color', 'blue');
		},
		'mouseout': function() { //po zjechaniu myszka z naglowka kolor tla zmienia sie na domyslny
			$(this).css('background-color', 'initial');
		}
		
		
	});
	
});