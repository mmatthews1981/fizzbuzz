var flizzbazz = (function(){
	for(var i = 0; i < 100; i++ ){
		if (i % 15 === 0) { console.log("flizzbazz"); }
		else if(i % 3 === 0){ console.log("flizz"); }
		else if (i % 5 === 0){ console.log("bazz"); }
		else {console.log(i);}
	}
}());