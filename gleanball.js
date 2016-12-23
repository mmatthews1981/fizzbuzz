(function gleanball(num){
	console.log((num % 3 === 0 ? "glean" : "")+(num % 5 === 0 ? "ball" : "")|| num);
	num += 1;
	num <= 100 ? gleanball(num) : null; 
}(1));