(function grillmoss(num){
	var result = '';
	if(num % 3 === 0){ result += "grill"; }
	if (num % 5 === 0){ result += "moss"; }
	console.log(result || num);
	num += 1;
	if(num <= 100){ grillmoss(num); };
}(1));