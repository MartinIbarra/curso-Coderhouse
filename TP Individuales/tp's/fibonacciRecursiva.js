function fibonacciRecursiva (n){
	if(n === 1 || n === 2){
		return n;
	}
	 return (fibonacciRecursiva(n - 1) + fibonacciRecursiva(n - 2));
}

function factorial (n){
	if(n === 1){
		return 1;
	}
	return (n*factorial(n-1));
}