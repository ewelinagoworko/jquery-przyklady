'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){ //wszystkie skrypty umieszczone w tej funkcji beda wywolywac sie po zaladowaniu strony
	$('#first').css({color: 'red'}).hide(5000).show(3000);
});