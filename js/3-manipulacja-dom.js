'use strict';

//funkcja document.ready - wersja skrocona:

$ (function(){ //wszystkie skrypty umieszczone w tej funkcji beda wywolywac sie po zaladowaniu strony
	
	
	//pobieramy tekst paragrafu
	var textPar = $('#paragraf').text(); //wywolujemy na zmiennej textPar funkcję text - pobieramy tekst z paragrafu pierwszego do zmiennej textPar
	console.log(textPar);
	
	//pobrany tekst z paragrafu pierwszego wstawiamy jako tekst paragrafu drugiego:
	
	$('.paragraf').text(textPar + ' dodany');
	
	$('.paragrafnext').html('<strong>TEST</strong>'); //metoda .html pozwala na wstrzyknięcie elementow html nie ingerujac w kod html
	
	$ ('#first').append(' dodaj do naglowka'); //dodajemy nowy element po naglowku o id=first, ale w ramach znacznika h1 
	
	$('#first'). after(' dodaj za naglowkiem'); //dodajemy element po naglowku h1 i poza znacznikiem h1
	
	var przedNaglowkiem = $('div').html(); //pobieramy zawartosci znacznika div
	
	$('#first').before(przedNaglowkiem); //dodajemy caly znacznik p (po zmianie) (umieszczony w div) przed zdefiniowaną zmienną var = przedNaglowkiem (czyli przed znacznikiem h1 pojawi sie)
	
	$('strong').remove();
	
	$('h3').empty();
	
	//dodajemy style do naszego naglowka h2:
	
	//$('h2').css('background-color', 'red');
	
	//dodajemy style dla wszystkich paragrafow p:
	
	$('p').css('background-color', 'red');
	
	//zmieniamy tlo i czcionke dla paragrafow p:
	
	$('p').css({'background-color':'red', 'color': 'white'});
	
	//metoda value:
	
	var poleTekstowe = $('input').val();
	console.log(poleTekstowe);
	
	$('input').val(textPar); //przypisujemy tekst paragrafu textPar jako wartosc dla inputa
	
	
	$('h2').addClass('blue'); //dodajemy klasę blue do naglowka h2
	
	$('p').removeClass('paragraf'); //usuwamy klasę paragraf z p
	
	
	
});