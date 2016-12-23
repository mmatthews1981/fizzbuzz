var drizzmosk = (function(){
	var i = 1,
		result ='';

	while( i <= 100 ){
		if (i % 15 === 0) { result = "drizzmosk"; }
		else if(i % 3 === 0){ result = "drizz"; }
		else if (i % 5 === 0){ result = "mosk"; }
		else { result = i;}
		console.log(result);
		i += 1;
	}
}());