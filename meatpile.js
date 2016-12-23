(function meatpile(fizz,buzz,start,end){
	var result= '';
	switch(true){
		case start%(fizz*buzz) === 0 : result += 'meatpile'; break;
		case start%fizz === 0 : result += 'meat'; break;
		case start%buzz === 0 : result += 'pile'; break;
		default: result = start; break;
	}
	console.log(result);
	start < end ? meatpile(fizz,buzz,start+1,end) : null; 
}(3,5,1,100));