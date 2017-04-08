'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){ //wszystkie skrypty umieszczone w tej funkcji beda wywolywac sie po zaladowaniu strony
	
	var paragraphs = $('p'); //przekazujemy parametr domyslnie jako string; pobieramy element po nazwie znacznika z html
	console.log(paragraphs);
	
	var paragraphOne = $('#first'); //pobieramy element po ID z html
	console.log(paragraphOne);
	
	var paragraphTwo = $('.paragraf'); //pobieramy element po klasie z html
	
	var paragraphNot = $('p:not(.paragraf)'); //pobieramy elementy o znaczniku p oprocz elementu o znaczniku p z klasa paragraf
	console.log(paragraphNot);
	
	var paragraphInDiv = $('div > p'); //pobieramy wszystkie elementy p zagniezdzone w div
	console.log(paragraphInDiv);
	
	var paragraphInDiv2 = $('div p'); //pobieramy pierwszy element p zagniezdzony w div
	console.log(paragraphInDiv2);
	
	
});