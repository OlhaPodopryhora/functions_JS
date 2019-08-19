;(function(){
	"use strict";

	/*(function numberRange(){

		var num;

		do {

			num = +prompt('Привет! Введи сюда любое число, а я покажу тебе магию:');
			primeNum:
			for (let i = 2; i <= num; ++i) {

			 		for (let j = 2; j < i; ++j) { 
			    		if (i % j == 0) continue primeNum; 
			  		}

				document.write(i);
				document.write('<br>');
			}

			document.write('Все простые числа до   ' + num);
			document.write('<br>');
			

		} while(Number.isNaN(num));


	})();*/

	(function numberRange(){

		let num1,
			num2;

		do {

			num1 = +prompt('Привет! Введи сюда число:');
			num2 = +prompt('Ок! Теперь введи сюда еще одно число, и я покажу тебе магию:');
			let min = num1 < num2 ? num1 : num2;
			let max = num1 > num2 ? num1 : num2;
			primeNum:
			for (let i = min; i <= max; ++i) {

		 		for (let j = 2; j < i; ++j) { 
		    		if (i % j == 0) continue primeNum; 
		  		}

		  		document.write(i);
				document.write('<br>');
		  	}
		  	//primeNumRev:
		  	//for (let i = num2; i <= num1; ++i) {

		 	//	for (let j = 2; j < i; ++j) { 
		    //		if (i % j == 0) continue primeNumRev; 
		  	//	}

			//	document.write(i);
			//	document.write('<br>');
			//}

			document.write('Меджик! Все простые числа интервала!');
			document.write('<br>');
			

		} while(Number.isNaN(num1, num2));


	})();

})();