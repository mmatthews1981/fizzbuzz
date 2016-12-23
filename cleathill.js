(function cleathill(num){
	console.log((num % 3 === 0 ? "cleat" : "")+(num % 5 === 0 ? "hill" : "")|| num);
	num < 100 ? cleathill(num+1) : null; 
}(1));