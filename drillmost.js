var drillmost = (function(){
	var i = 1;

	while( i <= 100 ){
		var result = '';
		if(i % 3 === 0){ result += "drill"; }
		if (i % 5 === 0){ result += "most"; }
		console.log(result || i);
		i += 1;
	}
}());