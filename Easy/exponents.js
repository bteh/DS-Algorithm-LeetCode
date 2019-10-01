// Implement an exponent function from scratch

function exponent(base, exp){
	if(exp === 0){
		return 1;
	} else if(exp < 0){
		return 1 / base * exponent(base, exp + 1)
	}
	return base * exponent(base, exp - 1) // exp goes down each time
}