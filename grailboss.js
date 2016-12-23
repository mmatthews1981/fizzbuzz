(function grailboss(num){
	var result = '';
	num % 3 === 0 ? result += "grail" : null; 
	num % 5 === 0 ? result += "boss" : null; 
	console.log(result || num);
	num += 1;
	num <= 100 ? grailboss(num) : null; 
}(1));