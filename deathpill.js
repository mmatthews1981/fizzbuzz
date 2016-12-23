(function deathpill(fizz,buzz,start,end){
	console.log((start%fizz === 0 ? "death" : "")+(start%buzz === 0 ? "pill" : "")|| start);
	start < end ? deathpill(fizz,buzz,start+1,end) : null; 
}(3,5,1,100));