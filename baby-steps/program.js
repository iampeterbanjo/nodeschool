function sumInputs(numberArray) {
	var result = 0;

	for(var s = 0; s < numberArray.length; s++) {
		result += numberArray[s] * 1;
	}

	return result;
}

console.log(sumInputs(process.argv.slice(2)));