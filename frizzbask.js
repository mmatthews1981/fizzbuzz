var frizzbask = (function(){
	var i = 1;
	while( i <= 100 ){
		if (i % 15 === 0) { console.log("frizzbask"); }
		else if(i % 3 === 0){ console.log("frizz"); }
		else if (i % 5 === 0){ console.log("bask"); }
		else {console.log(i);}
		i += 1;
	}
}());