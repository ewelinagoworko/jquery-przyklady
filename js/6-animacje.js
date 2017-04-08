//predefiniowane animacje w jQuery

'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){ //jednostki podajemy w ms dla animacji
	
	$('h1').hide(5000); //ukrywamy naglowek h1
	
	$('h2').hide(5000).show(3000); //odwrocenie efektu hide
	
	$('h2').fadeOut(5000).fadeIn(3000);
	
	
	//funkcja slide bedzie w nieskonczonosc: 
	
	slide(); //uruchamiamy funkcję
	
	function slide() {
		$('h3').slideUp(3000).slideDown(3000, slide); //jak sie funkcja skonczy, to dzieki temu slide w nawiasie - pozwoli na to, zeby ta funkcja dzialala w nieskonczonosc
	}
	
	
	//ale w jQuery mozna tez tworzyc wlasne animacje, przyklad ponizej:
	
	var rand = Math.floor((Math.random()*100));
	
	//zmieniamy font-size naglowka h3 i bedzie sie przesuwal w lewa strone
	$('h3').animate({'font-size' : '1em', 'margin-left' : rand + 'px'}, 2000, parBack);
	
	//parBack - funkcja zwrotna:
	
	function parBack() {
		$('p').css('background-color', 'red');
	}
	
});