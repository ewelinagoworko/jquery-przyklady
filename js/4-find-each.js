'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){ //wszystkie skrypty umieszczone w tej funkcji beda wywolywac sie po zaladowaniu strony

	$('body').find('p').eq(1).css('color', 'white'); //znajdz wszystkie paragrafy zagniezdzone w body i paragrafowi o indeksie 1 nadaj mu kolor bialy
	console.log($('body').find('p').eq(1));
	
	$('body').find('p').eq(1).css('background-color', 'blue');
	
	$('p').each(function(index) { //pętla wykona się tyle razy, ile mamy p - w tym wypadku 3 razy, bo mamy 3 znaczniki p w html
		var size = 10; //definiujemy rozmiar czcionki na sztywno, aby funkcja miala wartosc, od ktorej zacznie liczyc wielkosc czcionki dla kazdego kolejnego paragrafu podczas iteracji
		$(this).css('font-size', size*(index+1) + 'px'); //przy kazdej iteracji bedzie zmieniac się fontsize dla poszczegolnych paragrafow
		
		
		//$(this).css('font-size', '10px'); //ustalamy fontsize dla wszystkich paragrafow p
		
	});
	
	
});